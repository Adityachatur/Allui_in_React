import React from "react";
import img from "../Images/card1.jpg";
import img1 from "../Images/card9.jpg";
import img2 from "../Images/card10.jpg";
import img3 from "../Images/card6.jpeg";
import img4 from "../Images/card5.jpeg";

const ImageCard = ({ src, alt }) => {
  return (
    <div className="h-[450px] w-[40px] lg:w-[60px] lg:rounded-2xl rounded-md hover:w-[50vw] transition-all transform">
      <img
        src={src}
        alt={alt}
        className="h-[450px] lg:rounded-2xl rounded-md  hover:w-[50vw] object-cover overflow-hidden transition-all transform"
      />
    </div>
  );
};

const Card2 = () => {
  return (
    <>
      <div className="w-full" style={{ backgroundColor: "#19242b" }}>
        <h1
          className="text-center lg:pt-20 py-10 text-3xl font-bold"
          style={{ color: "#f8f9fa" }}
        >
          Card Hover Annimation
        </h1>
        <div className="lg:h-[90vh] h-screen flex justify-center  items-start space-x-2">
          <ImageCard src={img} alt="Card Image 1" />
          <ImageCard src={img1} alt="Card Image 2" />
          <ImageCard src={img2} alt="Card Image 3" />
          <ImageCard src={img3} alt="Card Image 3" />
          <ImageCard src={img4} alt="Card Image 3" />
        </div>
      </div>
    </>
  );
};

export default Card2;
