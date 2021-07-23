import React from "react";

import { WaveLoading } from "react-loadingg";

const baseSize = {
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F0EDED",
  marginBottom: "2rem",
};

export default function Preloader() {
  return (
    <div>
      <WaveLoading
        color="#181818"
        size="small"
        sizeContainer="small"
        style={baseSize}
      />
    </div>
  );
}
