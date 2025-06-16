import React from "react";
import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  const loaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    width: "100dvw",
  };

  return (
    <div style={loaderStyle}>
      <Image src={loader} height={150} width={150} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
