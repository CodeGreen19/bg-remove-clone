"use client";
import { categorNames } from "@/data";
import Image from "next/image";
import React, { useState } from "react";

const ShowEditedPicture = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="py-5 text-center">
      <h1 className="text-2xl font-bold md:text-3xl">Just Picture it !</h1>
      <ul className="my-3 flex w-full items-center justify-evenly py-3 md:m-auto md:my-6 md:max-w-md">
        {categorNames.map((item, i) => (
          <li
            className={`cursor-pointer rounded-3xl p-2 px-4 text-sm ${selectedIndex === i ? "bg-gray-200" : ""}`}
            onClick={() => setSelectedIndex(i)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {/* show image section  */}
      <ul className="scrollbar_hidden flex w-full items-center justify-start gap-2 overflow-x-scroll pl-5 md:overflow-visible md:px-6 lg:pl-0">
        {categorNames[selectedIndex].img.map((img) => (
          <li
            key={img}
            className="w-3/5 flex-none overflow-hidden rounded-2xl lg:w-1/4"
          >
            <Image
              src={img}
              height={400}
              width={300}
              alt="altImg"
              className="w-full"
            ></Image>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEditedPicture;
