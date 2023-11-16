const SingelItem = ({ img, title, price, color }) => {
  return (
    <div className="" id="product-item">
      <img className="cursor-pointer" src={img} />
      <div className="flex flex-col gap-1 pt-6" id="produt-detls">
        <text className="text-xl font-medium">{title}</text>
        <text className="text-xl opacity-60">Basketball Shoes</text>
        <text className="text-xl opacity-60">{color.length} Colours</text>
        <text className="text-xl font-medium">MRP : ₹ {price} .00</text>
      </div>
      <div className="flex flex-col gap-1.5 pt-6" id="produt-hov">
        <text className="text-xl font-medium">{title}</text>
        <div className="item-color flex gap-3">
          <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
          <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
        </div>

        <text className="text-xl font-medium">MRP : ₹ {price} .00 </text>
      </div>
    </div>
  );
};

export default SingelItem;
