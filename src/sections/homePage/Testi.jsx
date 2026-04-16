import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    company: "Nintendo",
    text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "John Carter",
    company: "Google",
    text: "Outstanding experience. The UI and performance are top-notch and highly professional.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sophia Lee",
    company: "Amazon",
    text: "Clean design and very intuitive interface. Loved working with this system.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5.0,
  },
];
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[index];

  return (
    <section className="py-28 bg-white text-center relative">

      {/* LABEL */}
      <div className="mb-6">
        <span className="border border-gray-300 rounded-full px-5 py-2 text-sm tracking-widest">
          ✦ TESTIMONIALS
        </span>
      </div>

      {/* TITLE */}
      <h2 className="text-[64px] leading-[1.1] font-semibold mb-16 text-[#2b2f2b]">
        Genuine Feedback From Our <br /> Loyal Customers
      </h2>

      {/* CARD */}
      <div className="relative max-w-[900px] mx-auto">

        {/* AVATAR */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <img
            src={t.image}
            className="w-20 h-20 rounded-full border-4 border-white shadow"
            alt=""
          />
        </div>

        {/* BOX */}
        <div className="bg-white rounded-[100px] px-16 py-16 shadow-sm border border-gray-200">

          {/* TEXT */}
          <p className="text-[20px] text-gray-700 leading-[1.7] mb-10">
            “{t.text}”
          </p>

          {/* RATING */}
         <div className="flex items-center justify-center my-10">

  {/* LEFT LINE + DIAMONDS */}
  <div className="flex items-center gap-2 flex-1 justify-end pr-4">
    <span className="w-6 h-[1px] bg-gray-300"></span>
    <span className="w-2 h-2 bg-gray-300 rotate-45"></span>
    <span className="w-2 h-2 bg-gray-300 rotate-45"></span>
    <span className="w-2 h-2 bg-gray-300 rotate-45"></span>
  </div>

  {/* CENTER RATING */}
  <div className="px-5 py-2 border border-gray-300 rounded-full text-sm bg-white shadow-sm flex items-center gap-2">
    <Star size={16} className="text-[#fbbc05] fill-[#fbbc05]" /> <span className="font-medium text-gray-700">{t.rating} OUT OF 5</span>
  </div>

  {/* RIGHT LINE + DIAMONDS */}
  <div className="flex items-center gap-2 flex-1 justify-start pl-4">
    <span className="w-2 h-2 bg-gray-300 rotate-45"></span>
    <span className="w-2 h-2 bg-gray-300 rotate-45"></span>
    <span className="w-2 h-2 bg-gray-300 rotate-45"></span>
    <span className="w-6 h-[1px] bg-gray-300"></span>
  </div>

</div>
          {/* NAME */}
          <p className="font-semibold text-lg">
            {t.name} <span className="text-gray-500 font-normal">{t.company}</span>
          </p>
        </div>

        {/* PREV */}
        <button
          onClick={prev}
          className="absolute left-[20px] lg:left-[-120px] top-[110%] lg:top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary flex items-center gap-2 transition-colors font-medium font-sans"
        >
          <ArrowLeft size={20} /> <span>Prev</span>
        </button>

        <button
          onClick={next}
          className="absolute right-[20px] lg:right-[-120px] top-[110%] lg:top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary flex items-center gap-2 transition-colors font-medium font-sans"
        >
          <span>Next</span> <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
}