import Image from "next/image";
import React from "react";

interface WalletCardProps {
  name: string;
  image: string;
  onClick: (name: string, image: string) => void;
}

function WalletCard({ name, image, onClick }: WalletCardProps) {
  return (
    <button
      onClick={() => onClick(name, image)}
      className="flex flex-col items-center justify-center gap-3 bg-slate-200 p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg">
      <div className="w-16 h-16 rounded-xl flex items-center justify-center p-5">
        <Image src={image} alt={name} width={50} height={50} />
      </div>
      <h1 className="text-xl font-extrabold">{name}</h1>
    </button>
  );
}

export default WalletCard;
