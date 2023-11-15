import React from "react";
import Cetagories from "./Cetagories";
import ItemWithBtn from "./ItemWithBtn";
import GearItem from "./GearItem";
import Slider from "./Slider";
import LargeSlider from "./LargeSlider";
import ImageWithSingleBtn from "./ImageWithSingleBtn";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="pl-16 pr-16 py-2">
      <div className="banner">
        <img
          width="100%"
          src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/045de467-fbd2-403e-bdf5-4d6895aee470/nike-just-do-it.png"
        />
      </div>

      <div className="heading text-center py-10">
        <h1 className="text-7xl font-extrabold" style={{ lineHeight: "2" }}>
          GIFTS THAT MOVE YOU
        </h1>
        <p className="text-2xl">This year’s gift. Next year’s greatness.</p>
        <div className="button flex gap-6 justify-center pt-8">
          <a className="btn bg-black text-white py-3 px-7 rounded-3xl text-lg">
            Shop
          </a>
          <a className="btn bg-black text-white py-3 px-7 rounded-3xl text-lg">
            Explore
          </a>
        </div>

        <div id="featued-shop" className="py-5">
          <div id="featured-heading" className="flex justify-between">
            <h2 className="text-2xl font-medium">Featured</h2>
            <a href="" className="text-xl ">
              Shop
            </a>
          </div>
          <div id="item" className="grid grid-cols-3 gap-5 py-8">
            <NavLink to="items">
            <Cetagories
              text={"Most-Wanted Styles"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/555b9dfd-2687-4b25-987b-4a9f51d83062/image.png"
              }
            />
            </NavLink>
            <Cetagories
              text={"Accessories"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/4cc7c647-9ec9-4de8-bafa-4e82fc790d73/nike-just-do-it.png"
              }
            />
            <Cetagories
              text={"Matching Sets"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/fcdeb56e-a81a-4a94-8fd3-46a37cc3f967/nike-just-do-it.png"
              }
            />
          </div>
        </div>

        <div id="tranding">
          <h2 className="text-2xl text-start font-medium py-5">Trending</h2>
          <div className=" grid grid-cols-2 gap-5">
            <ItemWithBtn
              smallText={"Retro Kicks"}
              largeTexts={"Era-Echoing, '70 Style"}
              text={"Most-Wanted Styles"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ce9d486e-ffde-4b22-b3b6-1b84160b68f0/nike-just-do-it.png"
              }
            />
            <ItemWithBtn
              smallText={"Nike Air Force 1 Wild"}
              largeTexts={"The AF1 You Didn't Know Needed"}
              text={"Most-Wanted Styles"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/4c003de0-e242-4224-a1b7-9e38c426b361/nike-just-do-it.png"
              }
            />
          </div>
        </div>

        <div className="">
          <h1
            className="text-7xl font-black"
            style={{ paddingTop: "4rem", letterSpacing: "-3px" }}
          >
            IT STARTS WITH <br />
            NIKE SWOOSH 1
          </h1>
          <p className="text-2xl" style={{ marginTop: "2rem" }}>
            Designed to nature first and future steps.
          </p>
          <div class="button flex gap-6 justify-center pt-8">
            <a class="btn bg-black text-white py-3 px-7 rounded-3xl text-lg">
              Shop
            </a>
          </div>
        </div>

        <div id="gearup">
          <h2 className="text-start py-10 text-2xl font-semibold">Gear Up</h2>
          <div className="grid grid-cols-3 gap-5">
            <GearItem
              shop={"Shop Infinity"}
              title={"Give Your Feet a Hug"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_351,c_limit/e74e6f97-2483-4f31-a78f-784f554a2b68/nike-just-do-it.jpg"
              }
            />
            <GearItem
              shop={"Shop Pegasus"}
              title={"A Springy Ride for Every Run"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_351,c_limit/1edd0e07-a08a-4b17-8384-0a6584c16fe7/nike-just-do-it.jpg"
              }
            />
            <GearItem
              shop={"Shop Icvincible"}
              title={"All the Cushion. All the Feels."}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_351,c_limit/a13acd4b-3ae8-4243-9303-736c7af9e55a/image.jpg"
              }
            />
          </div>
        </div>

        <div id="dont-miss" className="pt-6">
          <h2 className="text-2xl text-start font-medium py-5">Don't Miss</h2>
          <div className=" grid grid-cols-2 gap-5">
            <ItemWithBtn
              smallText={"Retro Kicks"}
              largeTexts={"Era-Echoing, '70 Style"}
              text={"Most-Wanted Styles"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/d757bbd6-821e-4085-b7b3-1260d0632c0f/nike-just-do-it.jpg"
              }
            />
            <ItemWithBtn
              smallText={"Nike Air Force 1 Wild"}
              largeTexts={"The AF1 You Didn't Know Needed"}
              text={"Most-Wanted Styles"}
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/468de987-e4e6-4bda-a652-4d9b0d745d95/nike-just-do-it.png"
              }
            />
          </div>
        </div>

        <div id="slider" className="py-10">
          <h2 className="text-2xl text-start font-medium py-5">
            Always Iconic
          </h2>
          <Slider />
        </div>

        <div id="slider" className="">
          <h2 className="text-2xl text-start font-medium py-5">
            Shop by Sport
          </h2>
          <div id="slider" className="flex">
            <LargeSlider
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/a51d84b2-282a-44d6-957d-aa57473ed73d/nike-just-do-it.jpg"
              }
              title={"Nike Basketball"}
              p={"Styles made for your game."}
            />
            <LargeSlider
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/0376dfa6-a2d7-4867-bd13-4b8e465705c1/nike-just-do-it.jpg"
              }
              title={"Nike Golf"}
              p={"Conquer any course in style."}
            />
            <LargeSlider
              img={
                "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg"
              }
              title={"Nike Trail"}
              p={"Gear that leads to wild places."}
            />
          </div>
        </div>

        <div id="essentials" className="py-10">
          <h2 className="text-2xl text-start font-medium py-5">
            Shop by Sport
          </h2>
          <div className="grid grid-cols-3 gap-5 py-4">
          <ImageWithSingleBtn img={"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_540,c_limit/5e9d47e4-d0af-4cfe-a40a-31729d9d2ce4/nike-just-do-it.png"} shop={"Men's"}/>
          <ImageWithSingleBtn img={"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_540,c_limit/963a54ad-6b91-4efe-8927-217656eb5240/nike-just-do-it.png"} shop={"Women's"}/>
          <ImageWithSingleBtn img={"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_540,c_limit/e11e868d-e199-40fa-828c-a4e19c9b6943/nike-just-do-it.png"} shop={"Kids's"} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
