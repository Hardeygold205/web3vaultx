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
    {
      name: "BulkSender",
      image: "/yearn.png",
    },
    {
      name: "yearn",
      image: "/bulksender.png",
    },
    {
      name: "Betoken",
      image: "/betoken.png",
    },
    {
      name: "Escaroo",
      image: "/escaroo.png",
    },
    {
      name: "Token Market",
      image: "/tokamak.png",
    },
    {
      name: "Loom Network",
      image: "/loomnetwork.png",
    },
    {
      name: "Mint Base",
      image: "/mintbase.jpg",
    },
    {
      name: "Affagato",
      image: "/affogato.png",
    },
    {
      name: "StablePay",
      image: "/stablepay.jpg",
    },
    {
      name: "Defi Saver",
      image: "/defisaver.jpg",
    },
    {
      name: "ThorChain",
      image: "/thorchain.jpeg",
    },
    {
      name: "yearn",
      image: "/yearn.png",
    },
    {
      name: "HelioWallet",
      image: "/helio.png",
    },
    {
      name: "MCDEX",
      image: "/mcdex.png",
    },
    {
      name: "Mesa",
      image: "/mesa.png",
    },
    {
      name: "Mesa",
      image: "/mesa.png",
    },
    {
      name: "2Key",
      image: "/2key.jpg",
    },
    {
      name: "Melon",
      image: "/melon.png",
    },
    {
      name: "Chainsfr",
      image: "/chainf3.png",
    },
    {
      name: "Pitch",
      image: "/pitch.jpeg",
    },
    {
      name: "Unagii",
      image: "/unagi.png",
    },
    {
      name: "Cream Finance",
      image: "/cream.jpeg",
    },
    {
      name: "zKSync",
      image: "/zksync.jpeg",
    },
    {
      name: "Snapshot",
      image: "/snapshot.jpeg",
    },
    {
      name: "Starname",
      image: "/starname.png",
    },
    {
      name: "Space",
      image: "/space.png",
    },
    {
      name: "Shell Exchange",
      image: "/shell.jpg",
    },
    {
      name: "Maskbook",
      image: "/maskbook.png",
    },
    {
      name: "DODO",
      image: "/dodo.png",
    },
    {
      name: "Tokamak Network",
      image: "/tokamak.png",
    },
    {
      name: "Snapshot",
      image: "/snapshot.jpeg",
    },
    {
      name: "Ankr",
      image: "/ankr.jpg",
    },
    {
      name: "zLOT",
      image: "/zlot.jpg",
    },
    {
      name: "Actus Protocol",
      image: "/actusprotocol.jpg",
    },
    {
      name: "Rubic Exchange",
      image: "/rubic.jpg",
    },
    {
      name: "filecone Wallet",
      image: "/filecoin.png",
    },
    {
      name: "Bancor Wallet",
      image: "/bancor.png",
    },
    {
      name: "Falconswap",
      image: "/falconswap.png",
    },
    {
      name: "Harvest Finance",
      image: "/harvestfinance.jpg",
    },
    {
      name: "OctoFi",
      image: "/octofi.jpeg",
    },
    {
      name: "Bitfrost Finance",
      image: "/bitfrost.png",
    },
    {
      name: "Orchid Protocol",
      image: "/orchid.png",
    },
    {
      name: "Streamr",
      image: "/streamr.jpg",
    },
    {
      name: "XinFin XDC Network",
      image: "/xdcnetwork.png",
    },
    {
      name: "Datamine Network",
      image: "/datamine.jpg",
    },
    {
      name: "DappRadar",
      image: "/dappradar.png",
    },
    {
      name: "DAOStack",
      image: "/daostack.jpg",
    },
    {
      name: "KnownOrigin",
      image: "/knownorigin.jpeg",
    },
    {
      name: "Mushroom Finance",
      image: "/mushroomfinance.jpg",
    },
    {
      name: "SuperRare",
      image: "/SR.jpeg",
    },
    {
      name: "SuperRare",
      image: "/public/coin98.jpg",
    },
    {
      name: "HoneySwap",
      image: "/honeyswap.jpg",
    },
    {
      name: "Mooni",
      image: "/mooni.jpg",
    },
    {
      name: "Matic",
      image: "/matic.jpeg",
    },
    {
      name: "Clovers",
      image: "/clovers.png",
    },
    {
      name: "Fleek",
      image: "/fleek.png",
    },
    {
      name: "03Wallet",
      image: "/03wallet.jpg",
    },
    {
      name: "3Box",
      image: "/3box.png",
    },
    {
      name: "88mph",
      image: "/88mph.jpg",
    },
    {
      name: "Aave",
      image: "/aave.png",
    },
    {
      name: "AdEx",
      image: "/adex.jpeg",
    },
    {
      name: "AKA3",
      image: "/aka3.png",
    },
    {
      name: "Alice",
      image: "/alice.jpg",
    },
    {
      name: "AlphaWallet",
      image: "/alphawallet.jpg",
    },
    {
      name: "AstroTools",
      image: "/astrotools.jpg",
    },
    {
      name: "Atomic",
      image: "/atomic.jpg",
    },
    {
      name: "Babooray",
      image: "/babooray.png",
    },
    {
      name: "Balanced",
      image: "/balanced.jpg",
    },
    {
      name: "Binance DEX",
      image: "/binance-dex.png",
    },
    {
      name: "BitKeep",
      image: "/bitkeep.jpg",
    },
    {
      name: "Bridge Wallet",
      image: "/bridgewallet.jpg",
    },
    {
      name: "Coin98",
      image: "/coin98.jpg",
    },
    {
      name: "Coinomi",
      image: "/coinomi.jpg",
    },
    {
      name: "Compound",
      image: "/compound.png",
    },
    {
      name: "CoolWallet",
      image: "/coolwallet.jpg",
    },
    {
      name: "CYBAVO",
      image: "/cybavo.jpg",
    },
    {
      name: "DDEX",
      image: "/ddex.png",
    },
    {
      name: "DeBank",
      image: "/debank.jpeg",
    },
    {
      name: "DefiTracker",
      image: "/defitracker.png",
    },
    {
      name: "Dex.AG",
      image: "/dexag.png",
    },
    {
      name: "dexBlue",
      image: "/dexblue.jpeg",
    },
    {
      name: "dYdX",
      image: "/dydx.jpeg",
    },
    {
      name: "Eidoo",
      image: "/eidoo.jpg",
    },
    {
      name: "ENS Domains",
      image: "/ensdomain.jpeg",
    },
    {
      name: "Equal",
      image: "/equal.jpg",
    },
    {
      name: "Curve (Logo)",
      image: "/curvelogo.png",
    },
    {
      name: "Furucombo",
      image: "/furucombo.png",
    },
    {
      name: "Gelato",
      image: "/gelato.jpg",
    },
    {
      name: "GridPlus",
      image: "/gridplus.jpg",
    },
    {
      name: "Guarda",
      image: "/guarda.jpg",
    },
    {
      name: "HashKey",
      image: "/haskey.jpg",
    },
    {
      name: "Hegic",
      image: "/hegic.jpeg",
    },
    {
      name: "Idle Finance",
      image: "/idlefinance.png",
    },
    {
      name: "iearn.finance",
      image: "/iearnfinance.jpg",
    },
    {
      name: "Index Coop",
      image: "/indexcoop.jpg",
    },
    {
      name: "InstaDApp",
      image: "/instadapp.jpeg",
    },
    {
      name: "Jade",
      image: "/jade.jpg",
    },
    {
      name: "Kickback",
      image: "/kickback.jpeg",
    },
    {
      name: "KyberSwap",
      image: "/kyberswap.jpg",
    },
    {
      name: "Lido",
      image: "/lido.png",
    },
    {
      name: "Linkdrop",
      image: "/linkdrop.png",
    },
    {
      name: "Loopring",
      image: "/loopring.jpeg",
    },
    {
      name: "Matcha",
      image: "/matcha].jpeg",
    },
    {
      name: "MathWallet",
      image: "/mathwallet.jpg",
    },
    {
      name: "MatraDAO",
      image: "/matradao.png",
    },
    {
      name: "MEET.ONE",
      image: "/meet-one.jpg",
    },
    {
      name: "Morix Wallet",
      image: "/morixwallet.jpg",
    },
    {
      name: "MyCrypto",
      image: "/mycrypto.png",
    },
    {
      name: "MyEtherWallet",
      image: "/myetherwallet.jpeg",
    },
    {
      name: "Nash",
      image: "/nash.jpeg",
    },
    {
      name: "Oasis",
      image: "/oasis.png",
    },
    {
      name: "Ocean Protocol",
      image: "/oceanprotocol.png",
    },
    {
      name: "1inch Exchange",
      image: "/oneinchexchange.png",
    },
    {
      name: "OpenSea",
      image: "/opensea.jpg",
    },
    {
      name: "Phantom",
      image: "/phantom.jpg",
    },
    {
      name: "PoolTogether",
      image: "/pooltogether.png",
    },
    {
      name: "Rarible",
      image: "/rarible.png",
    },
    {
      name: "RCN Finance",
      image: "/rcnfinance.jpg",
    },
    {
      name: "RWallet",
      image: "/rwallet.jpg",
    },
    {
      name: "Sablier",
      image: "/sablier.jpeg",
    },
    {
      name: "SafePai",
      image: "/safepai.jpg",
    },
    {
      name: "Solana",
      image: "/solana.png",
    },
    {
      name: "Spatium",
      image: "/spatium.jpg",
    },
    {
      name: "SushiSwap",
      image: "/sushiswap.png",
    },
    {
      name: "SwapX",
      image: "/swapx.jpeg",
    },
    {
      name: "Synthetix",
      image: "/synthetix.jpeg",
    },
    {
      name: "Terra Station",
      image: "/terrastation.png",
    },
    {
      name: "Tokenary",
      image: "/tokenary.jpg",
    },
    {
      name: "TokenMarket",
      image: "/tokenmarket.png",
    },
    {
      name: "TokenPocket",
      image: "/tokenpocket.jpg",
    },
    {
      name: "TokenSets",
      image: "/tokensets.jpeg",
    },
    {
      name: "Torus",
      image: "/torus.jpg",
    },
    {
      name: "Totle",
      image: "/totle.jpeg",
    },
    {
      name: "Trustee Wallet",
      image: "/trustee-wallet.jpg",
    },
    {
      name: "Unstoppable Domains",
      image: "/unstoppable.png",
    },
    {
      name: "Vision",
      image: "/vision.jpg",
    },
    {
      name: "Zapper",
      image: "/zapper.png",
    },
    {
      name: "Zelcore",
      image: "/zelcore.jpg",
    },
    {
      name: "Other Wallets",
      image: "/other-wallet.jpeg",
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
