"use client";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import Link from "next/link";

const categories = [
  { id: 1, text: "Football" },
  { id: 1, text: "Basketball" },
  { id: 1, text: "Tennis" },
  { id: 1, text: "Hockey" },
  { id: 1, text: "Badminton" },
  { id: 1, text: "Volleyball" },
];

export function Complete() {
  const [likes, setLikes] = useState<any[]>([]);

  const handleClick = (item: any) => {
    console.log({item});
    setLikes((prev) => [...prev, item]);
    let savedItem = localStorage.getItem("likes");
    if (savedItem !== null) {
      const likes = JSON.parse(savedItem);
      const more = [...likes, item];
      console.log({more})
      localStorage.setItem("likes", JSON.stringify(more));
    }    
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="flex gap-2">
        {categories.map((category) => (
          <Badge
            key={category.id}
            onClick={() => handleClick(category)}
          >
            {category.text}
          </Badge>
        ))}
      </div>
      <Link href="/dashboard">
        <Button>Next</Button>
      </Link>
    </div>
  );
}
