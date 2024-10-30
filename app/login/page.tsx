"use client";

import LoginForm from "@/components/shared/forms/LoginForm";
import React from "react";

const Login: React.FC = (): JSX.Element => {
  return (
    <section className="login flex">
      <div className="login__form w-[53%] container mx-auto flex justify-center min-h-full items-center">
        <div className="w-[400px] mb-20 mt-20">
          <LoginForm />
        </div>
      </div>
      <div className="login__right bg-[url('/login-bg.webp')] w-[47%] min-h-screen bg-cover flex items-end p-5">
        <div className="backdrop-blur-sm p-5 h-max rounded-xl">
          <p className="text-center text-white font-semibold font-semibold text-[1.8rem]">
            Ensemble, créons une agriculture innovante et durable grâce à {"  "}
            <span className="text-primary">EcoFarm</span> !
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
