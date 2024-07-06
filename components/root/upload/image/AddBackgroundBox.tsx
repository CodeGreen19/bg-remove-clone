"use client";

import React, { ReactNode, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { color_codes, unsplash_images } from "@/data/images";

const AddBackgroundBox = ({ children }: { children: ReactNode }) => {
  const [seledtedTab, setSelectedTab] = useState<string>("Photo");

  const tabs = ["Photo", "Color"];
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-[45vh] lg:px-40">
        <div className="overflow-y-scroll">
          <div className="sticky left-0 top-0 flex items-start justify-start gap-2 bg-white py-2 pl-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={"outline"}
                className={`rounded-3xl ${tab === seledtedTab ? "bg-main text-white hover:bg-main hover:text-white" : "hover:text-main"}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          {seledtedTab === "Photo" ? (
            <ul className="mt-3 flex flex-wrap items-center justify-start">
              {unsplash_images.map((img, i) => (
                <li className="m-1 overflow-hidden rounded-md" key={i}>
                  {" "}
                  <Image
                    className="flex-none"
                    height={100}
                    width={100}
                    src={img}
                    alt="bg"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-3 flex flex-wrap items-center justify-start">
              {color_codes.map((color, i) => (
                <li
                  style={{ backgroundColor: color }}
                  className={`m-1 h-14 w-14 overflow-hidden rounded-md`}
                  key={i}
                ></li>
              ))}
            </ul>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddBackgroundBox;
