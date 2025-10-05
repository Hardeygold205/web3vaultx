"use client";

import React, { useState, useEffect } from "react";
import WalletCard from "@/components/WalletCard";
import ConnectModal from "@/components/ConnectModal";

interface Wallet {
  name: string;
  image: string;
}

function Connect() {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/0xa3k5/web3icons/contents/packages/core/src/svgs/wallets/branded"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch wallets");
        }
        const data = await response.json();
        console.log("data:", data);

        const walletList: Wallet[] = data.map(
          (item: { id: string; name: string }) => ({
            name: item.name,
            image: `https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/core/src/svgs/wallets/branded/${item.id}.svg`,
          })
        );

        walletList.push(
          {
            name: "Phantom",
            image:
              "https://www.freelogovectors.net/wp-content/uploads/2021/12/phantom-logo.png",
          },
          {
            name: "Trust Wallet",
            image:
              "https://seeklogo.com/images/T/trust-wallet-logo-8D8A8A8A8A-searchlogo.com.png",
          }
        );

        setWallets(walletList);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Failed to load wallets. Showing fallback list.");
        setWallets([
          {
            name: "MetaMask",
            image:
              "https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/core/src/svgs/wallets/branded/metamask.svg",
          },
          {
            name: "Phantom",
            image:
              "https://www.freelogovectors.net/wp-content/uploads/2021/12/phantom-logo.png",
          },
          {
            name: "Trust Wallet",
            image:
              "https://seeklogo.com/images/T/trust-wallet-logo-8D8A8A8A8A-searchlogo.com.png",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  const handleWalletClick = (name: string, image: string) => {
    setSelectedWallet({ name, image });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWallet(null);
  };

  if (loading) {
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
      </div>
    );
  }

  return (
    <div className="container mx-auto justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-white text-center text-4xl font-extrabold mt-5">
          Select a Wallet
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
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
