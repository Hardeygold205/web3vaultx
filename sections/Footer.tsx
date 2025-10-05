import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="row-start-3 p-20 flex gap-[24px] flex-wrap items-center justify-center text-white">
      <div className="flex flex-col md:flex-row justify-between items-baseline-last w-full gap-y-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-extrabold text-3xl text-center md:text-start">
            Dapps Sync
          </h1>
          <p className="text-center md:text-start">
            DAPP Sync is a Proud provider of DAPP Network Services
          </p>
        </div>
        <div className="flex flex-row gap-3 justify-center mx-auto text-center">
          <Link href="/">Telegram</Link>
          <Link href="/">WhatsApp</Link>
          <Link href="/">Email</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
