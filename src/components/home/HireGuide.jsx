import React, { useState } from "react";
import check from '../../assets/green.svg';
import rectangle from '../../assets/rectangle.svg';
const menuItems = [
  "Benefits Of Hiring Developers",
  "Key Factors To Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing The Right Development Model",
  "Typical Challenges For Hiring Developers",
  "Hiring Freelancers Vs. Dedicated Developers",
  "Communication With Remote Developers",
];

export default function HireGuide() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#233A41] mb-14">
          User Guide To Hire Dedicated Software Developers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT MENU */}
          <div className="bg-white shadow  ">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full text-left px-6 py-8 border-b text-lg font-medium transition ${
                  active === index
                    ? "bg-[#2FC980] text-white"
                    : "bg-white text-[#2a3d42] hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 bg-white p-10 ">
            <h3 className="text-3xl font-semibold text-[#233A41] mb-4">
              Benefits Of Hiring Developers
            </h3>

            <p className="text-gray-500 leading-7 tracking- md:pr-40 mb-8">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book.
            </p>

            {/* Points */}
            <div className="grid grid-cols-1 tracking-wide sm:grid-cols-2 gap-4 pb-10">
              {[ 
                "Client-Centric Approach",
                "Best-In-Class Project Management",
                "Global Quality Standards",
                "Time-Zone Compatibility",
                "Cutting-Edge Infrastructure",
                "Agile Adaptability",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-800 pb-2 font-medium">
                  <img src={check} alt="" />{point}
                </div>
              ))}
            </div>

            {/* Image */}
            <img
              src={rectangle}
              alt="Developer"
              className="w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
