"use client";
import Image from "next/image";
import React from "react";
import { FiDelete } from "react-icons/fi";
import { IoAdd, IoRemove } from "react-icons/io5";

const AddBox = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div className="flex_center h-14 w-14 rounded-md bg-slate-300">
        <IoAdd className="text-2xl" />
      </div>
      <div className="flex_center relative h-14 overflow-hidden rounded-md">
        <Image
          alt="img"
          width={64}
          height={64}
          src={"/options/car.jpeg"}
          className="h-full w-auto flex-none rounded-md border"
        ></Image>
        <div className="flex_center absolute left-0 top-0 h-full w-full bg-[#00000067]">
          <FiDelete className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default AddBox;
