import Filter from "./Filter";
import SingelItem from "./SingelItem";
import Sidebar from "./Sidebar";
import { useState } from "react";
// Database
import products from "../data/data";
const Main = () => {
  // <------------ Filter ------------>
  const [category, setCategory] = useState("");

  // <----------- Functions ------------>
  const radioHandel = (e) => {
    let radioItem = e.target.value;
  };  

  const getCatValue = (e) => {
    let categoryItm = e.target.innerText;
    setCategory(categoryItm);
  };
  const genderValue = (e) => {
    let genderValueItm = e.target.value;
    console.log(genderValueItm);
  };

  const filteredData = (products, seleected) => {
    let filterProdutcs = products;
    if (seleected) {
      filterProdutcs = filteredData.filter(
        ({ category, gender, kids }) =>
          category === seleected || gender === seleected || kids === seleected
      );
    }

    return filterProdutcs.map((x) => (
      <SingelItem
        key={Math.random()}
        img={x.img}
        title={x.title}
        color={x.color}
        price={x.newPrice}
      />
    ));
  };

  // const restlt = filteredData(products, seleected);

  return (
    <div className="main grid pl-16 pr-16 mt-12">
      <div id="sidebar">
        <Sidebar
          products={products}
          getCatValueFun={getCatValue}
          genderValue={genderValue}
        />
      </div>

      <div id="products">
        <div className="">
          <Filter />
        </div>
        <div className="overflow-scroll">
          <div className="products-items py-10 grid grid-cols-3">
            {products.map((x) => (
              <SingelItem
                key={Math.random}
                img={x.img}
                title={x.title}
                color={x.color}
                price={x.newPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
