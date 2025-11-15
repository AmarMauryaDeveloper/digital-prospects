import React, { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from '../../assets/logoipsum.svg'
export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Software Team", dropdown: true },
    { name: "Services" },
    { name: "Technologies" },
    { name: "Resources" },
    { name: "Company" },
  ];

  return (
    <nav className="w-full  bg-white fixed z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#1F2E3D]">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              <span className="text-[16px] hover:text-emerald-600 transition">
                {item.name}
              </span>
              {item.dropdown && (
                <ChevronDown size={16} className="mt-[2px]" />
              )}
            </div>
          ))}

          {/* Button */}
          <button className="ml-4 border-2 border-emerald-400 text-[#1F2E3D] px-6 py-3 rounded-md 
                             flex items-center gap-2 hover:bg-emerald-400 hover:text-white 
                             transition font-medium">
            Get In Touch 
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1F2E3D]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 border-t">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <span className="text-[17px] text-[#1F2E3D]">{item.name}</span>
              {item.dropdown && <ChevronDown size={18} />}
            </div>
          ))}

          {/* Mobile button */}
          <button className="w-full border-2 border-emerald-400 text-[#1F2E3D] px-6 py-3 
                             rounded-xl flex items-center justify-center gap-2 
                             hover:bg-emerald-400 hover:text-white transition font-medium">
            Get In Touch 
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
}
