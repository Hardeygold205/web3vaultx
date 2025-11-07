"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

function ConnectButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isWalletConnect = pathname === "/wallet-connect";

  return (
    <div className="flex-none">
      <button
        onClick={() => router.push("/connect")}
        className={`btn btn-sm sm:btn-md md:btn-xl lg:btn-xl xl:btn-xl border-amber-50 rounded-lg ${isWalletConnect ? "btn-disabled" : ""}`}>
        {isWalletConnect ? "Connecting..." : "Connect Wallet"}
      </button>
    </div>
  );
}

export default ConnectButton;
