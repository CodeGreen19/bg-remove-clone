import Link from "next/link";
import React, { Fragment } from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import Logo from "./Logo";
import Image from "next/image";

const Footer = () => {
  let icons = [
    { icons: <BiLogoFacebookCircle />, link: "#" },
    { icons: <BiLogoInstagram />, link: "#" },
    { icons: <BiLogoTwitter />, link: "#" },
    { icons: <BiLogoTiktok />, link: "#" },
    { icons: <BiLogoYoutube />, link: "#" },
    { icons: <BiLogoLinkedin />, link: "#" },
  ];
  const links = [
    { text: "Terms of Service", link: "#" },
    { text: "General Terms and Conditions", link: "#" },
    { text: "Privacy Policy", link: "#" },
    { text: "Pricing", link: "#" },
  ];
  return (
    <Fragment>
      <svg
        id="wave"
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-1"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop
              stop-color="rgba(159.745, 159.745, 159.745, 1)"
              offset="0%"
            ></stop>
            <stop
              stop-color="rgba(214.388, 214.388, 214.388, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="#2a4757"
          d="M0,60L48,51.7C96,43,192,27,288,25C384,23,480,37,576,40C672,43,768,37,864,41.7C960,47,1056,63,1152,60C1248,57,1344,33,1440,35C1536,37,1632,63,1728,71.7C1824,80,1920,70,2016,61.7C2112,53,2208,47,2304,43.3C2400,40,2496,40,2592,35C2688,30,2784,20,2880,16.7C2976,13,3072,17,3168,26.7C3264,37,3360,53,3456,58.3C3552,63,3648,57,3744,45C3840,33,3936,17,4032,16.7C4128,17,4224,33,4320,40C4416,47,4512,43,4608,50C4704,57,4800,73,4896,73.3C4992,73,5088,57,5184,56.7C5280,57,5376,73,5472,70C5568,67,5664,43,5760,30C5856,17,5952,13,6048,15C6144,17,6240,23,6336,28.3C6432,33,6528,37,6624,33.3C6720,30,6816,20,6864,15L6912,10L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
        ></path>
      </svg>
      <footer className="w-full bg-[#2a4757] text-[#dedede] lg:px-8 lg:py-6">
        <div className="flex w-full items-center justify-between px-6">
          <div className="lg:flex_center hidden">
            <Logo />
          </div>
          <ul className="w-full justify-end gap-4 pt-7 md:flex">
            {links.map((item) => (
              <li
                key={item.text}
                className="my-2 flex flex-col items-center justify-center text-sm underline"
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex md:flex-row-reverse md:items-center md:justify-between md:px-4">
          <div>
            <ul className="flex items-center justify-center gap-1 py-6">
              {icons.map((item, i) => (
                <li
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-main p-3 text-2xl text-white"
                >
                  <Link href={item.link}>{item.icons}</Link>
                </li>
              ))}
            </ul>
          </div>

          <h4 className="py-4 text-center text-[0.8rem] font-bold">
            @bggone.com,All Rights Reserved
          </h4>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
