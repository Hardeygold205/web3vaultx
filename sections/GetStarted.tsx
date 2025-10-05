"use client";

import { useRouter } from "next/navigation";
import React from "react";

function GetStarted() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center bg-sky-950 items-center p-10 gap-5">
      <h1 className="font-bold text-2xl text-center text-white">
        Get Started with Dapps Sync today
      </h1>
      <div className="flex-none">
        <button
          onClick={() => router.push("/connect")}
          className="btn btn-md sm:btn-md md:btn-xl lg:btn-xl xl:btn-xl border-amber-50 bg-transparent rounded-lg">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
