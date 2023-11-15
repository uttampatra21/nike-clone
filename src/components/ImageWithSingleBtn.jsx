import React from "react";

const ImageWithSingleBtn = ({img, shop}) => {
  return (
    <div className="relative" style={{ height: "100vh" }}>
      <img
        style={{ height: "100vh", objectFit:"cover" }}
        src={img}
      />
      <a class="absolute bottom-10 left-10 py-2 px-6 btn bg-white text-black font-semibold py-3 px-7 rounded-3xl text-lg">
        {shop}
      </a>
    </div>
  );
};

export default ImageWithSingleBtn;
