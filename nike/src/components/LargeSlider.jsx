import React from "react";

const LargeSlider = ({img, title, p}) => {
  return (
    <div className="flex flex-col items-start" style={{width:"500px"}}>
      <img
        src={img}
        alt=""
      />
      <h1 className="text-3xl" style={{lineHeight:"2"}}>{title}</h1>
      <p className="text-2xl" >{p}</p>
      <a href="" className="text-xl font-medium underline" style={{marginTop:"1.5rem"}}>Shop</a>
    </div>
  );
};

export default LargeSlider;
