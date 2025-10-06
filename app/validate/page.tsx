import React from "react";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";

function index() {
  return (
    <div className="min-h-screen inset-0 bg-black/50 flex items-center justify-center p-4 z-50 w-full">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-700">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <Image
              src={"/qrcode_www.web3vaultx.com.png"}
              alt="success"
              width={200}
              height={200}
            />
          </div>
          <LoaderCircle className="w-16 h-16 text-white animate-spin" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Validating Please Wait...
          </h1>
          <p className="text-gray-300 text-center">
            This may take a few moments to complete
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
