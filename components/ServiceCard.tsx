import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: CardProps) {
  return (
    <Link href="/connect" className="block h-full">
      <div className="h-full min-h-[18rem] flex flex-col items-center justify-center gap-3 bg-sky-950 p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105">
        <h1 className="text-2xl font-extrabold text-white">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;
