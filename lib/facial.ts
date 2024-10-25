import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const loadModels = async () => {
  const MODEL_URL = "/models";
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
};

const detectFace = async (
  webCamRef: React.RefObject<Webcam> | null,
  canvasRef: React.RefObject<HTMLCanvasElement> | null,
  setIsDetected: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (webCamRef?.current && canvasRef?.current) {
    const video = webCamRef.current.video;
    if (video && video.readyState === 4) {
      const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight,
      };
      faceapi.matchDimensions(canvasRef.current, displaySize);

      try {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        // Filtrer les détections invalides
        const validDetections = detections.filter(
          (d) =>
            d.detection.box &&
            d.detection.box.x !== null &&
            d.detection.box.y !== null &&
            d.detection.box.width !== null &&
            d.detection.box.height !== null
        );

        const resizedDetections = faceapi.resizeResults(
          validDetections,
          displaySize
        );

        if (canvasRef.current) {
          const context = canvasRef.current.getContext("2d");
          context?.clearRect(0, 0, displaySize.width, displaySize.height);
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

          if (resizedDetections.length > 0) {
            setTimeout(() => {
              setIsDetected(true);
            }, 2500);
          }
        }
      } catch (error) {
        console.error("Error in face detection:", error);
      }
    }
  }
};

const stopCamera = (webcamRef: React.RefObject<Webcam> | null) => {
  if (webcamRef?.current && webcamRef.current.video) {
    const stream = webcamRef.current.video.srcObject;
    if (stream instanceof MediaStream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
        console.log("Track stopped:", track);
      });
      webcamRef.current.video.srcObject = null;
    }
  }
};

export { detectFace, loadModels, stopCamera };
