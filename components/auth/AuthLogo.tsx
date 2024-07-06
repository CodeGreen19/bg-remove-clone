import React from "react";
import Logo from "../shared/Logo";

const AuthLogo = () => {
  return (
    <div className="absolute -top-16 flex flex-col items-start px-4 pb-2">
      <Logo />
      <p className="mt-1 px-2 text-sm text-main">
        Create a new account or simply login to download{" "}
        <span className="underline">bggone</span> assets
      </p>
    </div>
  );
};

export default AuthLogo;
