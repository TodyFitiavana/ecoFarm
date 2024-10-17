import { url } from "inspector";
import React, { FC } from "react";

const AssistanceRightPart: FC = (): JSX.Element => {
  return (
    <div className="content-right w-[30%] h-max rounded-lg">
      <div
        className="consulted-recently h-[270px] w-full bg-cover rounded-lg p-5 flex flex-col justify-between"
        style={{ backgroundImage: `url("/tomate.jpeg")` }}
      >
        <h3 className="font-cal-sans text-[23px] text-white text-shadow">
          Consulté récemment
        </h3>
        <p className="text-white font-semibold text-shadow">
          Tomates biologiques
        </p>
      </div>
    </div>
  );
};

export default AssistanceRightPart;
