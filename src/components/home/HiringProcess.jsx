import React from "react";
import bg from '../../assets/blogbg1.svg'
import code from '../../assets/layer.svg'
import code1 from '../../assets/codecoding.svg'
import code2 from '../../assets/icon2.svg'
import code3 from '../../assets/tool_icon.svg'
const steps = [
  {
    id: 1,
    title: "INQUIRY",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: code,
  },
  {
    id: 2,
    title: "SELECT DEVELOPERS",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: code1,
  },
  {
    id: 3,
    title: "TEAM INTEGRATION",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: code2,
  },
  {
    id: 4,
    title: "TEAM SCALING",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: code3,
  },
];

export default function HiringProcess() {
  return (
    <section className="">
    <div className="relative h-full w-full 
            bg-no-repeat bg-left bg-cover py-20 text-white flex items-center"
            style={{
              backgroundImage: `url(${bg})`,
            }}>
        <div className="container mx-auto px-14">
        {/* Heading */}
        <div className="text-center mb-10 ">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233A41]">
            Our Hiring Process
          </h2>
          <p className="text-gray-600 py-8 text-lg tracking-">
            Take A Look At Our Simple And Straightforward Process To Hire Software Developers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center max-w-xs">
              {/* Circle */}
              <div className="relative w-48 h-48 rounded-full border-6 border-green-400 flex items-center justify-center bg-white shadow-lg ">
                <img src={step.icon}className="text-6xl"/>

                {/* Step number */}
                <div className="absolute -top-3 right-5 w-12 h-12 bg-[#FF8C91] border-3 border-white text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  {step.id}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-800 uppercase">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 px-9 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
