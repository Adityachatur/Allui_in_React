import React from "react";
import { Link } from "react-router-dom";

const AllCards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-5 gap-4 md:grid-cols-2 lg:w-7/12 md:w-9/12 w-full mx-auto mt-20">
        <div className="bg-red-800 font-bold text-center">
          <Link to={"/card1"}>Card1</Link>
        </div>
        <div className="bg-red-800 font-bold text-center">
          <Link to={"/card2"}>Card2</Link>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
