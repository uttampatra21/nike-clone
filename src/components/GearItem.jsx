import React from "react";

const GearItem = ({ shop, title, img }) => {
  return (
    <div className="relative">
      <img width="100%" src={img} alt="" />
      <div className="absolute bottom-10 left-10 flex flex-col justify-start">
        <h1
          className="text-2xl text-white font-medium"
          style={{ lineHeight: "5" }}
        >
          {title}
        </h1>
        <a class="bg-white text-black font-semibold py-3 rounded-3xl text-lg ">
          {shop}
        </a>
      </div>
    </div>
  );
};

export default GearItem;
