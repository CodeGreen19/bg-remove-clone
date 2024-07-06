import AuthLogo from "@/components/auth/AuthLogo";
import SignInTab from "@/components/auth/SignInTab";
import SocialLogin from "@/components/auth/SocialLogin";

import { Button } from "@/components/ui/button";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex_center relative min-h-screen w-full">
      <form className="relative m-auto flex w-[400px] flex-col items-center justify-center gap-4 rounded-2xl p-7">
        <AuthLogo />
        <SignInTab tab="signIn" />
        <input
          type="eamil"
          placeholder="Email"
          className="w-full rounded-3xl border-b border-l p-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-3xl border-b border-l p-3"
        />
        <div className="my-2 w-full cursor-pointer text-end">
          forgot password
        </div>
        <Button className="rounded-3xl px-10 py-5">Submit</Button>
        <div className="flex_center my-4 h-[1px] w-full bg-slate-100">
          <div className="round w-10 bg-white p-3">or</div>
        </div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default LoginPage;
