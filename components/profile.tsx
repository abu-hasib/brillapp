"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "./ui/badge";

export default function Profile() {
  const [user, setUser] = useState(() =>
    window && window?.localStorage?.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null
  );
  const [likes, setLikes] = useState(() =>
    window && window?.localStorage?.getItem("likes")
      ? JSON.parse(localStorage.getItem("likes") as string)
      : null
  );
  const router = useRouter();
  if (!user) router.push("/login");
  return (
    <div className="text-center space-y-8 mt-10">
      <h1 className="font-semibold text-3xl">Welcome, {user.email}</h1>
      <p className="font-bold text-xl">Your digits: {user.phone}</p>
      <ul>
        {likes.length
          ? likes.map((like) => <Badge key={like.id}>{like.text}</Badge>)
          : null}
      </ul>
    </div>
  );
}
