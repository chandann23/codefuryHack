import Link from "next/link"
import { Button } from "~/components/ui/button"
import { LucideProps } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Comprehensive Disaster Management</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Prepare, respond, and recover with our all-in-one disaster management platform.
            </p>
            <div className="flex justify-center gap-4">
             
              <span>Pre-Disaster</span>

              <span>During Disaster</span>

              <span>Post-Disaster</span>


            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Pre-Disaster</h2>
              <p className="text-muted-foreground text-lg">
                Prepare your community for disasters with our comprehensive tools and resources.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Risk Assessment</h3>
                    <p className="text-muted-foreground">
                      Identify potential hazards and vulnerabilities in your community.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Emergency Planning</h3>
                    <p className="text-muted-foreground">Create comprehensive emergency plans for your community.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Evacuation Routes</h3>
                    <p className="text-muted-foreground">
                      Map out safe evacuation routes and share them with your community.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Early Warning Systems</h3>
                    <p className="text-muted-foreground">
                      Receive timely alerts and notifications about impending disasters.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">During Disaster</h2>
              <p className="text-muted-foreground text-lg">
                Stay informed and connected during emergencies with our real-time updates and communication tools.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Real-Time Updates</h3>
                    <p className="text-muted-foreground">
                      Get the latest information on the disaster situation, including alerts and warnings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Emergency Shelters</h3>
                    <p className="text-muted-foreground">
                      Find the nearest emergency shelters and get details on their capacity and services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Relief Distribution</h3>
                    <p className="text-muted-foreground">
                      Stay informed about the distribution of essential supplies and aid.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Communication Channels</h3>
                    <p className="text-muted-foreground">
                      Connect with emergency services and your community through various communication channels.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Post-Disaster</h2>
              <p className="text-muted-foreground text-lg">
                Access the resources and support you need to recover and rebuild after a disaster.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Recovery Assistance</h3>
                    <p className="text-muted-foreground">
                      Find information on financial aid, housing, and other recovery resources.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Rebuilding Support</h3>
                    <p className="text-muted-foreground">
                      Access guidance and resources for rebuilding your home and community.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Mental Health Resources</h3>
                    <p className="text-muted-foreground">
                      Find support and counseling services to help with post-disaster trauma and stress.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Long-Term Recovery</h3>
                    <p className="text-muted-foreground">
                      Participate in community-driven long-term recovery planning.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Get Involved</h2>
              <p className="text-muted-foreground text-lg">
                Join our community of volunteers and supporters to help prepare, respond, and recover from disasters.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Volunteer Opportunities</h3>
                    <p className="text-muted-foreground">
                      Sign up to volunteer and help with disaster preparedness, response, and recovery efforts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Community Preparedness</h3>
                    <p className="text-muted-foreground">
                      Access resources and training to help your community prepare for disasters.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Donation Opportunities</h3>
                    <p className="text-muted-foreground">
                      Contribute financial or in-kind donations to support disaster relief and recovery efforts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CircleCheckIcon className="flex-shrink-0 w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Advocacy and Policy</h3>
                    <p className="text-muted-foreground">
                      Get involved in advocating for stronger disaster preparedness and response policies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TornadoIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">Disaster Management</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Accessibility
            </Link>
          </nav>
          <p className="text-sm">&copy; 2024 Disaster Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function CircleCheckIcon(props: LucideProps) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function MenuIcon(props: LucideProps) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TornadoIcon(props: LucideProps) {
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
