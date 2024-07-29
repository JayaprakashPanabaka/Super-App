import React from "react";
import backgroundImage from "../assets/bgImg.jpg";

const Header = () => {
  return (
    <div
      className="flex flex-col justify-center h-screen bg-black text-white relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="p-8 bg-gray-00 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl mb-2 font-serif">Transform Your Life with</h2>
        <div className="mb-12 mt-6">
          <h1 className="flex flex-col gap-0 relative">
            <span className="text-white font-semibold text-xl p-0 sm:absolute sm:left-[64%] sm:top-7 md:left-[61%] lg:left-[58%] xl:left-[57%] 2xl:left-[55%]">
              AI-Powered Learning.
            </span>{" "}
            <br />
            <span className="text-7xl font-bold font-sans relative text-yellow-400 m-0 p-0">
              Super App
            </span>{" "}
            <br />
            <span className="text-xl font-serif font-light text-center text-white m-0 p-0">
              for Super Skills!
            </span>
          </h1>
        </div>
        <button className="px-8 py-2 bg-white text-xl text-black font-semibold rounded-full m-4">
          Activate Your Trial
        </button>
        <div className="flex justify-center">
          <p className="text-yellow-500 font-semibold bg-[#313131] px-2 py-1 rounded-md">
            4h 32m 48s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
