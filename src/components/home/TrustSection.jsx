import React from "react";
import green from '../../assets/green.svg'
import devImage from "../../assets/Codetyping.svg"; 

export default function TrustSection() {
  const items = [
    "Client-Centric Approach",
    "Best-In-Class Project Management",
    "Global Quality Standards",
    "Time-Zone Compatibility",
    "Cutting-Edge Infrastructure",
    "Agile Adaptability",
  ];

  return (
    <section className="w-full relative bg-gradient-to-br from-[#e8fff5] to-[#ffeef0] py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-18 grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={devImage}
            alt="Developer Illustration"
            className="w-full max-w-xl object-contain"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold leading-13 text-gray-800 mb-4 ">
            Top Companies Trust ValueCoders For Hiring Software Developers
          </h2>

          <p className="text-gray-600 leading-10 mb-6">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
            Since The 1500s, When An Unknown Printer Took A Galley Of Type And
            Scrambled It To Make A Type Specimen Book.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={green} alt="" />
                <p className="font-semibold text-gray-600 py-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


