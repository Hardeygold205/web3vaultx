import React from "react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Clear Bug Error",
    description: "clear bug error",
  },
  {
    title: "Bridge Error",
    description: "Resolved Bridge Error",
  },
  {
    title: "Mint Error",
    description: "Resolved Mint Error",
  },
  {
    title: "Rectification",
    description: "Rectify unwanted transaction, smart contract or other issues",
  },
  {
    title: "KYC",
    description: "KYC your wallets, DAPPs and servers together",
  },
  {
    title: "Snapshot",
    description: "Generate a snapshot of your wallet",
  },
  {
    title: "TGLP/Infinity",
    description: "TGLP/Infinity",
  },
  {
    title: "Validation",
    description:
      "Validate your wallet to protect it from fabricated transactions through decentralized security",
  },
  {
    title: "Withdrawal",
    description:
      "A crypto Withdrawal is a transaction that allows you to move your cryptocurrency balance off the revolute plaform to an external crypto wallet that you control such as a ledger or a trezor",
  },
  {
    title: "Harvest my stakings",
    description:
      "When you choose to redeem, we'll return your assets to your spot wallet the following day",
  },
  {
    title: "Migration",
    description: "Migrate your wallet from one chain",
  },
  {
    title: "Staking pool",
    description:
      "A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase theor chances of being rewarded.",
  },
  {
    title: "Staking Review",
    description:
      "interaction between mobile apps and mobile browser are supported via mobile deep linking having complete control of your staking",
  },
  {
    title: "Connect Collab.land",
    description:
      "Collab.land leverages the power of identity through cryptocurrency and NFT's to create a social space unique to a specific network of humans.",
  },
  {
    title: "My NFT's",
    description: "View your collection of digital works",
  },
  {
    title: "Review your NFT's",
    description:
      "NFT's are digital collectibles that can traded like other cryptocurrencies. They confer some ownership right works",
  },
  {
    title: "Purchase tokens",
    description: "Also buy bitcoins, ether and many common cryptocurrencies",
  },
  {
    title: "Migration",
    description: "Migrate your wallet from one chain",
  },
  {
    title: "whitelist",
    description: "Get whitelisted to participate in out communities presale",
  },
  {
    title: "Airdrop",
    description:
      "Rectify any issues like swapping, transferring you might be experiencing with your airdrops tokens",
  },
  {
    title: "Recover Funds",
    description:
      "Protect your wallet from fabricated transactions through decentralized security",
  },
  {
    title: "Bridge",
    description:
      "Allow all your blockchain wallets and dapps interacte an communicate with each other",
  },
  {
    title: "Add Token",
    description:
      "Crypto tokens are a type of cryptocurrency that represent an asset or specific use and reside on their own blockchain",
  },
];

function Services() {
  return (
    <div className="border-y-2 p-5 shadow-2xl shadow-base-content shadow-opacity-5">
      <h1 className="text-center text-5xl font-extrabold text-white">
        Services
      </h1>
      <div className="container mx-auto px-5">
        <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
