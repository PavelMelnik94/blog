import React, { useState, useEffect } from "react";
import arrow from "../../assets/icons/go-back.png";

let ArrowPosition = {
  left: "48%",
};

export default function GoBack() {
  const [position, setPosition] = useState({});

  useEffect(() => {
    ArrowPosition = position;
  }, [position]);

  const goBackMove = (e) => {
    const newPosition = { left: e.pageX - 50 + "px" };
    setPosition(newPosition);
  };

  return (
    <div onMouseMove={goBackMove} className="go-back">
      <span style={ArrowPosition} className="go-back-arrow">
        {" "}
        <a href="/">
          {" "}
          <img src={arrow} alt="назад" /> Back{" "}
        </a>
      </span>
    </div>
  );
}
