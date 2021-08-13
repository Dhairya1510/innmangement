import React from "react";
import { useSelector } from "react-redux";

const Hotel = () => {
  const hotels = useSelector((state) => state.hotels);
  console.log(hotels);

  return (
    <>
      <div>
        <h1>Hotel</h1>
      </div>
    </>
  );
};

export default Hotel;
