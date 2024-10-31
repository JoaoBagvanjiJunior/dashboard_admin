import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { RocketIcon, MixerVerticalIcon, HomeIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const AppBar = () => {
    return (
        <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow-sm">
            <Link className={cn(['flex items-center text-xs px-3 py-2 rounded-md transition-colors','text-gray-500 hover:text-gray-800'])} href={"/"}>
                <HomeIcon className="w-3 h-3 mr-3" />
                Home
            </Link>
            <Link className={cn(['flex items-center text-xs px-3 py-2 rounded-md transition-colors','text-gray-500 hover:text-gray-800'])} href={"/dashboard"}>
                <RocketIcon className="w-3 h-3 mr-3" />
                Dashboard
            </Link>

            <SignInButton />
        </header>
    )
}

export default AppBar;