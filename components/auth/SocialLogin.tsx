import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="mr-1 w-1/2 cursor-pointer rounded-3xl border p-3 transition-all hover:scale-90">
        <FaGoogle className="text-red-500" /> Continue with Google
      </div>
      <div className="ml-1 w-1/2 cursor-pointer rounded-3xl border p-3 transition-all hover:scale-90">
        <FaFacebook className="text-blue-500" /> Continue with Facebook
      </div>
    </div>
  );
};

export default SocialLogin;
