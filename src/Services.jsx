import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaPencilRuler, FaTools, FaDraftingCompass } from "react-icons/fa";
import { useState } from "react";
import WhyChooseUs from "./sections/homePage/WhyChooseUs";
import content from "./data/content";

export default function Services() {
  const [start, setStart] = useState(0);
  const cardData = content.services.detailed;

  return (
    <>
      <Header />

      {/* 🔹 HERO SECTION */}
      <div
        className="h-[420px] flex items-center justify-center relative text-white"
        style={{
          backgroundImage: `url('${content.services.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/80"></div>

        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            {content.services.title}
          </h1>

          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <span>{content.services.title}</span>
          </p>
        </div>
      </div>

      {/* 🔹 FIND YOUR STYLE */}
      <section className="py-28 bg-[#f6f7f8] text-center">
        <div className="mb-6 flex justify-center">
          <div className="border border-gray-300 px-5 py-2 rounded-full text-xs tracking-widest text-gray-700">
            ✕ DESIGN YOUR WAY
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-[#2d2d2d]">
          Find Your Signature Look
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg leading-relaxed">
          Discover a design style that reflects your personality and transforms
          your space into something uniquely yours.
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 items-center">
          {content.services.main.map((service, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative h-[230px] w-full rounded-[30px] bg-[#eef1ef] overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8b6b55]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 animate-[moveLight_3s_linear_infinite]"></div>
                </div>
                <div className="relative flex flex-col items-center transition-all duration-300 group-hover:-translate-y-4">
                  <h3 className="text-[22px] font-semibold text-[#2c2c2c]">
                    {service.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                    {service.description}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-500 transition group-hover:opacity-0">
                {service.description}
              </p>
              <div className="mt-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2 text-[#2f3e34] hover:bg-[#8b6b55] hover:text-white transition-all duration-300">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 transition hover:bg-white hover:text-[#2f3e34]">
                    →
                  </span>
                  <span className="text-sm font-medium">Read More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 DETAILED SERVICES */}
      <section
        className="py-28 min-h-[650px] text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "120%",
          backgroundPosition: "center",
        }}
      >
        <div className="relative text-center mb-20 z-30">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 text-white/70 tracking-widest text-sm">
              <span className="text-lg">✕</span>
              <span>DETAILED SERVICES</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4">
            Precision in Every Layer
          </h2>
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
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 z-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition z-10" />
              <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow z-30">
                {i === 0 && <FaDraftingCompass className="text-gray-500 text-lg" />}
                {i === 1 && <FaTools className="text-gray-500 text-lg" />}
                {i === 2 && <FaPencilRuler className="text-gray-500 text-lg" />}
              </div>

              <h2 className="absolute top-[38%] -translate-y-1/2 text-[36px] tracking-[6px] text-transparent stroke-text text-center z-30">
                {item.title}
              </h2>

              <div className="absolute bottom-6 bg-[#8b6b55] text-white p-7 rounded-[30px] w-[78%] shadow-xl z-30 opacity-100 group-hover:opacity-0 transition duration-300">
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-white font-medium">
                  → Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-16 text-white/70">
          <button
            onClick={() => setStart((prev) => Math.max(prev - 1, 0))}
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="text-xl">←</span>
            <span>Prev</span>
          </button>
          <div className="h-6 w-px bg-white/40"></div>
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

      <WhyChooseUs />
      <Footer />
    </>
  );
}