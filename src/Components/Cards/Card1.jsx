import React from "react";

// Import your images
import img1 from "../Images/card1.png";
import img2 from "../Images/card1.png";
import img3 from "../Images/card1.png";
import img4 from "../Images/card1.png";
import img5 from "../Images/card1.png";
import img6 from "../Images/card1.png";
import img7 from "../Images/card1.png";
import img8 from "../Images/card1.png";
import img9 from "../Images/card1.png";
import img10 from "../Images/card1.png";

const Card1 = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const items = images.map((image, index) => (
    <div
      className="Card1-items"
      key={index}
      style={{ "--position": index + 1 }}
    >
      <img src={image} alt={`Card ${index + 1}`} />
    </div>
  ));

  return (
    <div>
      <div className="Card1-banner">
        <div className="Card1-slider" style={{ "--quantity": images.length }}>
          {items}
        </div>
        <div className="content">
          <h1>Css Class</h1>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
