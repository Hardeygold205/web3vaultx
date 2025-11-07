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
      className="flex flex-col items-center justify-center gap-10 p-4 text-center transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg">
      <div className="w-32 sm:w-48 sm:h-48 h-32 rounded-xl flex items-center  bg-slate-200 justify-center p-5">
        <Image src={image} alt={name} width={320} height={320} />
      </div>
      <h1 className="text-xl font-extrabold text-white">{name}</h1>
    </button>
  );
}

export default WalletCard;
