import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "~/server/db";
import nodemailer from "nodemailer";
import { Groq } from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Initialize Groq AI
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function GET(req: NextRequest) {

  
  try {
    const disasters = await db.disaster.findMany();
    return NextResponse.json(disasters);
  } catch (error) {
    console.error("Error fetching information:", error);
    return NextResponse.json({ error: "Error fetching information" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // Define the expected structure of the request body
    const body = await req.json() as { 
      name: string, 
      description: string, 
      date: string, 
      location: string, 
      imageUrl: string, 
      locationUrl: string,
     
    };

    // Find the user in the database
    const dbUser = await db.user.findFirst({
      where: { email: user.email! }
    });

    if (!dbUser) {
      return new Response("User not found", { status: 404 });
    }

    // Create a new disaster entry
    const newDisaster = await db.disaster.create({
      data: {
        name: body.name,
        description: body.description,
        date: new Date(body.date),
        location: body.location,
        imageUrl: body.imageUrl,
        locationUrl: body.locationUrl,
      },
    });

    // Fetch all users
    const allUsers = await db.user.findMany();

    // Send email to all users
    for (const recipient of allUsers) {
      if (recipient.email) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: recipient.email,
          subject: `New Disaster Alert: ${newDisaster.name}`,
          text: `A new disaster has been reported:\n\nLocation: ${newDisaster.location}\nDate: ${newDisaster.date}\nDescription: ${newDisaster.description}`,
          html: `<p>A new disaster has been reported:</p><p><strong>Location:</strong> ${newDisaster.location}</p><p><strong>Date:</strong> ${newDisaster.date}</p><p><strong>Description:</strong> ${newDisaster.description}</p>`,
        });
      }
    }

    return new Response(JSON.stringify(newDisaster), { status: 201 });
  } catch (error) {
    console.error("Error creating disaster:", error);
    return new Response("Error creating disaster", { status: 500 });
  }
}

