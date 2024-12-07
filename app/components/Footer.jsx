"use client";
import Link from "next/link";
import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { PiLinkedinLogo } from "react-icons/pi";

function Footer() {
  return (
    <div className=" bg-[#0b1b3a] poppins h-5 px-2 fixed bottom-0 left-0 w-full">
      <div className="flex flex-row items-center justify-between">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sofia-khiznyak/"
        >
          <PiLinkedinLogo size={18} color="#92b0dfea" />
        </Link>
        <div className="flex gap-0.5 text-[#d8daddaf] text-[11px] font-extralight items-center opacity-80">
          <LiaCopyright size={12} />
          <p className="tracking-wider">Sofia Khizhnyak</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
