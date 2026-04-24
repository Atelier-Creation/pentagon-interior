import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { Home, Layout, Sofa, Lamp, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import content from "./data/content";

const iconMap = {
  "space-planning": <Layout className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
  "furniture-decor": <Sofa className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
  "lighting-design": <Lamp className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
  "kitchen-design": <Star className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
};

export default function ExecutionDelivery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = content.executionDelivery;

  return (
    <>
      <Header />

      {/* 🔹 HERO */}
      <div
        className="h-[420px] flex items-center justify-center relative text-white"
        style={{
          backgroundImage: `url('${data.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/80"></div>

        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            {data.title}
          </h1>

          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <span>{data.title}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl pt-10 mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* 🔹 LEFT SIDE (2 BOXES STACKED) */}
        <div className="flex flex-col gap-6">
          {/* BOX 1 - PROJECT LIST */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden w-full max-w-[420px]">
            <div className="px-6 py-5 border-b border-gray-300 text-[22px] font-semibold text-[#2a2d2a] tracking-tight">
              Our Journey
            </div>
            {data.projects.map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between h-[68px] border-b border-gray-200 last:border-none px-0 relative"
              >
                <div className="flex items-center w-full relative">
                  <div className="absolute left-[70px] right-4 h-[44px] rounded-full bg-[#eef2ef] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="w-[70px] text-center text-[#8a949e] text-[15px] font-medium border-r border-gray-200 group-hover:opacity-0 transition-all duration-200 z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-[70px] text-center text-[#2a2d2a] text-lg absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                    →
                  </div>
                  <div className="pl-5 text-[17px] text-[#2a2d2a] tracking-[-0.2px] leading-none z-10">
                    {item}
                  </div>
                </div>
                <div className="text-[#8a949e] pr-5 text-lg opacity-0 group-hover:opacity-100 transition-all duration-200">
                  →
                </div>
              </div>
            ))}
          </div>

          {/* BOX 2 - TALK ABOUT PROJECT */}
          <div className="w-full max-w-[450px] h-[570px] rounded-t-[2.5rem] rounded-b-[15rem] overflow-hidden flex flex-col shadow-sm border border-gray-300">
            <div className="bg-[#8b6b55] text-white px-8 pt-10 pb-16 text-center relative">
              <p className="text-[15px] md:text-[17px] font-light tracking-[0.08em] text-white/70 mb-4">
                Talk About Your Project
              </p>
              <h2 className="text-[34px] md:text-[38px] font-semibold tracking-tight">
                {content.contact.phone}
              </h2>
            </div>
            <div className="flex-1 relative">
              <img
                src={content.about.team[0].img}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2f4638]/60"></div>
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] border border-white/70 rounded-full flex items-center justify-center z-10 backdrop-blur-sm">
                <Home className="w-7 h-7 text-white/90" strokeWidth={1.2} />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
                <p className="text-[25px] font-semibold mb-6">
                  Make The <br /> First Move Today.
                </p>
                <button className="flex items-center gap-3 border border-white rounded-full px-6 py-3 bg-white/10 hover:bg-[#5a3e2b] hover:border-[#5a3e2b] hover:text-white transition-all duration-300">
                  Appointment →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE BIG IMAGE */}
        <div className="w-full">
          <div className="w-full h-[720px] rounded-[38px] overflow-hidden">
            <img
              src={data.mainImage}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="mt-8 text-[16px] leading-[1.8] text-[#6b7280]">
            {content.about.description}
          </p>
        </div>
      </div>

      {/* 🔹 SERVICES */}
      <div className="py-28 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {data.services.map((item, i) => (
            <div key={i} className="relative pt-20 group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full border border-gray-200 bg-white flex items-center justify-center z-10 transition-all duration-300">
                <div className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                  {iconMap[item.id] || <Layout className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />}
                </div>
                <div className="absolute w-[60px] h-[60px] rounded-full bg-[#8b6b55] flex items-center justify-center opacity-0 scale-75 rotate-[-90deg] group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300">
                  <span className="text-white text-lg">→</span>
                </div>
              </div>
              <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-[220px] h-[120px] border-t border-gray-200 rounded-full"></div>
              <div className="bg-white border border-gray-200 rounded-[28px] px-10 pt-24 pb-12 text-center transition hover:shadow-md">
                <h3 className="text-[26px] font-semibold text-[#2a2d2a] mb-5">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] text-[16px] leading-[1.9] max-w-[80%] mx-auto mb-6">
                  {item.desc}
                </p>
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center gap-2 text-[#2a2d2a] font-semibold mt-2 group"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  <span className="tracking-tight">Read More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 WHY CHOOSE US */}
      <div className="max-w-5xl mx-auto py-10">
        <div className="text-center mb-14">
          <h2 className="text-[42px] font-semibold text-[#2a2d2a] mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-[16px] text-[#6b7280] leading-[1.7] max-w-[720px] mx-auto">
            {content.whyChooseUs.description}
          </p>
        </div>

        <div className="space-y-6">
          {data.whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="group flex items-center rounded-[20px] border border-gray-200 overflow-hidden bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-[55%] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#eef2ef]"></div>
                <div className="absolute inset-0 opacity-50 bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.04)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full border border-gray-400 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20">
                  <span className="text-[#2a2d2a] text-lg">→</span>
                </div>
                <div className="relative z-10 px-16 py-8 transition-all duration-300 group-hover:translate-x-2">
                  <h3 className="text-[22px] font-semibold text-[#2a2d2a] tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="w-[45%] px-10 py-8">
                <p className="text-[15.5px] text-[#6b7280] leading-[1.8] transition-all duration-300 group-hover:text-[#4b5563]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 PROCESS */}
      <div className="py-28 bg-white px-6 text-center">
        <h2 className="text-[42px] font-semibold text-[#2a2d2a] mb-4">
          Our Structured Process
        </h2>
        <p className="text-[#6b7280] text-[16px] max-w-[700px] mx-auto mb-16 leading-[1.8]">
          Our process ensures every step from planning to execution runs smoothly and meets your vision.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3">
          {data.process.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center px-8 py-10"
            >
              {i !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[85%] bg-[#e5e7eb]"></div>
              )}
              {i !== 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[85%] bg-[#e5e7eb]"></div>
              )}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#eef2ef] rotate-45 flex items-center justify-center">
                <span className="rotate-[-45deg] text-[16px] font-semibold text-[#2a2d2a]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="w-[340px] h-[340px] rounded-full border border-gray-200 flex flex-col items-center justify-center px-8">
                <h3 className="text-[22px] font-semibold text-[#2a2d2a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] text-[15px] leading-[1.8]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 DESIGN INSIGHTS */}
      <div className="max-w-5xl mx-auto pb-10 px-6">
        <h2 className="text-[42px] font-semibold text-[#2a2d2a] mb-4">
          Design Insights
        </h2>
        <p className="text-[#6b7280] text-[16px] leading-[1.8] mb-12 max-w-[700px]">
          Practical tips and expert guidance to help you optimize space and create timeless interior designs.
        </p>

        <div className="space-y-4">
          {data.designInsights.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
              className="cursor-pointer group rounded-[20px] border border-gray-200 overflow-hidden bg-white hover:bg-[#eef2ef] transition-all duration-300"
            >
              <div className="flex justify-between items-center px-8 py-6">
                <h3 className="text-[20px] font-semibold text-[#2a2d2a]">
                  {i + 1}: {item.title}
                </h3>
                <div className="w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center">
                  {activeIndex === i ? "×" : "+"}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="bg-white rounded-[18px] p-6 flex flex-col md:flex-row gap-6 items-center">
                        <img
                          src={item.img}
                          className="w-full md:w-[180px] h-[140px] object-cover rounded-[14px]"
                          alt=""
                        />
                        <div className="flex-1">
                          <p className="text-[#6b7280] text-sm md:text-base leading-[1.8] mb-5">
                            {item.desc}
                          </p>
                          <button className="flex items-center gap-3 border border-[#8b6b55] rounded-full px-6 py-3 group/button transition-all duration-300 hover:bg-[#8b6b55]">
                            <span className="w-[42px] h-[42px] rounded-full border border-[#8b6b55] flex items-center justify-center transition-all duration-300 group-hover/button:bg-white group-hover/button:border-white">
                              <span className="text-[#8b6b55]">→</span>
                            </span>
                            <span className="text-[#8b6b55] font-medium transition-all duration-300 group-hover/button:text-white">
                              Start Consultation
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}