import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Layout, Sofa, Lamp, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function ExecutionDelivery() {
  const services = [
    {
      title: "Space Planning",
      desc: "Efficient layouts that maximize space and flow, functionality, and lasting harmony.",
      icon: <Layout className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
    },
    {
      title: "Furniture & Décor",
      desc: "Curated modern, classic, or custom pieces that perfectly complement your interiors.",
      icon: <Sofa className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
    },
    {
      title: "Lighting Design",
      desc: "Innovative lighting solutions to enhance ambience, mood, comfort, and beauty.",
      icon: <Lamp className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
    },
    {
      title: "Kitchen Design",
      desc: "Functional, stylish kitchens tailored for cooking and storage.",
      icon: <Star className="w-12 h-12 text-[#2f4638]" strokeWidth={1.5} />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Header />

      {/* 🔹 HERO */}
      <div
        className="h-[420px] flex items-center justify-center relative text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/80"></div>

        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Execution & Delivery
          </h1>

          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <span>Execution & Delivery</span>
          </p>
        </div>
      </div>

      {/* <div className="py-24 px-6 bg-[#f6f7f8]"> */}
      <div className="max-w-7xl pt-10 mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* 🔹 LEFT SIDE (2 BOXES STACKED) */}
        <div className="flex flex-col gap-6">

          {/* BOX 1 - PROJECT LIST */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden w-full max-w-[420px]">

            {/* HEADER */}
            <div className="px-6 py-5 border-b border-gray-300 text-[22px] font-semibold text-[#2a2d2a] tracking-tight">
              Our Projects
            </div>

            {/* LIST */}
            {[
              "Concept Meeting",
              "Design & Planning",
              "Execution & Delivery",
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between h-[68px] border-b border-gray-200 last:border-none px-0 relative"
              >

                {/* LEFT SIDE */}
                <div className="flex items-center w-full relative">

                  {/* HOVER BACKGROUND */}
                  <div className="absolute left-[70px] right-4 h-[44px] rounded-full bg-[#eef2ef] 
        opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* NUMBER (HIDE ON HOVER) */}
                  <div className="w-[70px] text-center text-[#8a949e] text-[15px] font-medium border-r border-gray-200
        group-hover:opacity-0 transition-all duration-200 z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* LEFT ARROW (SHOW ON HOVER) */}
                  <div className="w-[70px] text-center text-[#2a2d2a] text-lg absolute left-0
        opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                    →
                  </div>

                  {/* TITLE */}
                  <div className="pl-5 text-[17px] text-[#2a2d2a] tracking-[-0.2px] leading-none z-10">
                    {item}
                  </div>

                </div>

                {/* RIGHT ARROW */}
                <div className="text-[#8a949e] pr-5 text-lg opacity-0 group-hover:opacity-100 transition-all duration-200">
                  →
                </div>

              </div>
            ))}
          </div>

          {/* BOX 2 - TALK ABOUT PROJECT */}

          <div className="w-full max-w-[450px] h-[570px] rounded-t-[2.5rem] rounded-b-[15rem] overflow-hidden flex flex-col shadow-sm border border-gray-300">

            {/* TOP */}
            <div className="bg-[#8b6b55] text-white px-8 pt-10 pb-16 text-center relative">
              <p className="text-[15px] md:text-[17px] font-light tracking-[0.08em] text-white/70 mb-4">
                Talk About Your Project
              </p>

              <h2 className="text-[34px] md:text-[38px] font-semibold tracking-tight">
                9176828870
              </h2>
            </div>

            {/* IMAGE PART */}
            <div className="flex-1 relative">

              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-[#2f4638]/60"></div>

              {/* center icon */}
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] border border-white/70 rounded-full flex items-center justify-center z-10 backdrop-blur-sm">
                <Home className="w-7 h-7 text-white/90" strokeWidth={1.2} />
              </div>
              {/* content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">

                <p className="text-[25px] font-semibold mb-6">
                  Make The <br /> First Move Today.
                </p>

                <button className="flex items-center gap-3 border border-white rounded-full px-6 py-3 bg-white/10 hover:bg-[#5a3e2b] hover:border-[#5a3e2b] hover:text-white transition-all duration-300">        Appointment →
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE BIG IMAGE */}
        <div className="w-full">

          {/* IMAGE */}
          <div className="w-full h-[720px] rounded-[38px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* TEXT */}
          <p className="mt-8 text-[16px] leading-[1.8] text-[#6b7280]">
            Transform your living spaces into a perfect blend of comfort, elegance, and functionality.
            Our residential interior design service is tailored to bring your dream home to life with
            creative ideas, modern execution, and timeless beauty.
          </p>

        </div>  </div>
      {/* </div> */}

      {/* 🔹 SERVICES */}

      <div className="py-28 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {services.map((item, i) => (
            <div key={i} className="relative pt-20 group">

              {/* 🔸 TOP CIRCLE */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full border border-gray-200 bg-white flex items-center justify-center z-10">
                {/* 🔸 TOP CIRCLE */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full border border-gray-200 bg-white flex items-center justify-center z-10 transition-all duration-300">

                  {/* ICON (DEFAULT) */}
                  <div className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                    {item.icon}
                  </div>

                  {/* ARROW (HOVER) */}
                  <div className="absolute w-[60px] h-[60px] rounded-full bg-[#8b6b55] flex items-center justify-center
    opacity-0 scale-75 rotate-[-90deg]
    group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0
    transition-all duration-300">

                    <span className="text-white text-lg">→</span>
                  </div>

                </div>       </div>

              {/* 🔸 ARC LINE (IMPORTANT 🔥) */}
              <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-[220px] h-[120px] border-t border-gray-200 rounded-full"></div>

              {/* 🔸 MAIN CARD */}
              <div className="bg-white border border-gray-200 rounded-[28px] px-10 pt-24 pb-12 text-center transition hover:shadow-md">

                {/* TITLE */}
                <h3 className="text-[26px] font-semibold text-[#2a2d2a] mb-5">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#6b7280] text-[16px] leading-[1.9] max-w-[80%] mx-auto mb-6">
                  {item.desc}
                </p>

                {/* READ MORE */}
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
      {/* <div className="py-24 bg-[#f6f7f8] px-6"> */}
      <div className="max-w-5xl mx-auto">

        {/* 🔹 HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-[42px] font-semibold text-[#2a2d2a] mb-4 tracking-tight">
            Why Choose Us
          </h2>

          <p className="text-[16px] text-[#6b7280] leading-[1.7] max-w-[720px] mx-auto">
            Our residential interior design service is built on creativity, comfort, and functionality.
            Here’s why homeowners trust us to bring their dream spaces to life:
          </p>
        </div>

        {/* 🔹 LIST */}
        <div className="space-y-6">

          {[
            {
              title: "Personalized Home Designs",
              desc: "Tailored interiors that reflect your unique lifestyle and taste.",
            },
            {
              title: "Modern & Timeless Styles",
              desc: "From classic elegance to modern minimalism, we design with versatility.",
            },
            {
              title: "Expert Execution",
              desc: "Professional designers ensure flawless planning and implementation.",
            },
            {
              title: "Premium Quality Materials",
              desc: "We use durable, premium materials for lasting beauty and comfort.",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="group flex items-center rounded-[20px] border border-gray-200 overflow-hidden bg-white 
  transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >

              {/* 🔸 LEFT SIDE */}
              <div className="w-[55%] relative overflow-hidden">

                {/* FULL BACKGROUND */}
                <div className="absolute inset-0 bg-[#eef2ef]"></div>

                {/* FULL PATTERN (THIS IS THE MAIN FIX 🔥) */}
                <div className="absolute inset-0 opacity-50 
    bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.04)_75%,transparent_75%,transparent)] 
    bg-[length:40px_40px]">
                </div>
                {/* 🔥 HOVER ROUND ARROW */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 
  w-[46px] h-[46px] rounded-full border border-gray-400 
  flex items-center justify-center
  opacity-0 scale-75
  group-hover:opacity-100 group-hover:scale-100
  transition-all duration-300 z-20">

                  <span className="text-[#2a2d2a] text-lg">→</span>
                </div>
                {/* CONTENT (ONLY TEXT HAS PADDING) */}
                <div className="relative z-10 px-16 py-8 transition-all duration-300 group-hover:translate-x-2">
                  <h3 className="text-[22px] font-semibold text-[#2a2d2a] tracking-tight">
                    {item.title}
                  </h3>
                </div>

              </div>
              {/* 🔸 RIGHT SIDE */}
              <div className="w-[45%] px-10 py-8">
                <p className="text-[15.5px] text-[#6b7280] leading-[1.8] 
      transition-all duration-300 group-hover:text-[#4b5563]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
      {/* </div> */}

      {/* 🔹 PROCESS */}
      <div className="py-28 bg-white px-6 text-center">

        {/* 🔹 TITLE */}
        <h2 className="text-[42px] font-semibold text-[#2a2d2a] mb-4">
          Process
        </h2>

        <p className="text-[#6b7280] text-[16px] max-w-[700px] mx-auto mb-16 leading-[1.8]">
          Our process is structured yet flexible, ensuring every step from planning to execution runs smoothly and meets your vision.
        </p>

        {/* 🔹 PROCESS STEPS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3">

          {[
            {
              title: "Consultation",
              desc: "Understanding your needs through discussion and guidance.",
            },
            {
              title: "Blueprint",
              desc: "Clear design plan guiding every detail to perfection.",
            },
            {
              title: "Completion",
              desc: "Seamlessly finishing projects with precision and satisfaction.",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="relative flex flex-col items-center px-8 py-10"
            >

              {/* 🔸 VERTICAL LINE */}
              {/* 🔸 LEFT LINE */}
              {i !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[85%] bg-[#e5e7eb]"></div>
              )}

              {/* 🔸 RIGHT LINE */}
              {i !== 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[85%] bg-[#e5e7eb]"></div>
              )}
              {/* 🔸 NUMBER DIAMOND */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#eef2ef] rotate-45 flex items-center justify-center">
                <span className="rotate-[-45deg] text-[16px] font-semibold text-[#2a2d2a]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* 🔸 CIRCLE */}
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


      {/* 🔹 DESIGN INSIGHTS (ADD HERE 👇) */}

      <div className="max-w-5xl mx-auto pb-10">

        {/* HEADER */}
        <h2 className="text-[42px] font-semibold text-[#2a2d2a] mb-4">
          Design Insights
        </h2>

        <p className="text-[#6b7280] text-[16px] leading-[1.8] mb-12 max-w-[700px]">
          Practical tips and expert guidance to help you optimize space, choose colors, and create truly timeless interior designs.
        </p>

        {/* ACCORDION */}
        <div className="space-y-4">

          {[
            {
              title: "Space Optimization",
              desc: "Maximize every inch with smart layouts, functional furniture, and creative storage solutions for a seamless, clutter-free home.",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
            },
            {
              title: "Color Harmony",
              desc: "Choose balanced color palettes that enhance mood and visual appeal.",
              img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=800",
            },
            {
              title: "Material Selection",
              desc: "Pick durable and aesthetic materials that elevate design.",
              img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
            },
            {
              title: "Trendy Inspirations",
              desc: "Stay updated with modern trends while keeping timeless elegance.",
              img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
              className="cursor-pointer group rounded-[20px] border border-gray-200 overflow-hidden bg-white hover:bg-[#eef2ef] transition-all duration-300"
            >

              {/* HEADER ROW */}
              <div className="flex justify-between items-center px-8 py-6">
                <h3 className="text-[20px] font-semibold text-[#2a2d2a]">
                  {i + 1}: {item.title}
                </h3>

                <div className="w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center">
                  {activeIndex === i ? "×" : "+"}
                </div>
              </div>

              {/* CONTENT (SMOOTH TRANSITION) */}
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
                        {/* IMAGE */}
                        <img
                          src={item.img}
                          className="w-full md:w-[180px] h-[140px] object-cover rounded-[14px]"
                          alt=""
                        />

                        {/* TEXT */}
                        <div className="flex-1">
                          <p className="text-[#6b7280] text-sm md:text-base leading-[1.8] mb-5">
                            {item.desc}
                          </p>
                          <button className="flex items-center gap-3 border border-[#8b6b55] rounded-full px-6 py-3 group/button transition-all duration-300 hover:bg-[#8b6b55]">
                            {/* ICON CIRCLE */}
                            <span className="w-[42px] h-[42px] rounded-full border border-[#8b6b55] flex items-center justify-center 
                              transition-all duration-300 
                              group-hover/button:bg-white group-hover/button:border-white">
                              <span className="text-[#8b6b55]">→</span>
                            </span>
                            {/* TEXT */}
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