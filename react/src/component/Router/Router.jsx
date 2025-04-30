import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Home/Home";

const BannerData = {
  discount: "30% off",
  title: "Fine Smile",
  date: "7 April to 14 April",
  // image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% off",
  title: "happy hours",
  date: "7 April to 14 April",
  // image: SmartWatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  bgColor: "#2dcc6f",
};

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={BannerData} />} />
      </Routes>
    </>
  );
};

export default Router;
