import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="my-8 w-full px-2 text-center text-2xl font-bold text-main">
      {text}
    </h1>
  );
};

export default Heading;
