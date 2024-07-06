import React, { ReactNode, useRef } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { CgClose } from "react-icons/cg";

const NavItems = ({ children }: { children: ReactNode }) => {
  let items = [
    { link: "/upload", title: "Remove Background" },
    { link: "/how-to-use", title: "How to Use" },
    { link: "/upload", title: "Tools" },
    { link: "/pricing", title: "Pricing" },
  ];

  const handleClick = () => {};
  return (
    <div>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="w-3/4">
          <div className="w-ful flex -translate-y-3 items-center justify-between">
            <Logo />
            <SheetClose className="rounded-3xl">
              <CgClose className="text-2xl" />
            </SheetClose>
          </div>

          <ul className="mt-10 p-2">
            {items.map((item) => (
              <li key={item.title} className="border-b py-4 text-lg">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <SheetFooter className="pt-9">
            <Link href="/sign-up">
              <SheetClose className="w-full">
                <Button className="w-full rounded-3xl bg-main p-6">
                  Sign Up
                </Button>
              </SheetClose>
            </Link>
            <Link href={"/sign-in"}>
              <SheetClose className="w-full">
                <Button
                  className="my-3 w-full rounded-3xl bg-slate-100 !p-6 hover:bg-slate-200"
                  variant={"ghost"}
                >
                  Log In
                </Button>
              </SheetClose>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavItems;
