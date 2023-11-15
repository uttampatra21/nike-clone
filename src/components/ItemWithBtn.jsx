import React from "react";

const ItemWithBtn = ({ img, text }) => {
  return (
    <div className="text-start relative">
      <img width="100%" className="h-full object-cover" src={img} alt="" />
      <div className="absolute bottom-10 left-10">
        <div className="py-10">
          <h5 className="text-xl text-white font-semibold">Retro Kicks</h5>
          <h1 className="text-3xl text-white font-semibold">Era-Echoing, '70 Style</h1>
        </div>
          <a className="py-2 px-6 btn bg-white text-black font-semibold py-3 px-7 rounded-3xl text-lg">Shop</a>
      </div>
    </div>
  );
};

export default ItemWithBtn;
