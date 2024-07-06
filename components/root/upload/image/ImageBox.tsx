import Image from "next/image";
import React from "react";
import { BsPhoneFlip } from "react-icons/bs";

const ImageBox = () => {
  return (
    <div className="flex_center relative m-auto my-2 w-full rounded-md border sm:w-[400px]">
      <Image
        height={300}
        width={300}
        alt="upload_img"
        src={"/logo/logo.png"}
        className="w-full"
      ></Image>
      <div className="absolute bottom-0 right-0 cursor-pointer rounded-md bg-white p-3 hover:bg-gray-200">
        <BsPhoneFlip />
      </div>
    </div>
  );
};

export default ImageBox;
