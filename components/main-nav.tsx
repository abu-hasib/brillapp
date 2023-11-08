"use client";

import { Command, Globe2, Settings, User2Icon, UsersIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import avatar from "@/public/next.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MainNav() {
  const router = useRouter();
  const handleClick = () => {
    console.log("clike.");
    localStorage.removeItem("user");
    router.push("/");
  };
  return (
    <header className="absolute bottom-0 md:sticky w-full flex h-20 p-4 items-center  justify-between bg-white shadow-md">
      <Command className="hidden md:block" />
      <ul className="flex gap-8 justify-between items-center w-full md:w-[50%]">
        <Link href="/dashboard">
          <li className="font-bold flex gap-2">
            <User2Icon /> <span className="hidden md:block">Profile</span>
          </li>
        </Link>
        <li className="font-bold flex gap-2">
          <UsersIcon /> <span className="hidden md:block">Buddies</span>
        </li>
        <li className="font-bold flex gap-2">
          <Globe2 /> <span className="hidden md:block">Discover</span>
        </li>
        <Link href="/dashboard/settings">
          <li className="font-bold flex gap-2">
            <Settings /> <span className="hidden md:block">Settings</span>
          </li>
        </Link>
        <li >
          <Button onClick={() => handleClick} variant="ghost">Logout</Button>
        </li>
      </ul>
      <Image
        height={30}
        width={30}
        className="hidden md:block rounded-full h-[40px] w-[40px] outline outline-1 outline-black object-fit"
        src={avatar}
        alt="avatar"
      />
    </header>
  );
}
