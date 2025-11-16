import React from "react";
import img from "../../assets/homebg.png";
import Form from "./Form";

export default function Hero() {
  return (
    <div
      className="relative 
    w-full 
    min-h-screen
    bg-cover
    bg-center
    bg-no-repeat
    bg-fixed sm:bg-scroll"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto w-full px-20">
        {/* MAIN RESPONSIVE WRAPPER */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 pt-20 ">

          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center text-center md:text-left 
          w-full lg:w-1/2">

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <h2 className="text-[#21b86f] text-5xl sm:text-5xl  tracking-wider">
                HIRE DEDICATED
              </h2>

              {/* Line */}
              <div className="h-[3px] bg-[#21b86f] flex-1 hidden sm:block"></div>
            </div>

            <h1 className="text-[#233A41] text-5xl sm:text-6xl lg:text-8xl font-extrabold mt-3 leading-tight">
              DEVELOPERS
            </h1>

            <p className="text-gray-600 mt-2 text-base sm:text-lg">
              Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
            </p>

            <p className="text-[#132A31] mt-2 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center md:justify-start">
              <button className="bg-[#ff8088] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff616b] transition-all">
                View More ↗
              </button>

              <button className="border border-[#2ecc71] text-[#2ecc71] px-6 py-3 rounded-lg font-medium hover:bg-[#2ecc71] hover:text-white transition-all">
                Get In Touch ↗
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2 px-0 lg:pl-20">
            <div className="w-full max-w-[600px] h-auto pt-10 pb-5">
              <Form />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
