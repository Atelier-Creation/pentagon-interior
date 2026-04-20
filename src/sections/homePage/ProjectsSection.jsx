import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const categories = ["all", "commercial", "residential", "hospitality"];

const projectsData = [
  // COMMERCIAL
  {
    id: 1,
    category: "commercial",
    title: "Calm Core Wellness Spa",
    location: "Boston, United States",
    date: "20 Aug, 2025",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 2,
    category: "commercial",
    title: "Prime Axis Co-Working Hub",
    location: "Miami, United States",
    date: "18 Aug, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },

  // RESIDENTIAL
  {
    id: 3,
    category: "residential",
    title: "Serene Heights Luxury Apartment",
    location: "Las Vegas, United States",
    date: "17 Aug, 2025",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    id: 4,
    category: "residential",
    title: "Tranquil Nest Villa Interior",
    location: "Australia",
    date: "15 Jan, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },

  // HOSPITALITY
  {
    id: 5,
    category: "hospitality",
    title: "Vista Grande Boutique Hotel",
    location: "New York",
    date: "15 Aug, 2026",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 6,
    category: "hospitality",
    title: "Aurora Grand Hotel Interior",
    location: "San Francisco",
    date: "23 Aug, 2025",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState("all");
  const [index, setIndex] = useState(0);

  const data =
    active === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === active);

  const visible = data.slice(index, index + 2);

  return (
    <section className="py-10 md:py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 md:mb-16">
          <div className="flex flex-col gap-4">

            {/* TOP SMALL LABEL */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gray-300"></span>

              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                ✦ OUR PROJECTS
              </div>

              <span className="w-6 h-[1px] bg-gray-300"></span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-[#2a2d2a]">
              Our Recent Creations
            </h2>

          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 text-[12px] md:text-sm uppercase">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setIndex(0); // 🔥 IMPORTANT FIX
                }}
                className={`transition ${active === cat
                    ? "text-black font-semibold"
                    : "text-gray-400 animate-pulse"
                  }`}
              >
                {active === cat
                  ? `[ ${cat === "all" ? "View All" : cat} ]`
                  : cat === "all"
                    ? "View All"
                    : cat}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          {visible.map((item, i) => (
            <div
              key={item.id}
              className={`
        relative rounded-[25px] md:rounded-[30px] overflow-hidden group w-full
        ${i === 0
                  ? "lg:w-[60%] h-[350px] md:h-[460px]"
                  : "lg:w-[40%] h-[350px] md:h-[460px]"}
      `}
            >
              {/* IMAGE */}
              <img
                src={`${item.image}?auto=format&fit=crop&w=1200&q=80`}
                className="w-full h-full object-cover"
                alt=""
              />

              {/* LEFT CARD */}
              <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:w-auto overflow-hidden">
                <div className="
          bg-white w-full md:w-[340px] px-6 py-6 md:px-4 md:py-4 rounded-[20px] md:rounded-[25px] shadow-xl
          transition-all duration-500
          group-hover:bg-[#8b6b55] group-hover:text-white
          group-hover:bg-primary group-hover:text-white
        ">
                  <p className="text-[10px] uppercase mb-2 md:mb-3 tracking-widest opacity-70">
                    {item.category}
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[12px] md:text-sm mb-4 md:mb-5 opacity-80">
                    {item.location} • {item.date}
                  </p>

                  <Link to={`/project/${item.id}`} className="text-xs md:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 group/btn">
 <ArrowRight size={16} /> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-12 text-gray-400">

          {/* PREV */}
          <button
            onClick={() => setIndex((prev) => Math.max(prev - 2, 0))}
            className="flex items-center gap-2 hover:text-black transition"
          >
            ← Prev
          </button>

          {/* Divider */}
          <span className="w-[1px] h-6 bg-gray-300"></span>

          {/* NEXT */}
          <button
            onClick={() =>
              setIndex((prev) =>
                prev + 2 < data.length ? prev + 2 : prev
              )
            }
            className="flex items-center gap-2 hover:text-black transition"
          >
            Next →
          </button>

        </div>
      </div>
    </section>
  );
}