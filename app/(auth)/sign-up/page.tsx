import AuthLogo from "@/components/auth/AuthLogo";
import SignInTab from "@/components/auth/SignInTab";
import SocialLogin from "@/components/auth/SocialLogin";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <div className="flex_center min-h-screen w-full">
      <form className="relative m-auto flex w-[400px] flex-col items-center justify-center gap-4 rounded-2xl p-7">
        <AuthLogo />
        <SignInTab tab="signUp" />
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-3xl border-b border-l p-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-3xl border-b border-l p-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-3xl border-b border-l p-3"
        />
        <Button className="rounded-3xl px-10 py-5">Submit</Button>
        <div className="flex_center my-4 h-[1px] w-full bg-slate-100">
          <div className="round w-10 bg-white p-3">or</div>
        </div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default SignUpPage;
