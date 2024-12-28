"use client";
import Link from "next/link";
import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { PiLinkedinLogo } from "react-icons/pi";

function Footer() {
  return (
    <div className=" bg-[#0b1b3a] poppins h-5 px-2 fixed bottom-0 left-0 w-full z-50 ">
      <div className="flex flex-row items-center justify-between">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sofia-khiznyak/"
          title="LinkedIn"
          className="text-[#92b0dfea] hover:text-[#baff7a] hover:scale-110"
        >
          <PiLinkedinLogo size={18} />
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
