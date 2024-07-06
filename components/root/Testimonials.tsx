import { clientInfo } from "@/data";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Svg from "../shared/Svg";

const Testimonials = () => {
  return (
    <div className="my-10 w-full md:my-20">
      <h1 className="relative my-5 text-center text-2xl font-bold md:text-3xl">
        <p>Our Client's Experience </p>
        <Svg
          svgFile="/clientline.svg"
          top={-100}
          right={0}
          width={150}
          hideUp="md"
        />
      </h1>
      <section className="scrollbar_hidden flex w-full items-start justify-start gap-2 overflow-x-scroll pl-3 md:items-center md:justify-between md:pl-0">
        {clientInfo.map((item) => (
          <>
            <div className="min-h-60 w-4/5 flex-none md:w-[32%]">
              <div className="h-[70%] min-h-[180px] w-full rounded-3xl rounded-br-none bg-gray-200 p-3">
                <FaQuoteLeft className="my-2 text-2xl text-gray-500" />
                <p className="text-sm">{item.comment}</p>
              </div>
              <div className="flex h-11 w-full items-center justify-between rounded-2xl bg-gray-200">
                <div className="relative flex h-full w-3/5 items-center justify-start gap-2 rounded-tr-2xl bg-white">
                  <Image
                    src={item.image}
                    height={40}
                    width={40}
                    alt="client-profile"
                    className="rounded-full"
                  ></Image>
                  <div className="flex flex-col items-start justify-start text-[10px]">
                    <span className="text-sm font-bold">{item.name}</span>
                    <span>{item.role}</span>
                  </div>
                  <div className="absolute -right-3 bottom-0 z-0 h-5 w-5 bg-white"></div>
                </div>
                <div className="z-10 h-full w-2/5 rounded-b-2xl bg-gray-200"></div>
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
