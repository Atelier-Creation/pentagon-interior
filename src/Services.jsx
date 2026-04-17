import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaPencilRuler, FaTools, FaDraftingCompass } from "react-icons/fa";
import { useState } from "react";
import WhyChooseUs from "./sections/homePage/WhyChooseUs";
export default function Services() {
  const cardData = [
  { title: "PRE-DESIGN", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
  { title: "EXECUTION", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { title: "DESIGN", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" },
  { title: "PLANNING", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
  { title: "INTERIOR", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { title: "ARCHITECTURE", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858" },
];
const [start, setStart] = useState(0);
  return (
    <>
      <Header />

      {/* 🔹 HERO SECTION */}
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
            Services 
          </h1>

          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <span>Services</span>
          </p>
        </div>
      </div>

     {/* 🔹 FIND YOUR STYLE */}
<section className="py-28 bg-[#f6f7f8] text-center">
  
  {/* TOP BADGE */}
  <div className="mb-6 flex justify-center">
    <div className="border border-gray-300 px-5 py-2 rounded-full text-xs tracking-widest text-gray-700">
      ✕ DESIGN YOUR WAY
    </div>
  </div>

  {/* HEADING */}
  <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-[#2d2d2d]">
    Find Your Signature Look
  </h2>

  {/* SUBTEXT */}
  <p className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg leading-relaxed">
    Discover a design style that reflects your personality and transforms
    your space into something uniquely yours.
  </p>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 items-center">

   {/* LEFT CARD */}
<div className="group flex flex-col items-center">

  {/* CARD */}
  {/* CARD */}
  <div className="relative h-[230px] w-full rounded-[30px] bg-[#eef1ef] overflow-hidden flex items-center justify-center text-center">

    {/* GRID */}
  <div className="absolute inset-0 overflow-hidden">

  {/* BASE GRID */}
  <div className="absolute inset-0 
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
         linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:60px_60px] opacity-40">
  </div>

  {/* MOVING LIGHT EFFECT */}
  <div className="absolute inset-0 
    bg-gradient-to-br from-transparent via-[#8b6b55]/40 to-transparent
    opacity-0 group-hover:opacity-100 
    transition duration-700 
    animate-[moveLight_3s_linear_infinite]">
  </div>

</div>
  
    {/* CONTENT */}
    <div className="relative flex flex-col items-center transition-all duration-300 group-hover:-translate-y-4">

      <h3 className="text-[22px] font-semibold text-[#2c2c2c]">
        Creative Planning
      </h3>

      {/* INSIDE TEXT */}
<p className="text-[16px] leading-relaxed text-gray-500 mt-2 opacity-0 
  group-hover:opacity-100 transition">
  Tailored design concepts that balance beauty with functionality.
</p>
    </div>
  </div>

  {/* BELOW TEXT (DEFAULT) */}
 <p className="mt-4 text-[16px] leading-relaxed text-gray-500 transition 
  group-hover:opacity-0">
    Tailored design concepts that balance beauty with functionality.
  </p>

  {/* READ MORE (HOVER ONLY) */}
  <div className="mt-4 opacity-0 translate-y-3 
  group-hover:opacity-100 group-hover:translate-y-0 
  transition-all duration-300">

  <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2 
  text-[#2f3e34] hover:bg-[#8b6b55] hover:text-white transition-all duration-300">

  {/* ARROW */}
  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
    transition hover:bg-white hover:text-[#2f3e34]">
    →
  </span>

  {/* TEXT */}
  <span className="text-sm font-medium">
    Read More
  </span>

</button>
</div>

</div>
{/* CENTER CARD */}
<div className="group flex flex-col items-center">

  {/* CARD */}
  {/* CARD */}
  <div className="relative h-[230px] w-full rounded-[30px] bg-[#eef1ef] overflow-hidden flex items-center justify-center text-center">

    {/* GRID */}
  <div className="absolute inset-0 overflow-hidden">

  {/* BASE GRID */}
  <div className="absolute inset-0 
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
         linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:60px_60px] opacity-40">
  </div>

  {/* MOVING LIGHT EFFECT */}
  <div className="absolute inset-0 
bg-gradient-to-br from-transparent via-[#8b6b55]/40 to-transparent
   opacity-0 group-hover:opacity-100 
    transition duration-700 
    animate-[moveLight_3s_linear_infinite]">
  </div>

</div>
    {/* CONTENT */}
    <div className="relative flex flex-col items-center transition-all duration-300 group-hover:-translate-y-4">

      <h3 className="text-[22px] font-semibold text-[#2c2c2c]">
        Innovative Design
      </h3>

      {/* INSIDE TEXT */}
      <p className="text-[16px] leading-relaxed text-gray-500 mt-2 opacity-0 
        group-hover:opacity-100 transition">
        Unique interior and architectural ideas that bring spaces to life.
      </p>

    </div>
  </div>

  {/* BELOW TEXT */}
  <p className="mt-4 text-[16px] leading-relaxed text-gray-500 transition 
    group-hover:opacity-0">
    Unique interior and architectural ideas that bring spaces to life.
  </p>

  {/* READ MORE BUTTON */}
  <div className="mt-4 opacity-0 translate-y-3 
    group-hover:opacity-100 group-hover:translate-y-0 
    transition-all duration-300">

    <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2 
      text-[#2f3e34] hover:bg-[#8b6b55] hover:text-white transition-all duration-300">

      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
        transition hover:bg-white hover:text-[#2f3e34]">
        →
      </span>

      <span className="text-sm font-medium">
        Read More
      </span>

    </button>

  </div>

</div>

{/* RIGHT CARD */}
<div className="group flex flex-col items-center">

  {/* CARD */}
  <div className="relative h-[230px] w-full rounded-[30px] bg-[#eef1ef] overflow-hidden flex items-center justify-center text-center">

    {/* GRID */}
  <div className="absolute inset-0 overflow-hidden">

  {/* BASE GRID */}
  <div className="absolute inset-0 
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
         linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:60px_60px] opacity-40">
  </div>

  {/* MOVING LIGHT EFFECT */}
  <div className="absolute inset-0 
   bg-gradient-to-br from-transparent via-[#8b6b55]/40 to-transparent
    opacity-0 group-hover:opacity-100 
    transition duration-700 
    animate-[moveLight_3s_linear_infinite]">
  </div>

</div>
    {/* CONTENT */}
    <div className="relative flex flex-col items-center transition-all duration-300 group-hover:-translate-y-4">

      <h3 className="text-[22px] font-semibold text-[#2c2c2c]">
        Creative Planning
      </h3>

      {/* INSIDE TEXT */}
      <p className="text-[16px] leading-relaxed text-gray-500 mt-2 transition 
        opacity-0 group-hover:opacity-100 group-hover:-translate-y-2">
        Tailored design concepts that balance beauty with functionality.
      </p>

    </div>
  </div>

  {/* BELOW TEXT (DEFAULT) */}
<p className="mt-4 text-[16px] leading-relaxed text-gray-500 transition 
  group-hover:opacity-0">
    Precision in every details ensuring smooth and timely delivery.
  </p>

  {/* READ MORE (HOVER ONLY) */}
<div className="mt-4 opacity-0 translate-y-3 
  group-hover:opacity-100 group-hover:translate-y-0 
  transition-all duration-300">

 <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2 
  text-[#2f3e34] hover:bg-[#8b6b55] hover:text-white transition-all duration-300">

  {/* ARROW */}
  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
    transition hover:bg-white hover:text-[#2f3e34]">
    →
  </span>

  {/* TEXT */}
  <span className="text-sm font-medium">
    Read More
  </span>

</button>
</div>

</div> </div>
  {/* BOTTOM TEXT + BUTTON */}
{/* <div className="mt-20 grid md:grid-cols-3 items-center max-w-6xl mx-auto px-6 gap-6">

 
  <p className="text-gray-500 text-base text-center md:text-left max-w-[320px]">
    Tailored design concepts that balance beauty with functionality.
  </p>


  <div className="flex justify-center">
    <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2.5 group hover:bg-[#2f3e34] transition-all">

      <span className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 group-hover:bg-white group-hover:text-[#2f3e34] transition">
        →
      </span>

      <span className="font-medium text-[#2f3e34] group-hover:text-white">
        Read More
      </span>

    </button>
  </div>

  <p className="text-gray-500 text-base text-center md:text-right max-w-[320px] ml-auto">
    Precision in every detail, ensuring smooth and timely delivery.
  </p>

</div> */}
</section>
<section
  className="py-28 min-h-[650px] text-white relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop')",
    backgroundSize: "120%",
    backgroundPosition: "center",
  }}
>
  {/* DARK OVERLAY */}
  {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500"></div> */}
{/* 🔹 SECTION HEADER */}
<div className="relative text-center mb-20 z-30">

  {/* SMALL LABEL */}
  <div className="flex justify-center mb-4">
    <div className="flex items-center gap-2 text-white/70 tracking-widest text-sm">
      <span className="text-lg">✕</span>
      <span>SERVICES</span>
    </div>
  </div>

  {/* MAIN HEADING */}
  <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4">
    Services Crafted for You
  </h2>

  {/* SUBTEXT */}
  <p className="text-white/70 text-lg">
    From concept to completion, we’ve got you covered.
  </p>

</div>
  <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
{cardData.slice(start, start + 3).map((item, i) => (
  <div
    key={i}
    className="group relative h-[460px] rounded-3xl border border-white/30 overflow-hidden flex items-center justify-center"
  >

    {/* 🔥 HOVER IMAGE */}
   <div
  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 z-0"
  style={{
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

    {/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition z-10" />
    {/* ICON */}
    <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow z-30">
      {i === 0 && <FaDraftingCompass className="text-gray-500 text-lg" />}
      {i === 1 && <FaTools className="text-gray-500 text-lg" />}
      {i === 2 && <FaPencilRuler className="text-gray-500 text-lg" />}
    </div>

    {/* HEADING */}
    <h2 className="absolute top-[38%] -translate-y-1/2 
      text-[36px] tracking-[6px] text-transparent stroke-text 
      text-center z-30">
      {item.title}
    </h2>

    {/* WHITE CARD */}
   <div className="absolute bottom-6 bg-[#8b6b55] text-white p-7 
  rounded-[30px] w-[78%] shadow-xl z-30 
  opacity-100 group-hover:opacity-0 transition duration-300">

  <h3 className="font-semibold text-lg mb-2 text-white">
    {item.title === "EXECUTION"
      ? "Execution & Delivery"
      : item.title === "PRE-DESIGN"
      ? "Concept Meeting"
      : "Design & Planning"}
  </h3>

  <p className="text-sm text-white/80 mb-4 leading-relaxed">
    We discuss your needs, style, and vision to create a clear, personalized design concept.
  </p>

  <button className="flex items-center gap-2 text-white font-medium">
    → Read More
  </button>

</div> 

  </div>

))} </div>  

{/* 🔥 ADD THIS BELOW GRID */}
<div className="flex items-center justify-center gap-6 mt-16 text-white/70">

  {/* PREV */}
  <button
    onClick={() => setStart((prev) => Math.max(prev - 1, 0))}
    className="flex items-center gap-2 hover:text-white transition"
  >
    <span className="text-xl">←</span>
    <span>Prev</span>
  </button>

  {/* DIVIDER */}
  <div className="h-6 w-px bg-white/40"></div>

  {/* NEXT */}
  <button
    onClick={() =>
      setStart((prev) =>
        prev + 3 < cardData.length ? prev + 1 : prev
      )
    }
    className="flex items-center gap-2 hover:text-white transition"
  >
    <span>Next</span>
    <span className="text-xl">→</span>
  </button>

</div>
</section>
      {/* 🔹 WHY CHOOSE US */}
      {/* <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

         
          <img
            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a"
            className="rounded-[200px]"
          />

        
          <div>
            <h2 className="text-5xl font-semibold mb-6">
              Discover the Difference We Can Make
            </h2>

            <p className="text-gray-600 mb-8">
              Skilled professionals crafting unique and stylish spaces.
            </p>

            <div className="space-y-6">
              
              {[
                "Expert Designers",
                "Transparent Pricing",
                "Quality Materials",
                "On-Time Delivery",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">{item}</h4>
                    <p className="text-sm text-gray-500">
                      High-quality service and professional execution.
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section> */}
<WhyChooseUs />
      <Footer />
    </>
  );
}