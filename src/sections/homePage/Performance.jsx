import React from "react";

export default function Performance() {
  const points = [
    {
      id: 1,
      title: "TV Unit",
      desc: "to fit Smart TV - 55-inch OLED",
      position: "top-[80px] left-[80px]"
    },
    {
      id: 2,
      title: "Window curtains",
      desc: "Premium curtains with sliding glass door",
      position: "top-[180px] right-[150px]"
    },
    {
      id: 3,
      title: "Sofa",
      desc: "Sectional Sofa - Gray fabric matched to furnishings",
      position: "bottom-[170px] left-[160px]"
    }
  ];
  return (
    <section className="py-15 bg-white">
      <div className="container">

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[650px]">

            {/* IMAGE WITH CLIP */}
            <div
              className="relative  w-full h-full"
              // style={{
              //   clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 85%)",
              // }}
            >
              <img
                src="https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/room-planner-min.png"
                className="w-full h-full object-fill"
                alt=""
              />
            </div>

            {/* ✅ ICONS (OUTSIDE CLIP, INSIDE WRAPPER) */}

            {points.map((item) => (
              <div key={item.id} className={`absolute ${item.position} group`}>

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
          <div>

            {/* LABEL */}
            <div className="mb-6">
              <span className="border border-gray-300 rounded-full px-5 py-2 text-sm tracking-widest text-gray-700 uppercase tracking-widest text-gray-700">
                ✦ PERFORMANCE
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-[64px] leading-[1.05] font-semibold text-[#2b2f2b] mb-8 tracking-tight">
              Our Performance in <br /> Plain View
            </h2>

            {/* DESC */}
            <p className="text-[18px] text-gray-500 leading-[1.7] mb-12 max-w-lg">
              Discover key numbers that reflect our dedication, quality, and the trust we’ve built with clients over time.
            </p>

            {/* PROGRESS BARS */}

            {/* ITEM 1 */}
            <div className="mb-10">
              <div className="flex justify-between mb-3 text-[16px] font-medium text-[#2b2f2b]">
                <span>Clients Who Recommend Us</span>
                <span>72%</span>
              </div>

              <div className="relative h-[6px] bg-gray-300/60 overflow-hidden">
                <div className="h-full bg-[#384238] w-[72%]"></div>

                {/* RIGHT DESIGN LINES */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
                  <span className="w-10 h-[1px] bg-[#384238]"></span>
                  <span className="w-8 h-[1px] bg-[#384238]"></span>
                  <span className="w-6 h-[1px] bg-[#384238]"></span>
                </div>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="mb-10">
              <div className="flex justify-between mb-3 text-[16px] font-medium text-[#2b2f2b]">
                <span>Client Satisfaction </span>
                <span>95%</span>
              </div>

              <div className="relative h-[6px] bg-gray-300/60 overflow-hidden">
                <div className="h-full bg-[#384238] w-[72%]"></div>

                {/* RIGHT DESIGN LINES */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
                  <span className="w-10 h-[1px] bg-[#384238]"></span>
                  <span className="w-8 h-[1px] bg-[#384238]"></span>
                  <span className="w-6 h-[1px] bg-[#384238]"></span>
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="mb-10">
              <div className="flex justify-between mb-3 text-[16px] font-medium text-[#2b2f2b]">
                <span>Special Luxury Projects </span>
                <span>25%</span>
              </div>

              <div className="relative h-[6px] bg-gray-300/60 overflow-hidden">
                <div className="h-full bg-[#384238] w-[72%]"></div>

                {/* RIGHT DESIGN LINES */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
                  <span className="w-10 h-[1px] bg-[#384238]"></span>
                  <span className="w-8 h-[1px] bg-[#384238]"></span>
                  <span className="w-6 h-[1px] bg-[#384238]"></span>
                </div>
              </div>
            </div>

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