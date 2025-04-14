import React from "react";
import ImgLogo from "../assets/logo.jpg";
import { useAuth0 } from "@auth0/auth0-react";
// react icons
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      {/* header */}
      <div className="w-full">
        {/* top header */}
        <div className="max-w-[1240px] flex px-2 py-2 bg-gray-100">
          <div className="ml-2 text-gray-400 text-2xl">
            <MdLocalShipping />
          </div>
          <div>
            <p className="ml-1 text-gray-500">
              Free Shipping When Shopping upto $1000
            </p>
          </div>
        </div>
        {/* mid header */}
        <div className="max-w-full flex py-2 px-2 justify-between">
          <div>
            <img
              src={ImgLogo}
              alt=""
              className="h-15 w-25 cursor-pointer object-cover"
            />
          </div>
          {/* search */}
          <div>
            <input
              type="text"
              placeholder="search"
              className="px-1 py-1 outline-0 border-1 border-gray-300 rounded-sm
              w-[250px] bg-gray-100
              "
            />
            <button
              onClick={() => loginWithRedirect()}
              className="bg-primary cursor-pointer py-2 px-2 rounded-sm text-white text-bold hover:bg-brandYellow hover:text-primary"
            >
              <AiOutlineSearch />
            </button>
          </div>
          {/* user */}
          <div className="flex gap-2 mr-4 pr-6">
            <div className="mx-1 my-1">
              <FiLogIn />
            </div>
            <div>
              <button className="text-brandBlue">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
