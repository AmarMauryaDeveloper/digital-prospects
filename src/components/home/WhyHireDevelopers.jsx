import React from "react";
import bg from "../../assets/bg-1.svg";

export default function WhyHireDevelopers() {
  return (
    <section className="w-full bg-[#0f1044] py-20">
      <div
        className="relative h-[450px] sm:h-[520px] md:h-[600px] 
        bg-no-repeat bg-left bg-contain text-white flex items-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute "></div>

        <div className="relative container mx-auto px-4 sm:px-8 lg:px-2">
          <div className="flex flex-col md:flex-row justify-between ">
            
            {/* Left Side Heading */}
            <div className="md:-mt-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight drop-shadow-lg">
                Why Hire Software Developers  <br />In India?
              </h1>
            </div>

            {/* Right Side List */}
            <div className="pt-8 md:pt-10 space-y-6 sm:space-y-8">
              {[
                "English Speaking Programmers",
                "Flexible Work Hours",
                "Rapid Onboarding Process",
                "Expertise In Top Technologies",
                "Reliable Partner Credentials",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/20 pb-6  gap-x-28
                  group cursor-pointer"
                >
                  <p className="text-lg sm:text-xl md:text-2xl group-hover:text-blue-300">
                    {item}
                  </p>
                  <span className="text-xl sm:text-3xl group-hover:translate-x-1 group-hover:text-blue-300">
                    ↗
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
