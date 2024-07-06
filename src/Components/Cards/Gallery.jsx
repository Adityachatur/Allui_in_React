import React from "react";
import img1 from "../Images/card1.jpg";
import img2 from "../Images/card2.jpeg";
import img3 from "../Images/card3.jpeg";
import img4 from "../Images/card4.jpeg";
import img5 from "../Images/card5.jpeg";
import img6 from "../Images/card6.jpeg";
import img7 from "../Images/card7.jpeg";
import img8 from "../Images/card8.jpeg";
import img9 from "../Images/card9.jpg";
import img10 from "../Images/card10.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-w-1 aspect-h-1">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
