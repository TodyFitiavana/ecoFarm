import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { detectFace, loadModels, stopCamera } from "@/lib/facial";

const useFacial = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDetected, setIsDetected] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const loadAndSetReady = async () => {
      await loadModels();

      setTimeout(() => {
        setIsReady(true);
      }, 5000);
    };
    loadAndSetReady();
  }, []);

  useEffect(() => {
    const startDetection = async () => {
      if (isReady) {
        await detectFace(webcamRef, canvasRef, setIsDetected);
      }
    };

    if (webcamRef.current && canvasRef.current) {
      const detectionInterval = setInterval(startDetection, 500);

      return () => clearInterval(detectionInterval); // Clean up on unmount
    }
  }, [isReady, setIsDetected]);

  useEffect(() => {
    if (isDetected) {
      console.log("Face detected");
    }
  }, [isDetected]);

  const stopWebCam = () => {
    stopCamera(webcamRef);
  };

  const camerIsReady = () => {
    setIsReady(true);
  };

  return {
    webcamRef,
    canvasRef,
    stopWebCam,
    isDetected,
    camerIsReady,
    isReady,
  };
};

export default useFacial;