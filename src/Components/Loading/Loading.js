import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
function Loading() {
  return (
    <div className="loading">
      <Player
        src={"https://assets5.lottiefiles.com/packages/lf20_vf2Men.json"}
        background="transparent"
        speed="1"
        style={{ width: "400px", height: "400px" }}
        loop
        autoplay
      />
    </div>
  );
}

export default Loading;
