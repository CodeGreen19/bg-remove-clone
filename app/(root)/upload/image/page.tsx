import AddBackgroundBox from "@/components/home/upload/image/AddBackgroundBox";
import AddBox from "@/components/home/upload/image/AddBox";
import DownloadButtons from "@/components/home/upload/image/DownloadButtons";
import EditOptions from "@/components/home/upload/image/EditOptions";
import ImageBox from "@/components/home/upload/image/ImageBox";
import ShareIcons from "@/components/home/upload/image/ShareIcons";
import Svg from "@/components/shared/Svg";
import React from "react";

const UploadedImagePage = () => {
  return (
    <div className="fixed left-0 top-0 z-10 box-border min-h-screen w-full overflow-y-scroll bg-white p-4 pt-24 md:px-[5%]">
      <AddBox />
      <ImageBox />
      <EditOptions />
      <div className="flex w-full items-center justify-between">
        <DownloadButtons />
        <ShareIcons />
      </div>

      {/* svgs */}
      <Svg
        svgFile="/line0.3.svg"
        hideUp="lg"
        width={150}
        left={250}
        top={200}
      />
      <Svg
        svgFile="/line0.3.svg"
        hideUp="lg"
        width={50}
        right={200}
        top={200}
      />
      <Svg
        svgFile="/line0.3.svg"
        hideUp="lg"
        width={100}
        right={350}
        top={350}
      />
    </div>
  );
};

export default UploadedImagePage;
