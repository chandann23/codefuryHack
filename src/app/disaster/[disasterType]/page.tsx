import React from 'react';
import { Groq } from 'groq-sdk';
import { notFound } from 'next/navigation';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function getDisasterInfo(disasterType: string) {
  try {
    const prompt = `Provide a brief explanation (2-3 sentences) of ${disasterType} and list 5 important guidelines to follow during such a disaster.`;
    
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'mixtral-8x7b-32768',
      max_tokens: 300,
    });

    const response = completion.choices[0]?.message.content?.trim() || '';
    
    // Split the response into explanation and guidelines
    const [explanation, ...guidelinesText] = response.split('\n\n');
    const guidelines = guidelinesText.join('\n\n').split('\n').filter(line => line.trim() !== '');

    return { explanation, guidelines };
  } catch (error) {
    console.error('Error fetching disaster information:', error);
    return null;
  }
}

export default async function DisasterTypePage({ params }: { params: { disasterType: string } }) {
  const disasterType = params.disasterType;
  const disasterInfo = await getDisasterInfo(disasterType);

  if (!disasterInfo) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{disasterType}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-lg">{disasterInfo.explanation}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          {disasterInfo.guidelines.map((guideline, index) => (
            <li key={index} className="text-lg">{guideline}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { disasterType: string } }) {
  return {
    title: `${params.disasterType.charAt(0).toUpperCase() + params.disasterType.slice(1)} Information`,
    description: `Learn about ${params.disasterType} and guidelines to follow during this disaster.`,
  };
}