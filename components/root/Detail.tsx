"use client";

import Image from "next/image";
import React from "react";
import Svg from "../shared/Svg";

const Detail = () => {
  return (
    <div className="relative min-h-[50vh] p-6 pt-8 md:flex md:items-center md:justify-evenly md:px-28 lg:min-h-screen lg:px-1">
      <Svg svgFile="/line1.svg" hideUp="lg" width={400} left={100} top={5} />
      <div className="md:w-1/2">
        <h1 className="relative text-2xl font-bold">
          Remove backgrounds 100% automatically in 5 seconds with one click
          <Svg
            svgFile="/line0.svg"
            hideUp="lg"
            effect={false}
            width={100}
            left={0}
            top={8}
          />
        </h1>

        <p className="my-2">
          Thanks to remove.bg's clever AI, you can slash editing time - and have
          more fun!
        </p>
        <p className="">
          No matter if you want to make a background transparent (PNG), add a
          white background to a photo, extract or isolate the subject, or get
          the cutout of a photo - you can do all this and more with remove.bg.
        </p>
      </div>
      <div className="relative px-14 md:w-1/2">
        <Svg
          svgFile="/line3.svg"
          hideUp="lg"
          width={100}
          right={-100}
          bottom={8}
        />

        <Image
          width={400}
          className="m-auto w-3/4"
          height={400}
          alt="DetailImg"
          src={"/detail.png"}
        />
      </div>
    </div>
  );
};

export default Detail;
