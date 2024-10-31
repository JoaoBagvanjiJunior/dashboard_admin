'use client'

import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button"

const SignInButton = () => {
    const { data: session } = useSession();
    console.log({session})

    if(session && session.user)
        return(
            <div className='flex gap-4 ml-auto'>
                <p className={cn(['flex items-center text-xs px-3 py-2 rounded-md transition-colors','text-gray-500 hover:text-gray-900'])}>
                    <Avatar className="h-6 w-6 mr-2 mb-1">
                        <AvatarFallback>JB</AvatarFallback>
                        <AvatarImage src="https://cdn.sanity.io/images/de6myiul/production/f207cb188b410b095ad7d339e7e0c63d05237cc0-1000x1000.png"/>
                    </Avatar> {session.user.name}
                </p>
                <Link href={"/api/auth/signout"} className={cn(['flex items-center text-xs px-3 py-2 rounded-md transition-colors','text-gray-500 hover:text-gray-800'])}>
                    <ExitIcon className="w-3 h-3 mr-3" />
                    Sign Out
                </Link>
            </div>
        );

        return (
            <div className='flex gap-4 ml-auto items-center'>
                <Link href={"/api/auth/signin"} className='flex gap-4 ml-auto'>
                    <Button className="bg-white text-black hover:bg-gray-400 transition-colors">Sign In</Button>
                </Link>
                <Link href={"/signup"} className='flex gap-4 ml-auto'>
                    <Button className="bg-black text-white">Sign Up</Button>
                </Link>
            </div>
        )
  
}

export default SignInButton