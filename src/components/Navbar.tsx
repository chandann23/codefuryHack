import { Droplets, User } from "lucide-react";
import Link from "next/link";
import UserAccountDropdown from "~/components/UserAccountDropDown";
import { buttonVariants } from "~/components/ui/button";
import { getAuthSession } from "~/lib/auth";
import MaxWidthWrapper from "./MaxWidthWrapper";

const TopNav = async () => {
  const session = await getAuthSession();

  return (
   <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Code<span className='text-red-600'>Fury</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            <div className="flex flex-row gap-4 mr-6">
        {session?.user ? (
          <UserAccountDropdown user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
            Sign In
          </Link>
        )}
      </div>
          
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default TopNav;
