import {
  Command,
  Globe2,
  GroupIcon,
  PersonStanding,
  Settings,
  Settings2Icon,
  User2Icon,
  Users2,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import avatar from "@/public/next.svg";
import Image from "next/image";
import MainNav from "@/components/main-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
        <MainNav />
      {children}
    </main>
  );
}
