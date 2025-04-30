import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeProduct from "./Home_Product";

// icons
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";

// image
import HeroImg from "../../assets/hero/heroImg.png";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);

  return (
    <>
      {/* home */}
      <div>
        {/* top banner */}
        <div
          style={{
            backgroundImage: `url(${HeroImg})`,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-10 px-22"
        >
          {/* content */}
          <div className="w-[100%] relative  py-12 px-4">
            <h3 className="capitalize text-primary text-2xl">
              silver aluminum
            </h3>
            <h2 className="uppercase text-black text-5xl font-bold mt-3">
              Apple Watch
            </h2>
            <p className="text-gray-500">30% of at your first odder</p>
            <div className="mt-8 ">
              <Link
                className="rounded-md py-2 px-8 bg-brandYellow hover:text-white hover:scale-125 hover:bg-primary duration-500"
                to="/shop"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        {/* trending */}
        <div className="py-10 px-14 w-[100%]">
          {/* container */}
          <div className="flex max-w-[100%]">
            {/* left_box */}
            <div className="py-[10px] px-[20px] w-[75%]">
              {/* header */}
              <div className="flex max-w-[100%] py-[10px] px-[10px] bg-gray-100 justify-between">
                {/* heading */}
                <div className="uppercase text-xl font-bold">
                  <h2>trending product</h2>
                </div>
                {/* cate */}
                <div className="mt-2 flex gap-10 font-semibold capitalize cursor-pointer text-[14px] ">
                  <h3 className="scale-105 hover:text-primary duration-500">
                    New
                  </h3>
                  <h3 className="scale-105 hover:text-primary duration-500">
                    Featured
                  </h3>
                  <h3 className="scale-105 hover:text-primary duration-500">
                    top selling
                  </h3>
                </div>
              </div>
              {/* products */}
              <div className="max-w-[100%] ">
                {/* container */}
                <div className="flex flex-wrap w-[100%]">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        {/* box */}
                        <div className="mt-5 ml-5  rounded-md w-[230px] h-[330px] py-3 px-3 shadow-md">
                          {/* img_box */}
                          <div className="flex w-[190px] h-[190px] object-cover">
                            <img src={curElm.image} alt="" />
                            {/* icon */}
                            <div className="flex flex-col ml-[-20%] mt-3 transition delay-150 ">
                              {/* icon_box */}
                              <div className="py-2 px-2 bg-white rounded-md shadow-md z-10 text-primary hover:bg-primary hover:text-white">
                                <IoMdEye />
                              </div>
                              <div className="mt-1 py-2 px-2 bg-white rounded-md shadow-md z-10 text-primary hover:bg-primary hover:text-white">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* right_box */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
