"use client";

import { useRouter } from "next/navigation";
import React from "react";

function ConnectButton() {
  const router = useRouter();

  return (
    <div className="flex-none">
      <button
        onClick={() => router.push("/connect")}
        className="btn btn-md sm:btn-md md:btn-xl lg:btn-xl xl:btn-xl border-amber-50 rounded-lg">
        Connect Wallet
      </button>
    </div>
  );
}

export default ConnectButton;
