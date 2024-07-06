import React from "react";
import video from "../Images/video.mp4";
const Text1 = () => {
  return (
    <>
      <div class="paragraph">
        <video src={video} autoPlay muted></video>
        <h1>
          <span>Ad</span>itya Anil <span>Ch</span>atur
        </h1>
      </div>
    </>
  );
};

export default Text1;
