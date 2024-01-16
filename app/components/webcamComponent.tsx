"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export const WebcamComponent = ({ accessAnalysData, imgSrc, setImgSrc }) => {
  const [isActive, setIsActive] = useState(false);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  useEffect(() => {
    if (!isActive) {
      return;
    }
    capture();
    console.log(isActive);
  }, [accessAnalysData, imgSrc]);

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImgSrc(imageSrc);
    setIsActive((prev) => true);
  }, [webcamRef]);
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />{" "}
      {isActive ? (
        <button
          className="pt-4"
          onClick={() => {
            setIsActive(false);
          }}
        >
          Остановить
        </button>
      ) : (
        <button className="pt-4" onClick={capture}>
          Запустить
        </button>
      )}
    </>
  );
};
