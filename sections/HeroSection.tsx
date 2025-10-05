import ConnectButton from "@/components/ConnectButton";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="my-20 container mx-auto gap-10 flex flex-col md:flex-row items-center justify-center">
      <div className="gap-5 flex flex-col items-center md:items-start justify-center p-3">
        <h1 className="text-6xl font-extrabold text-white">Web3 API</h1>
        <p className="text-center md:text-left text-lg text-white">
          Secure wallets and decentralized applications. Join 2 million+ people
          using Dapps Sync
        </p>
        <ConnectButton />
      </div>
      <div>
        <Image
          src={"/home_hero.png"}
          alt="Hero Image"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}

export default HeroSection;
