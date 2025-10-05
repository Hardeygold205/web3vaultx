import ConnectButton from "@/components/ConnectButton";
import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-xl border-b">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">Dapps Vault</a>
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}

export default Navbar;
