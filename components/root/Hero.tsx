import Svg from "@/components/shared/Svg";
import ProvidedImg from "../shared/ProvidedImg";
import UploadBtn from "../shared/UploadBtn";

const Hero = () => {
  return (
    <div className="relative px-4 md:flex md:min-h-[70vh] md:items-center md:justify-evenly lg:min-h-screen">
      <Svg
        svgFile="/line4.svg"
        width={200}
        top={100}
        right={-100}
        hideUp="lg"
      />
      <Svg svgFile="/line2.svg" width={200} top={400} left={-100} hideUp="lg" />
      <section className="md:w-1/3 md:-translate-y-52 lg:w-1/2 lg:-translate-y-40">
        <div className="px-5 py-3 sm:px-10">
          <video
            className="w-full rounded-3xl"
            muted
            autoPlay
            src="/videos/men.mp4"
          />
        </div>
        <h1 className="my-3 text-center text-3xl font-bold md:text-start md:text-[2.2rem]">
          Reomve Image Background
        </h1>
        <h1 className="my-4 text-center text-xl font-semibold text-main">
          100% automatically and
          <span className="bg-[url(https://static.remove.bg/deco-brush.svg)] bg-cover bg-center bg-no-repeat !px-4 !py-1 text-black">
            Free
          </span>
        </h1>
      </section>
      <section className="md:w-1/3 lg:w-1/2 lg:translate-y-12">
        <UploadBtn />
        <ProvidedImg />
      </section>
    </div>
  );
};

export default Hero;
