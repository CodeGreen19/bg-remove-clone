import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import NavItems from "./NavItems";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  let items = [
    { link: "/upload", title: "Remove Background" },
    { link: "/how-to-use", title: "How to Use" },
    { link: "/upload", title: "Tools" },
    { link: "/pricing", title: "Pricing" },
  ];
  return (
    <div className="sticky left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-white pl-2 pr-4 shadow-md md:shadow-sm lg:px-10">
      <div className="items-center justify-start gap-12 lg:flex">
        <Logo />
        <ul className="hidden items-center justify-start gap-6 lg:flex">
          {items.map((item) => (
            <li key={item.title} className="hover:text-main">
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block lg:hidden">
        <NavItems>
          <CgMenuRightAlt className="text-3xl" />
        </NavItems>
      </div>
      <div className="hidden lg:block">
        <Link href={"/sign-up"}>
          <Button
            className="mr-2 rounded-3xl bg-gray-50 p-5 hover:bg-gray-200"
            variant={"ghost"}
          >
            Sign Up
          </Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button className="rounded-3xl bg-main p-5 px-8">Log In</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
