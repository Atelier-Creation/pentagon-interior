import React from "react";

const steps = [
  {
    id: 1,
    title: "Design & Planning",
    desc: "We transform ideas into visionary designs that balance creativity, functionality, and sustainability.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 21h18M6 18V8m6 10V4m6 14v-6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Development",
    desc: "Actionable plans by integrating structural engineering, technologies, and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Execution & Delivery",
    desc: "We bring designs to life with precision, professionalism, and attention to detail.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-[#384238] text-white py-28 overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] text-center">

        {/* TOP LABEL */}
        <div className="flex justify-center mb-6">
          <div className="border border-white/20 rounded-full px-4 py-1 text-xs uppercase tracking-widest">
            ✦ How We Work
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-5xl md:text-6xl font-semibold mb-4">
          Design Made Easy in 3 Steps
        </h2>

        <p className="text-white/70 mb-16">
          From concept to completion, we've got you covered.
        </p>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-14 relative">

          {steps.map((step, index) => (
  <div key={step.id} className="relative">

    {/* ✅ CARD */}
    <div className="relative border border-white/10 rounded-[25px] p-12 text-left bg-white/5 backdrop-blur">

      {/* NUMBER */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#4b5a4b] w-10 h-10 flex items-center justify-center rotate-45">
        <span className="-rotate-45 font-semibold">{step.id}</span>
      </div>

      <h3 className="text-2xl font-semibold mb-6 mt-6">
        {step.title}
      </h3>

      {/* IMAGE */}
      <div className="relative mb-6 group">
        <div className="w-full h-[200px] rounded-full overflow-hidden transition-all duration-500 group-hover:px-4 group-hover:py-2">
          <img
            src={`${step.image}?auto=format&fit=crop&w=600&q=80`}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>

        {/* ICON */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#384238] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:left-1/2 group-hover:-translate-x-1/2">
          {step.icon}
        </div>
      </div>

      <p className="text-white/70 text-sm leading-relaxed">
        {step.desc}
      </p>
    </div>

    {/* 🔥 CONNECTOR ARROW (ONLY BETWEEN ITEMS) */}
    {index !== steps.length - 1 && (
      <div className="hidden md:block absolute top-1/2 right-[-35px] -translate-y-1/2 z-10">
        
        {/* Arrow Lines */}
        <div className="flex flex-col items-center gap-1 opacity-40">
          <span className="w-6 h-[2px] bg-white rotate-45"></span>
          <span className="w-6 h-[2px] bg-white rotate-45"></span>
          <span className="w-6 h-[2px] bg-white rotate-45"></span>
        </div>

      </div>
    )}

  </div>
))}
        </div>
      </div>

      {/* 🔥 BOTTOM ARROW SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-[180px]"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="
        M0,100 
        C300,180 500,260 720,300 
        C940,260 1140,180 1440,100 
        L1440,320 
        L0,320 
        Z
      "
    />
  </svg>
</div>
    </section>
  );
}