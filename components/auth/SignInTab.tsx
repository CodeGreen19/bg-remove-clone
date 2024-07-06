"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SignInTab = ({ tab }: { tab: string }) => {
  const router = useRouter();
  return (
    <div className="relative my-2 flex w-full flex-row-reverse items-center justify-around rounded-[50px] border p-4 font-bold">
      <span
        className={`absolute top-0 -z-10 h-full w-1/2 rounded-[50px] bg-main ${tab === "signIn" ? "right-0" : "left-0"}`}
      ></span>
      <span
        className={`cursor-pointer ${tab === "signIn" ? "text-white" : "text-black"}`}
        onClick={() => router.push("/sign-in")}
      >
        Sign In
      </span>
      <span
        className={`cursor-pointer ${tab !== "signIn" ? "text-white" : "text-black"}`}
        onClick={() => router.push("/sign-up")}
      >
        Sign Up
      </span>
    </div>
  );
};

export default SignInTab;
