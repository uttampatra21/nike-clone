import Filter from "./Filter";
import SingelItem from "./SingelItem";
import Sidebar from "./Sidebar";
const Main = () => {
  return (
    <div className="main grid pl-16 pr-16 mt-12">
      <div id="sidebar">
        <Sidebar />
      </div>

      <div id="products">
        <div className="">
          <Filter />
        </div>
        <div className="products-items py-10 grid grid-cols-3">
          <SingelItem />
          <SingelItem />
          <SingelItem />
          <SingelItem />
        </div>
      </div>
    </div>
  );
};

export default Main;
