import React from "react";
import leftImg from "../../assets/image.svg";
import rightImg from "../../assets/image1.svg";
import img1 from "../../assets/hreo.svg";
import img2 from "../../assets/hreo1.png";
import web1 from "../../assets/web-settings1.png";
import web2 from "../../assets/web-settings2.png";
import web3 from "../../assets/web-settings3.png";
import web4 from "../../assets/web-settings4.png";
import web5 from "../../assets/web-settings5.png";
import web6 from "../../assets/web-settings(1).png";
export default function HireDevelopersSection() {
  const qualityItems = [
    {
      title: "Hire Silicon Valley Caliber At Half The Cost",
      desc: "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
      icon: "🟢",
    },
    {
      title: "100+ Skills Available",
      desc: "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
      icon: "🔴",
    },
  ];

  const vettingItems = [
    {
      title: "5+ Hours Of Tests And Interviews",
      desc: "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
      icon: "🟢",
    },
    {
      title: "Seniority Tests",
      desc: "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
      icon: "🔴",
    },
  ];

  const techCards = [
    {
      title: "Backend Development",
      tech: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      color: "#E3E8FF",
      border: "#B9C2FF",
      icon: web1,
    },
    {
      title: "Fronted Development",
      tech: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      color: "#FFEFD8",
      border: "#FFD7A1",
      icon: web2,
    },
    {
      title: "Mobile Development",
      tech: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      color: "#F8E6FF",
      border: "#F0C8FF",
      icon: web3,
    },
    {
      title: "Blockchain, AI/ML",
      tech: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      color: "#E4F8FF",
      border: "#BBF0FF",
      icon:web4,
    },
    {
      title: "DevOps & Low-Code",
      tech: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      color: "#FFF6E0",
      border: "#FFE4A3",
      icon: web5,
    },
    {
      title: "E-commerce & CMS",
      tech: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      color: "#FFE6EB",
      border: "#FFC7D1",
      icon:web6,
    },
  ];

  return (
    <div
      className=" w-full py-16 px-6 md:px-10 relative "
      style={{
        backgroundImage: `url(${leftImg}), url(${rightImg})`,
        backgroundPosition: "left top, right top",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto, auto",
      }}
    >
      <div className="container mx-auto ">
        {/* SECTION 1 */}
        <div className="text-center ">
          <h1 className="text-5xl md:text-5xl font-bold text-[#233A41] pb-8">
            Why Hire Developers From Our Name
          </h1>
          <p className="text-gray-600  px-5 md:px-72 text-xl">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={img1}
              alt="dev"
              className="w-[550px] md:w-[600px] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 pt-10">
            <h2 className="text-3xl md:text-4xl  text-[#233A41] mb-10 leading-tight">
              High Quality/Cost Ratio
            </h2>
            <div className="space-y-12">
              {qualityItems.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-4xl">{item.icon}</span>

                  <div>
                    <h3 className=" text-[#233A41] text-2xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  px-20">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl  text-[#233A41] mb-10 leading-tight">
              Rigorous Vetting
            </h2>

            <div className="space-y-6">
              {vettingItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-3xl">{item.icon}</span>

                  <div>
                    <h3 className=" text-[#233A41] text-2xl mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:-mt-40">
            <img
              src={img2}
              className="w-[550px] md:w-[600px] h-auto"
              alt="dev2"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="text-center container mx-auto ">
          <h1 className="text-4xl md:text-5xl font-medium text-[#233A41] mb-4">
            Our Diverse Technology Competency
          </h1>
          <p className="text-gray-600 px-5 py-10 md:px-80 text-xl">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since
          </p>
        </div>

        {/* TECHNOLOGY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-10 tracking-tighter">
          {techCards.map((card, i) => (
            <div
              key={i}
              className=" p-6 shadow-md transition-all"
              style={{
                backgroundColor: card.color,
                borderBottom: `6px solid ${card.border}`,
              }}
            >
              <img src={card.icon} className="text-3xl mb-3 px-2"/>
              <h3 className="font-bold text-lg px-2 text-gray-800 mb-3">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                {card.tech.map((t, j) => (
                  <span key={j} className="border-r-2 px-2 border-gray-400/50 ">
                    {t}  
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
