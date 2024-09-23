"use client";

import LoginForm from "@/components/common/forms/LoginForm";
import React from "react";

const Login: React.FC = (): JSX.Element => {
  return (
    <section className="login flex">
      <div className="login__form w-[53%] container mx-auto flex justify-center min-h-full items-center">
        <div className="w-[400px] mb-20 mt-20">
          <LoginForm />
        </div>
      </div>
      <div className="login__right bg-[url('/login-bg.png')] w-[47%] min-h-screen bg-cover"></div>
    </section>
  );
};
export default Login;
