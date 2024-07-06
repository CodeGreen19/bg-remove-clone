import Detail from "@/components/root/Detail";
import Hero from "@/components/root/Hero";
import ShowEditedPicture from "@/components/root/ShowEditedPicture";
import Testimonials from "@/components/root/Testimonials";
import UploadPage from "@/components/shared/UploadPage";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Detail />
      <ShowEditedPicture />
      <div className="pt-4 md:pt-16">
        <UploadPage />
        <Testimonials />
      </div>
    </main>
  );
};

export default HomePage;
