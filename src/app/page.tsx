import Link from "next/link"
import { Button } from "~/components/ui/button"
import { LucideProps } from "lucide-react"
import router from "next/navigation"
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
     <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b border-muted">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Be Ready, Stay Safe: Your Guide to Disaster Preparedness
                </h1>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                  Reliable info, essential skills, and real-time updates.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">

                <Link
                    href="/dashboard"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                               <Link
                  href="/LearnMore"
                  className="inline-flex items-center text-sm pl-2 font-medium text-primary hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[1300px] rounded-xl bg-muted p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <TriangleAlertIcon className="h-8 w-8 text-red-500" />
                  <span className="text-sm font-medium">Alerts</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <MapIcon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Maps</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <EarthIcon className="h-8 w-8 text-red-500" />
                  <span className="text-sm font-medium">Earthquakes</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <CloudRainIcon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Floods</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <TornadoIcon className="h-8 w-8 text-red-500" />
                  <span className="text-sm font-medium">Tornadoes</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Learn to Respond</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Gain essential skills and knowledge to prepare for and respond to disasters.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Disaster Preparedness</h3>
                <p className="text-muted-foreground">
                  Learn how to create an emergency plan, build a disaster kit, and stay informed.
                </p>
 <Button className="mt-4" asChild><Link href="/LearnMore">Start Learning</Link></Button>

              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">First Aid Training</h3>
                <p className="text-muted-foreground">
                  Acquire essential first aid skills to help yourself and others in an emergency.
                </p>
                <Button className="mt-4" asChild><Link href="/LearnMore">Start Learning</Link></Button>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Emergency Response</h3>
                <p className="text-muted-foreground">
                  Understand how to respond effectively during different types of disasters.
                </p>
 <Button className="mt-4" asChild><Link href="/LearnMore">Start Learning</Link></Button>

              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Stay Connected</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay informed and connected with our community of disaster preparedness enthusiasts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Real-Time Alerts</h3>
                  <p className="text-muted-foreground">
                    Receive instant notifications about emergencies and disasters in your area.
                  </p>
     <Button className="mt-4" asChild><Link href="/ngo_page">Sign up for updates</Link></Button>

                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Disaster Updates</h3>
                  <p className="text-muted-foreground">
                    Stay up-to-date with the latest news, resources, and recovery efforts.
                  </p>
                  <Button className="mt-4" asChild><Link href="/sign-up">Sign up for updates</Link></Button>
                </div>
              </div>
              <img
                src="https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">About Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Disaster Preparedness is a comprehensive platform dedicated to helping individuals and communities
                  prepare for and respond to natural disasters. Our mission is to empower people with the knowledge,
                  skills, and resources they need to stay safe and resilient in the face of emergencies.
                </p>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experts has decades of experience in disaster management, emergency response, and
                  community resilience. We believe that by working together, we can build a more prepared and connected
                  world, where everyone has the tools they need to protect themselves and their loved ones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg"
                width="550"
                height="310"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower individuals and communities with the knowledge and resources they need to prepare for and
                    respond to natural disasters.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Our Values</h3>
                  <p className="text-muted-foreground">Reliability, Resilience, Community, and Empowerment.</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Our Team</h3>
                  <p className="text-muted-foreground">
                    Our team of experts has decades of experience in disaster management, emergency response, and
                    community resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Disaster Preparedness. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-primary" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-primary" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CloudRainIcon(props : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  )
}


function EarthIcon(props : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function MapIcon(props : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function MountainIcon(props  : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TornadoIcon(props : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 4H3" />
      <path d="M18 8H6" />
      <path d="M19 12H9" />
      <path d="M16 16h-6" />
      <path d="M11 20H9" />
    </svg>
  )
}


function TriangleAlertIcon(props : LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

