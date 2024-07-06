import React from "react";
import { Link } from "react-router-dom";

const AllTextAni = () => {
  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 lg:w-7/12 md:w-9/12 w-full mx-auto mt-20">
        <div className="bg-red-800 font-bold text-center">
          <Link to={"/text1"}>Text1</Link>
        </div>
      </div>
    </>
  );
};

export default AllTextAni;