import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Trophy, Building2, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function About() {
  const [showCircle, setShowCircle] = useState(true);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
const [activeItem, setActiveItem] = useState(null);
  const allMembers = [
    {
      name: "Michael Smith",
      role: "Construction Manager",
      email: "michael@decoria.com",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    },
    {
      name: "Sophia Williams",
      role: "Architect Engineer",
      email: "sophia@decoria.com",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    },
    {
      name: "Daniel Johnson",
      role: "Site Supervisor",
      email: "daniel@decoria.com",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      name: "Robert Downey",
      role: "Construction Engineer",
      email: "robert@decoria.com",
      img: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4",
    },
    {
      name: "Emma Johnson",
      role: "Site Engineer",
      email: "emma@decoria.com",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    },
  ];
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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark green overlay */}
        <div className="absolute inset-0 bg-primary-dark/80"></div>

        <div className="relative text-center">
          <h1 className="text-3xl md:text-6xl font-bold">
            About Us
          </h1>
          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white cursor-pointer">
              Home
            </Link>
            <span>›</span>
            <span>About Us</span>
          </p>
        </div>
      </div>

      {/* 🔹 SECTION 1 (Image + Text) */}

      <div className="py-16 md:py-28 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE */}
          {/* LEFT SIDE (FIXED PERFECT ALIGNMENT) */}
          <div className="relative w-full h-[400px] md:h-[560px]">

            {/* BIG IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1600585152915-d208bec867a1"
className="absolute top-0 left-0 w-[80%] sm:w-[70%] md:w-[370px] h-[220px] sm:h-[260px] md:h-[420px] object-cover rounded-[40px]"            />

            {/* SMALL IMAGE (OVERLAP RIGHT) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
className="absolute top-[120px] sm:top-[150px] md:top-[200px] right-0 md:left-[260px] w-[70%] sm:w-[60%] md:w-[350px] h-[160px] sm:h-[200px] md:h-[260px] object-cover rounded-3xl shadow-xl"            />

            {/* CARD (BOTTOM LEFT CENTER) */}
            <div className="absolute left-[5%] md:left-[120px] bottom-[10px] md:bottom-[40px] bg-primary text-white px-5 py-4 md:px-8 md:py-6 rounded-2xl shadow-lg z-10">
              <h3 className="text-3xl md:text-4xl font-bold leading-none">20+</h3>
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
                  <span className="font-semibold text-black">Since 2005</span>, we’ve been crafting innovative interiors and architecture that balance...
                </p>
                <button className="mt-2 flex items-center gap-2 text-sm sm:text-base font-medium text-black">
                  → Read More
                </button>
              </div>

            </div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-xs font-medium tracking-wider mb-6">
              ✕ ABOUT US
            </div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 text-gray-900">
              Innovating Interiors,<br />Inspiring Lives
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
              We are a creative interior and architecture agency, dedicated to designing functional, stylish, and timeless spaces.
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

            {/* FOOT */}
            <p className="text-gray-400 mt-6">
              Discover our story before you decide.
            </p>

            <button className="mt-4 flex items-center gap-2 text-black font-medium">
              → More About Us
            </button>

          </div>

        </div>
      </div>
      {/* 🔹 SECTION 2 (Green + Circle Design) */}

      <div
        className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888941259-7a974dfb9a51?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK GREEN OVERLAY */}
        <div className="absolute inset-0 bg-primary/90"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">

            {/* BADGE */}
            <p className="border border-white/40 px-5 py-2 inline-block rounded-full mb-6 text-sm">
              ✕ OUR STATEMENT
            </p>

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Principles <br className="hidden md:block" />
              Behind Everything <br className="hidden md:block" />
              We Do
            </h2>

            {/* DESCRIPTION */}
            <p className="text-white/70 mb-10">
              We stay true to our values, honoring commitments while striving for meaningful growth.
            </p>

            {/* LIST */}
            <div className="space-y-4 mb-10">

              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">Mission Statement</span>
                <span>→</span>
              </div>

              <div className="flex justify-between border-b border-white/20 pb-3 text-white/70">
                <span>02 . Vision Statement</span>
              </div>

              <div className="flex justify-between border-b border-white/20 pb-3 text-white/70">
                <span>03 . Core Values</span>
              </div>

            </div>

            {/* BUTTON */}
            <button className="border border-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              Get Started →
            </button>

          </div>

          {/* RIGHT SIDE (BIG CIRCLE) */}

          <div
            onMouseEnter={() => setShowCircle(false)}
            onMouseLeave={() => setShowCircle(true)}
            className={`w-full md:w-[420px] h-[350px] md:h-[420px] bg-white rounded-full flex flex-col items-center justify-center text-center p-10 shadow-xl transition-all duration-300 mt-12 md:mt-0 ${showCircle ? "opacity-100 scale-100" : "opacity-100 md:opacity-0 md:scale-90"
              }`}
          >
            <Trophy className="w-8 h-8 text-gray-400 mb-2" />

            <p className="text-gray-500">Clean & Minimal</p>

            <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4">
              Contemporary Design
            </h3>

            <p className="text-gray-400 text-sm">
              Elegant, functional spaces with clean lines and neutral palettes.
            </p>
          </div>
        </div>
      </div>
      {/* 🔹 SECTION 3 (Achievements) */}

      <div className="relative py-16 md:py-32 px-4 md:px-6 bg-[#f5f7f6] overflow-hidden">

        {/* LIGHT BACKGROUND IMAGE (PENCIL STYLE) */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          {/* BADGE */}
          <p className="inline-block border px-5 py-2 rounded-full text-sm mb-6">
            ✕ OUR ACHIEVEMENTS
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recognitions & Milestones
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-500 mb-16">
            Discover a design style that reflects your personality and transforms
          </p>

          {/* MAIN IMAGE */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-8">

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              className="w-full md:w-[700px] h-[220px] sm:h-[260px] md:h-[380px] object-cover rounded-3xl shadow-lg"
            />

            {/* LEFT CIRCLE */}
            <div className="md:absolute md:left-[120px] md:top-[40px] w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center p-6">
              <Trophy className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-400">ND AWARDS</p>
              <h3 className="font-semibold mt-2">Trusted Interior <br /> Design Firm</h3>
              <p className="text-gray-400 mt-2">2026</p>
            </div>

            {/* RIGHT CIRCLE */}
            <div className="md:absolute md:right-[120px] md:top-[40px] w-[240px] h-[240px] bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center p-6">
              <Trophy className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-400">ND AWARDS</p>
              <h3 className="font-semibold mt-2">Trusted Interior <br /> Design Firm</h3>
              <p className="text-gray-400 mt-2">2026</p>
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-20">

            <div>
              <h3 className="text-4xl font-bold">13+</h3>
              <p className="text-gray-500">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">20+</h3>
              <p className="text-gray-500">Design Styles Covered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">1500+</h3>
              <p className="text-gray-500">Successful Projects</p>
            </div>

          </div>

        </div>
      </div>
      {/* 🔹 SECTION 4 (EXACT LIKE IMAGE 1) */}
      {/* 🔹 SECTION 4 (SWIPER SLIDER) */}
<div className="py-16 md:py-24 px-4 md:px-6 bg-white">

  {/* TITLE */}
  <div className="max-w-7xl mx-auto mb-14">
    <h2 className="text-3xl md:text-5xl font-bold">
      Our Recent Creations
    </h2>
  </div>

  {/* SWIPER */}
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
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">

          {/* IMAGE */}
          <div className="relative group overflow-hidden rounded-t-3xl">
           <img
  src={item.img}
  className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover rounded-t-3xl transition duration-500 group-hover:scale-110"
/>

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-primary text-white flex flex-col items-center justify-center 
              opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm opacity-80 mt-1">{item.role}</p>

              <div className="flex gap-4 mt-4 text-lg">
                <span>f</span>
                <span>📸</span>
                <span>𝕏</span>
              </div>
            </div>

            {/* CURVE */}
            <div className="absolute bottom-0 w-full bg-white/80 rounded-t-[120px] pt-10 pb-6 text-center 
              group-hover:opacity-0 transition duration-300">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.role}</p>
            </div>
          </div>

          {/* EMAIL */}
<div className="flex justify-between items-center px-6 py-5 border-t text-gray-600 text-sm">            <span>✉ {item.email}</span>
            <span>→</span>
          </div>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* FOOT */}
  <div className="text-center mt-12">
    <button className="flex items-center gap-2 mx-auto text-black font-medium">
      → Meet All Members
    </button>
  </div>

</div>
      <Footer />
    </>
  );
}