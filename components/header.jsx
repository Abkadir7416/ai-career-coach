import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, Stars } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  return (
    <header className='fixed w-full top-0 left-0 border-b bg-background/80'>
      <nav className=' mx-auto px-4 h-16 flex justify-between items-center'> {/* Have removed container properly will include later  */}
        <Link href={"/"}>
          <h3>Ai-Career-Coach</h3>
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant={'outline'} className='flex items-center gap-2' >
                <LayoutDashboard />
                <span className='hidden md:block'>Industry Insights</span>
              </Button>
            </Link>


            <DropdownMenu >
              <DropdownMenuTrigger>
                <Button>
                  <Stars className='h-4 w-4' />
                  <span className='hidden md:block'>Growth Tools</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/build-resume"} className='flex items-center gap-2' >
                    <FileText className='h-4 w-4' />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/ai-cover-letter"} className='flex items-center gap-2' >
                    <PenBox className='h-4 w-4' />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview"} className='flex items-center gap-2' >
                    <GraduationCap className='h-4 w-4' />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton >
              <Button variant={'outline'}>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
            afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header