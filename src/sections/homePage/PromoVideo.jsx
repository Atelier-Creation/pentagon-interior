import React from "react";
import { Link } from "react-router-dom";
export default function PromoVideo() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">

    <div className="absolute inset-0 bg-animate"></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CENTER CIRCLE */}
      <div className="relative z-10 flex items-center justify-center h-full">

        <div className="relative w-[420px] h-[420px] rounded-full bg-[#927562d4]/90 backdrop-blur flex flex-col items-center justify-center text-center text-white p-10">

          {/* SMALL ICON */}
          <div className="mb-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10.5L12 3l9 7.5M5 10v9h5v-6h4v6h5v-9"
    />
  </svg>
</div>

          {/* TITLE */}
          <h2 className="text-[28px] font-semibold leading-snug mb-3">
            Discover the <br /> Art of Modern Living
          </h2>

          {/* SUBTEXT */}
          <p className="text-white/70 text-sm mb-6">
            Enjoy comfort, style, and innovation.
          </p>

          {/* BUTTON */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              →
            </span>

           <Link
  to="/contact"
  className="bg-white text-black px-6 py-2 rounded-full font-medium inline-block"
>
  Contact Us
</Link>
          </div>

          {/* DECORATIVE LINES */}
          <div className="absolute left-[-60px] top-1/2 w-[100px] h-[1px] bg-white/40 rotate-[-20deg]"></div>
          <div className="absolute right-[-60px] bottom-1/3 w-[100px] h-[1px] bg-white/40 rotate-[20deg]"></div>

        </div>
      </div>
    </section>
  );
}