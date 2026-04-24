import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Trophy, Building2, ChevronRight, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import content from "./data/content";

export default function About() {
  const [activeStatement, setActiveStatement] = useState(0);
  const [showCircle, setShowCircle] = useState(true);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const allMembers = content.about.team;
  const visibleMembers = allMembers.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <Header />

      {/* 🔹 HERO SECTION */}
      <div
        className="h-[280px] md:h-[420px] flex items-center justify-center relative text-white px-4"
        style={{
          backgroundImage: `url('${content.about.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark green overlay */}
        <div className="absolute inset-0 bg-primary-dark/80"></div>

        <div className="relative text-center">
          <h1 className="text-3xl md:text-6xl font-bold">
            {content.about.title}
          </h1>
          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white cursor-pointer">
              Home
            </Link>
            <span>›</span>
            <span>{content.about.title}</span>
          </p>
        </div>
      </div>

      {/* 🔹 SECTION 1 (Image + Text) */}
      <div className="py-16 md:py-28 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="relative w-full h-[400px] md:h-[560px]">
            {/* BIG IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&q=80&w=800"
              className="absolute top-0 left-0 w-[80%] sm:w-[70%] md:w-[370px] h-[220px] sm:h-[260px] md:h-[420px] object-cover rounded-[40px]"
              alt=""
            />

            {/* SMALL IMAGE (OVERLAP RIGHT) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              className="absolute top-[120px] sm:top-[150px] md:top-[200px] right-0 md:left-[260px] w-[70%] sm:w-[60%] md:w-[350px] h-[160px] sm:h-[200px] md:h-[260px] object-cover rounded-3xl shadow-xl"
              alt=""
            />

            {/* CARD (BOTTOM LEFT CENTER) */}
            <div className="absolute left-[5%] md:left-[120px] bottom-[10px] md:bottom-[40px] bg-primary text-white px-5 py-4 md:px-8 md:py-6 rounded-2xl shadow-lg z-10">
              <h3 className="text-3xl md:text-4xl font-bold leading-none">{content.about.stats.projectsCompleted}</h3>
              <p className="text-sm opacity-80 mt-1">Project Completed</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:-ml-6 text-left">
            {/* FOUNDATION BLOCK */}
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">The Foundation</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-md">
                  We’ve been crafting innovative interiors and architecture that balance luxury with functionality...
                </p>
              </div>
            </div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-xs font-medium tracking-wider mb-6 uppercase">
              ✕ {content.about.title}
            </div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 text-gray-900">
              Innovating Interiors,<br />Inspiring Lives
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
              {content.about.description}
            </p>

            {/* BUTTON LIST */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border border-gray-300 rounded-full px-6 py-4">
                <span className="font-medium">Design</span>
                <span className="text-gray-500">01</span>
              </div>
              <div className="flex justify-between items-center border border-gray-300 rounded-full px-6 py-4">
                <span className="font-medium">Execute</span>
                <span className="text-gray-500">02</span>
              </div>
              <div className="flex justify-between items-center border border-gray-300 rounded-full px-6 py-4">
                <span className="font-medium">Manage</span>
                <span className="text-gray-500">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 SECTION 2 (Green + Circle Design) */}
      <div
        className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888941259-7a974dfb9a51?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK GREEN OVERLAY */}
        <div className="absolute inset-0 bg-primary/90"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6">
          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">
            <p className="border border-white/40 px-5 py-2 inline-block rounded-full mb-6 text-sm">
              ✕ OUR STATEMENT
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Principles <br className="hidden md:block" />
              Behind Everything <br className="hidden md:block" />
              We Do
            </h2>
            <p className="text-white/70 mb-10">
              We stay true to our values, honoring commitments while striving for meaningful growth in the luxury design space.
            </p>

            <div className="space-y-4 mb-10">
              {content.whyChooseUs.values.map((value, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveStatement(idx)}
                  className={`flex justify-between border-b pb-3 cursor-pointer transition-all duration-300 group ${activeStatement === idx ? 'border-white text-white' : 'border-white/20 text-white/60 hover:text-white'}`}
                >
                  <span className={`font-medium ${activeStatement === idx ? 'translate-x-2' : 'group-hover:translate-x-1'} transition-transform duration-300`}>
                    {value.title}
                  </span>
                  <span className={`${activeStatement === idx ? 'rotate-90' : ''} transition-transform duration-300`}>
                    <ArrowRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            <button className="border border-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              Get Started <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT SIDE (BIG CIRCLE) */}
          <div
            className="w-full md:w-[420px] h-[350px] md:h-[420px] bg-white rounded-full flex flex-col items-center justify-center text-center p-10 shadow-xl transition-all duration-500 mt-12 md:mt-0 relative overflow-hidden group/circle"
          >
            {/* Subtle background icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none group-hover/circle:scale-110 transition-transform duration-700">
               <Trophy size={300} />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 transition-colors group-hover/circle:bg-primary/10">
                <Trophy className="w-8 h-8 text-primary/40" />
              </div>
              
              <p className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-2 opacity-60">
                {content.whyChooseUs.values[activeStatement].title}
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4 text-[#2a2d2a] px-4 leading-tight">
                Crafting Excellence With Purpose
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                {content.whyChooseUs.values[activeStatement].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 SECTION 3 (Achievements) */}
      <div className="relative py-16 md:py-32 px-4 md:px-6 bg-[#f5f7f6] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="inline-block border px-5 py-2 rounded-full text-sm mb-6">
            ✕ OUR ACHIEVEMENTS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recognitions & Milestones
          </h2>
          <p className="text-gray-500 mb-16">
            Discover our journey and the milestones that define our excellence.
          </p>

          <div className="relative flex flex-col md:flex-row justify-center items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
              className="w-full md:w-[700px] h-[220px] sm:h-[260px] md:h-[380px] object-cover rounded-3xl shadow-lg"
              alt=""
            />
            <div className="md:absolute md:left-[120px] md:top-[40px] w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center p-6">
              <Trophy className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-400">LUXURY AWARDS</p>
              <h3 className="font-semibold mt-2">Trusted Interior <br /> Design Factory</h3>
              <p className="text-gray-400 mt-2">2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-20">
            <div>
              <h3 className="text-4xl font-bold">{content.about.stats.yearsExperience}</h3>
              <p className="text-gray-500">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">{content.about.stats.designStyles}</h3>
              <p className="text-gray-500">Design Styles Covered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">{content.about.stats.projectsCompleted}</h3>
              <p className="text-gray-500">Successful Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 SECTION 4 (TEAM MEMBERS) */}
      <div className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Elite Team
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {allMembers.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-lg transition">
                <div className="relative group overflow-hidden rounded-t-3xl">
                  <img
                    src={item.img}
                    className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover rounded-t-3xl transition duration-500 group-hover:scale-110"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-primary text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-80 mt-1">{item.role}</p>
                  </div>
                  <div className="absolute bottom-0 w-full bg-white/80 rounded-t-[120px] pt-10 pb-6 text-center group-hover:opacity-0 transition duration-300">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.role}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-6 py-5 border-t text-gray-600 text-sm">
                  <span>✉ {item.email}</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
}