import ConnectButton from "@/components/ConnectButton";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-xl border-b">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-md sm:text-xl text-white">Web3 VaultX</Link>
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}

export default Navbar;
