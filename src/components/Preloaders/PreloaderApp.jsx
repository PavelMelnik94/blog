import React from "react";
import { WaveLoading } from "react-loadingg";

const baseSize = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#181818",
};

export default function PreloaderApp() {
  return (
    <div style={baseSize}>
      <WaveLoading color="#F0EDED" />
    </div>
  );
}
