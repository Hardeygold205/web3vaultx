"use client";

import React, { useState } from "react";
import WalletCard from "@/components/WalletCard";
import ConnectModal from "@/components/ConnectModal";

interface Wallet {
  name: string;
  image: string;
}

function Connect() {
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wallets: Wallet[] = [
    {
      name: "Arbitrum",
      image: "/arbitrum.jpg",
    },
    {
      name: "Coinbase Wallet",
      image: "/coinbase.png",
    },
    {
      name: "Trust Wallet",
      image: "/trustwallet.jpg",
    },
    {
      name: "Blockchain",
      image: "/bk.png",
    },
    {
      name: "Bitpie",
      image: "/bitpie.png",
    },
    {
      name: "Zerion",
      image: "/zerion.png",
    },
    {
      name: "MetaMask",
      image: "/metamask.jpg",
    },
    {
      name: "ONTO",
      image: "/onto.jpg",
    },
    {
      name: "imToken",
      image: "/imtoken.jpg",
    },
    {
      name: "Pillar",
      image: "/pilllar.jpg",
    },
    {
      name: "Crypto.com | DeFi Wallet",
      image: "/crypto-com.jpg",
    },
    {
      name: "Gnosis Safe Multisig",
      image: "/gnosis.jpeg",
    },
    {
      name: "Coinbase Wallet",
      image: "/coinbase.png",
    },
    {
      name: "Curve Finance",
      image: "/curvefinance.png",
    },
    {
      name: "Keplr Wallet",
      image: "/keplr.png",
    },
    {
      name: "BitPay",
      image: "/bitpay.jpg",
    },
    {
      name: "Ledger Live",
      image: "/ledgerlive.jpg",
    },
    {
      name: "Walleth",
      image: "/waleth.jpg",
    },
    {
      name: "Authereum",
      image: "/authereum.jpg",
    },
    {
      name: "Dharma",
      image: "/dhama.jpg",
    },
    {
      name: "1inch Wallet",
      image: "/1inch.jpg",
    },
    {
      name: "Huobi Wallet",
      image: "/huobi.jpg",
    },
    {
      name: "Eidoo",
      image: "/mykey.jpg",
    },
    {
      name: "MYKEY",
      image: "/mykey.jpg",
    },
    {
      name: "TrustVault",
      image: "/trustvault.jpg",
    },
    {
      name: "PlasmaPay",
      image: "/plasmaray.jpg",
    },
    {
      name: "Defiant",
      image: "/defiat.jpg",
    },
    {
      name: "Etherscan",
      image: "/etherscan.jpg",
    },
    {
      name: "yearn",
      image: "/yearn.png",
    },
  ];

  const handleWalletClick = (name: string, image: string) => {
    setSelectedWallet({ name, image });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWallet(null);
  };

  return (
    <div className="container mx-auto justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-white text-center text-4xl font-extrabold mt-5">
          Select a Wallet
        </h1>
        <div>
          <span className="loading loading-ring loading-xs text-white"></span>
          <span className="loading loading-ring text-white loading-sm"></span>
          <span className="loading loading-ring text-white loading-md"></span>
          <span className="loading loading-ring text-white loading-lg"></span>
          <span className="loading loading-ring text-white loading-xl"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-8 px-4 max-w-5xl mx-auto">
        {wallets.map((wallet, index) => (
          <WalletCard
            key={index}
            name={wallet.name}
            image={wallet.image}
            onClick={handleWalletClick}
          />
        ))}
      </div>

      <ConnectModal
        wallet={selectedWallet}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default Connect;
