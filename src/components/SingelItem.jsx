const SingelItem = () => {
  return (
    <div className="" id="product-item">
      <img
        width="100%"
        className="cursor-pointer"
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77d0b512-32b3-4184-8bb9-7f91f95d0ac9/lebron-xxi-dragon-pearl-ep-basketball-shoes-4tVgfH.png"
      />
      <div className="flex flex-col gap-1 pt-6" id="produt-detls">
        <text className="text-xl font-medium">LeBorn XXL Dragon Parel</text>
        <text className="text-xl opacity-60">Basketball Shoes</text>
        <text className="text-xl opacity-60">2 Colours</text>
        <text className="text-xl font-medium">MRP : ₹ 18 395.00</text>
      </div>
      <div className="flex flex-col gap-1.5 pt-6" id="produt-hov">
        <text className="text-xl font-medium">LeBorn XXL Dragon Parel</text>
        <div className="item-color flex gap-3">
          <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
          <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
        </div>

        <text className="text-xl font-medium">MRP : ₹ 18 395.00</text>
      </div>
    </div>
  );
};

export default SingelItem;
