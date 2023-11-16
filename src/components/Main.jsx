import Filter from "./Filter";
import SingelItem from "./SingelItem";
import Sidebar from "./Sidebar";
// Database
import products from "../data/data";

console.log(products);
const Main = () => {
  // ------------ Radio Filter ------------>

  return (
    <div className="main grid pl-16 pr-16 mt-12">
      <div id="sidebar">
        <Sidebar />
      </div>

      <div id="products">
        <div className="">
          <Filter />
        </div>
        <div className="overflow-scroll">
          <div className="products-items py-10 grid grid-cols-3">
            {products.map((x) => (
              <SingelItem />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
