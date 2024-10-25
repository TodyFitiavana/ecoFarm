import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { detectFace, loadModels, stopCamera } from "@/lib/facial";

const useFacial = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDetected, setIsDetected] = useState<boolean>(false);

  useEffect(() => {
    loadModels();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      detectFace(webcamRef, canvasRef, setIsDetected);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDetected) {
      console.log("face detected");
    }
  }, [isDetected]);

  const stopWebCam = () => {
    stopCamera(webcamRef);
  };

  return { webcamRef, canvasRef, stopWebCam };
};

export default useFacial;
