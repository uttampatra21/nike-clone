import React from "react";

const Cetagories = ({ text, img }) => {
  return (
    <div className="text-start">
      <img
      width="100%"
        src={img}
        alt=""
      />
      <h2 className="py-6 text-2xl">{text}</h2>
    </div>
  );
};

export default Cetagories;
