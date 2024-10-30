import { Button } from "@/components/ui/button";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import React, { FC } from "react";

const AssistanceRightPart: FC = (): JSX.Element => {
  return (
    <div className="content-right w-[30%] h-max rounded-lg">
      {/* Consulted-recently card */}
      <div
        className="consulted-recently h-[270px] w-full bg-cover rounded-lg p-5 flex flex-col justify-between"
        style={{ backgroundImage: `url("/tomate.jpeg")` }}
      >
        <h3 className="font-semibold text-[23px] text-white text-shadow">
          Consulté récemment
        </h3>
        <p className="text-white font-semibold text-shadow">
          Tomates biologiques
        </p>
      </div>
      {/* Help card */}
      <div className="help-card bg-white rounded-lg mt-8 flex flex-col gap-3 items-start p-5">
        <div className="w-full flex justify-center">
          <DotLottiePlayer
            src="/lottie/help.json"
            loop
            autoplay
            className="w-[170px]"
          />
        </div>
        <div className="card-content mt-2 flex flex-col gap-3">
          <h3 className="text-secondary font-semibold text-xl">
            Besoin d’aide ou d’assistance ?
          </h3>
          <Button className="flex items-center">
            Contactez-nous{" "}
            <Image
              src="/icons/right.svg"
              alt="arrow-rigt"
              width={20}
              height={20}
              className="ml-3"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssistanceRightPart;
