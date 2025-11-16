import React from "react";
import { Play } from "lucide-react";
import client1 from "../../assets/vecto.svg";
import client2 from "../../assets/vect.svg";
import client3 from "../../assets/vec.svg";
import client4 from "../../assets/vector.svg";
const testimonials = [
  {
    id: 1,
    name: "Krish Bruynson",
    role: "Director, Storloft",
    im: client1,
  },
  {
    id: 2,
    name: "Krish Bruynson",
    role: "Director, Storloft",
    im: client2,
  },
  {
    id: 3,
    name: "Krish Bruynson",
    role: "Director, Storloft",
    im: client3,
  },
  {
    id: 4,
    name: "Krish Bruynson",
    role: "Director, Storloft",
    im: client4,
  },
];

export default function Testimonials() {
  return (
  <section className="w-full relative py-16 md:py-20 bg-gradient-to-r from-white to-green-100">
  <div className="container mx-auto px-4 md:px-24">

    {/* Heading */}
    <div className="text-center mx-auto mb-10 md:mb-14">
      <h2 className="text-2xl md:text-5xl font-bold tracking-wider text-gray-800">
        What Our Clients Have To Say About Us
      </h2>
      <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg tracking-widest">
        Take A Look At Our Simple And Straightforward Process To Hire Software
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
      {testimonials.map((item) => (
        <div key={item.id} className="flex flex-col text-left">

          {/* Image Box */}
          <div className="relative w-full h-72 sm:h-80 md:h-80 lg:h-80 xl:h-96 mx-auto overflow-hidden">
            <img
              src={item.im}
              alt={item.name}
              className="w-full h-full "
            />

            {/* Play Button */}
            <button className="absolute bottom-22 left-1/2 -translate-x-1/2 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition">
              <Play size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Name */}
          <div className=" text-center md:text-left">
            <h3 className=" text-lg md:text-xl font-semibold text-gray-900">
              {item.name}
            </h3>

            <p className="text-gray-600 text-sm md:text-base">{item.role}</p>

            {/* Stars */}
            
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-green-500 text-center text-lg md:text-xl">
                  ★
                </span>
              ))}
           
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
