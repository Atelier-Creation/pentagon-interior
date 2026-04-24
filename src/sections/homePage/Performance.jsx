import React from "react";
import content from "../../data/content";

export default function Performance() {
  const { title, description, stats, points, image } = content.performance;

  return (
    <section className="py-10 md:py-15 bg-white">
      <div className="container">

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[350px] md:h-[650px]">

            {/* IMAGE WITH CLIP */}
            <div className="relative w-full md:h-full">
              <img
                src={image}
                className="w-full h-full object-contain md:object-fill"
                alt=""
              />
            </div>

            {/* ✅ ICONS (OUTSIDE CLIP, INSIDE WRAPPER) */}

            {points.map((item) => (
              <div key={item.id} className={`absolute ${item.position} group md:block hidden`}>

                {/* + ICON */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
                  +
                </div>

                {/* TOOLTIP */}
                <div className="
                  absolute top-12 left-0
                  w-[220px]
                  bg-white rounded-xl shadow-lg p-4
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                ">
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>
          {/* RIGHT CONTENT */}
          <div className="px-5 md:p-0">

            {/* LABEL */}
            <div className="mb-6">
              <span className="border border-gray-300 rounded-full px-5 py-2 text-sm tracking-widest text-gray-700 uppercase">
                ✦ PERFORMANCE
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-2xl md:text-[64px] md:leading-[1.05] font-semibold text-[#2b2f2b] mb-8 tracking-tight">
              {title}
            </h2>

            {/* DESC */}
            <p className="text-[18px] text-gray-500 leading-[1.7] mb-12 max-w-lg">
              {description}
            </p>

            {/* PROGRESS BARS */}
            {stats.map((stat, i) => (
              <div key={i} className="mb-10">
                <div className="flex justify-between mb-3 text-[16px] font-medium text-[#2b2f2b]">
                  <span>{stat.label}</span>
                  <span>{stat.value}%</span>
                </div>

                <div className="relative h-[6px] bg-gray-300/60 overflow-hidden">
                  <div 
                    className="h-full bg-[#384238]" 
                    style={{ width: `${stat.value}%` }}
                  ></div>

                  {/* RIGHT DESIGN LINES */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
                    <span className="w-10 h-[1px] bg-[#384238]"></span>
                    <span className="w-8 h-[1px] bg-[#384238]"></span>
                    <span className="w-6 h-[1px] bg-[#384238]"></span>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="flex items-center gap-4 mt-6">

              <div className="w-14 h-14 bg-[#eef1ee] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#2b2f2b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7l9 6 9-6" />
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                </svg>
              </div>

              <div>
                <p className="text-gray-500 text-[16px]">
                  Impressed? Send your interest to start.
                </p>

                <p className="font-semibold text-[18px] mt-2 text-[#2b2f2b]">
                  → Let’s get started!
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}