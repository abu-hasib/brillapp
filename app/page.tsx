import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/components/register";
import Image from "next/image";
import { LoginForm } from "@/components/login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p>You can log in with your email or phone no below</p>
      </div>
      <LoginForm />
    </main>
  );
}
