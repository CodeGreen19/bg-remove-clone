import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Svg from "@/components/shared/Svg";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="m-auto max-w-screen-lg">
        <Svg
          svgFile="/line0.1.svg"
          hideUp="lg"
          width={170}
          top={80}
          right={200}
        />
        <Svg
          svgFile="/line0.1.svg"
          hideUp="lg"
          width={70}
          top={280}
          left={200}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
