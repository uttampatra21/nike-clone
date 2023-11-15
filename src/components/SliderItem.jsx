import React from "react";

const SliderItem = () => {
  return (
    <div
      className="text-start flex flex-col justify-between"
      style={{ height: "400px", width: "350px" }}
    >
      <img
        height="400px"
        width="100%"
        src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/91f839aa-b110-4acc-879a-2cea80bc580c/nike-just-do-it.jpg"
      />
      <span className="text-xl opacity-70">Air Jordan 1</span>
    </div>
  );
};

export default SliderItem;
