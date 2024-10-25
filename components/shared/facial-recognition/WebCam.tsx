import React, { FC, Fragment, useEffect } from "react";
import Webcam from "react-webcam";
import useFacial from "@/hooks/useFacial";

const WebCam: FC = (): JSX.Element => {
  const { canvasRef, webcamRef } = useFacial();

  return (
    <Fragment>
      <div className="relative w-full h-full z-20">
        <Webcam
          ref={webcamRef}
          className="webcam w-full h-full absolute top-0 left-0 rounded-xl"
          screenshotFormat="image/jpeg"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <canvas
          ref={canvasRef}
          className="output_canvas w-full h-full absolute top-0 left-0 rounded-xl"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
    </Fragment>
  );
};

export default WebCam;
