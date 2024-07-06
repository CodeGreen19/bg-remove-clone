"use client";
import ProvidedImg from "@/components/shared/ProvidedImg";
import Svg from "@/components/shared/Svg";
import UploadBtn from "@/components/shared/UploadBtn";

const UploadPage = () => {
  let images = [
    "/options/car.jpeg",
    "/options/car.jpeg",
    "/options/car.jpeg",
    "/options/car.jpeg",
  ];
  return (
    <div className="flex_center relative min-h-[90vh] px-4 md:flex md:items-center md:justify-evenly lg:min-h-screen">
      <Svg svgFile="/line0.2.svg" hideUp="lg" width={200} left={0} top={50} />
      <Svg
        svgFile="/line0.2.svg"
        hideUp="lg"
        width={100}
        right={0}
        bottom={250}
      />
      <section className="md:w-1/3 md:-translate-y-20 lg:w-1/2">
        <h1 className="my-4 text-center text-3xl font-[1000] text-gray-500">
          Upload an Image <br /> to remove the background
        </h1>
        <UploadBtn />
        <ProvidedImg />
      </section>
    </div>
  );
};

export default UploadPage;
