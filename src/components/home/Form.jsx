import React from "react";

export default function Form() {
  return (
    <div className="container mx-auto  ">
      <div className="bg-green-50 rounded-t-xl  shadow-xl p-1">
        <div>
          <h2 className="text-center  py-2 text-xl sm:text-xl font-semibold text-[#233A41]">
            Create Your Team
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-6 text-sm sm:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing
          </p>
        </div>
      </div>
      <div className="">
        <div className="bg-white shadow-xl px-8 pt-5 pb-6 rounded-b-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-gray-600 text-sm font-medium">
                Full Name
              </label>
              <input
                className="w-full mt-1 p-3  border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm font-medium">
                Email Address
              </label>
              <input
                className="w-full mt-1 p-3  border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm font-medium">
                Phone No
              </label>
              <input
                className="w-full mt-1 p-3  border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter Your Number"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm font-medium">
                Country
              </label>
              <input
                className="w-full mt-1 p-3  border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter Your Country"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-gray-600 text-sm font-medium">
              Project Brief
            </label>
            <textarea
              className="w-full mt-2 p-3  border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none h-24 sm:h-28"
              placeholder="Enter Your Project Brief"
            ></textarea>
          </div>

          <button className="w-full bg-[#ff8088] text-white mt-8 py-3 rounded-md font-semibold hover:bg-[#ff616b] transition-all">
            Hire Software Developer ↗
          </button>
        </div>
      </div>
    </div>
  );
}
