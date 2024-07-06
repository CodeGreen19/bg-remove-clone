import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProvidedImg = () => {
  let images = [
    "/options/car.jpeg",
    "/options/car.jpeg",
    "/options/car.jpeg",
    "/options/car.jpeg",
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1>No image? Try one of these:</h1>
        <div className="flex items-center justify-center">
          {images.map((item, i) => {
            return (
              <Image
                key={i}
                height={60}
                width={60}
                alt="option_img"
                src={item}
                className="m-1 my-5 rounded-md"
              ></Image>
            );
          })}
        </div>
      </div>
      <h5 className="text-center text-[0.7rem] md:text-start">
        By uploading an image or URL you agree to our{" "}
        <Link href={"#"} className="underline">
          Terms of Survice
        </Link>
        . To learn more about how bggone.bg handles your personal data, check
        our{" "}
        <Link href={"#"} className="underline">
          Privacy Policy
        </Link>
        .
      </h5>
    </>
  );
};

export default ProvidedImg;
