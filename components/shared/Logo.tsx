import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-center gap-1">
        <Image
          height={100}
          width={100}
          alt="main-logo"
          src={"/logo/logo.png"}
          className="w-12"
        />
        <div className="text-3xl font-bold">
          <span className="text-gray-300">bg</span>
          <span className="text-main">gone</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
