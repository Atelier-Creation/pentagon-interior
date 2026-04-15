import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
//import bg from "./assets/contact-bg.jpg";
//import plant from "./assets/plant.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
export default function Contact() {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Header />

      {/* 🔹 HERO SECTION */}
     
<div
  className="h-[420px] flex items-center justify-center relative text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* dark green overlay */}
  <div className="absolute inset-0 bg-[#1f3d2b]/80"></div>
  {/*  BOOKING DROPDOWN (LEFT SIDE BELOW HEADER) */}
  <div className="absolute top-28 left-4 md:left-[300px] z-20 group">
  
  {/* BUTTON */}
  <button className="text-white font-medium flex items-center gap-1">
    Booking ▾
  </button>

  {/* DROPDOWN */}
  <div className="absolute left-0 mt-3 w-52 bg-white text-black rounded-xl shadow-lg 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300">

    <div className="px-4 py-3 border-b hover:bg-gray-100 cursor-pointer">
      Events
    </div>

    <div className="px-4 py-3 border-b hover:bg-gray-100 cursor-pointer">
      Booking Page 1
    </div>

    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
      Booking Page 2
    </div>

  </div>

</div>
  <div className="relative text-center">
    <h1 className="text-5xl md:text-6xl font-bold">
      Contact Us
    </h1>
   <p className="mt-4 text-gray-300 text-lg flex justify-center gap-2">
  <Link to="/" className="hover:text-white cursor-pointer">
    Home
  </Link>
  <span>›</span>
  <span>Contact Us</span>
</p>
  </div>
</div>

 {/* 🔹 CONTACT SECTION */}
<div className="relative py-32 px-8 bg-[#2f4638] text-white overflow-hidden">

{/* RIGHT SIDE IMAGE WITH SOFT BLEND */}
<div className="absolute inset-0 pointer-events-none">

  {/* IMAGE (RIGHT SIDE ONLY) */}
  <div
  className="absolute right-0 top-0 h-full w-[60%]"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2070&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* DARK OVERLAY */}
<div className="absolute inset-0 bg-[#2f4638]/60"></div></div>
  {/* GRADIENT BLEND (IMPORTANT 🔥) */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2f4638] via-[#2f4638]/90 to-transparent"></div> */}

  {/* CURVE SHAPE */}
  <div className="absolute right-[10%] md:right-[20%] top-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#3e5445] rounded-full opacity-40 blur-3xl"></div>

</div>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-stretch gap-12 items-center">

    {/* LEFT SIDE */}
    <div>
      <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 opacity-80">
  ✕ GET IN TOUCH
</div>

      <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
        Start Your Conversation
      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 max-w-lg">
        Reach us anytime, let’s design your dream together.
      </p>

      {/* FORM */}
      <div className="bg-white/95 backdrop-blur-md p-12 rounded-3xl shadow-2xl text-black max-w-xl border border-gray-200">

        <div className="grid grid-cols-2 gap-4 mb-4">
         <input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition" placeholder="Name" />
<input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition" placeholder="Email" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition" placeholder="Subject" />
<input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition" placeholder="Phone" />
        </div>

       <textarea
  placeholder="Your message"
  className="w-full p-4 border border-gray-300 rounded-xl h-36 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition"
></textarea>

       <button className="flex items-center gap-3 border border-[#1f3d2b] rounded-full px-6 py-3 group hover:bg-[#1f3d2b] transition">
  
  <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1f3d2b] group-hover:bg-white group-hover:text-[#1f3d2b] transition">
    →
  </span>

  <span className="text-[#1f3d2b] group-hover:text-white font-medium">
    Submit
  </span>

</button>
      </div>
    </div>

    {/* RIGHT SIDE */}
<div className="relative flex flex-col justify-center items-start text-left z-10 h-full md:pl-16">
      

      {/* PLANT */}
      {/* <img
        src="https://pngimg.com/uploads/plant/plant_PNG107.png"
        alt="plant"
        className="w-[240px] mb-6 drop-shadow-xl"
      /> */}

      {/* INFO */}
      <div className="space-y-8 text-white mt-10">

  {/* ADDRESS */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
      <FaMapMarkerAlt />
    </div>
    <div>
      <p className="text-sm text-gray-300">Just Mail Us:</p>
      <p className="font-semibold">Brimmer St, Boston, MA 02108</p>
    </div>
  </div>

  {/* PHONE */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
      <FaPhoneAlt />
    </div>
    <div>
      <p className="text-sm text-gray-300">Need help? Call Us:</p>
      <p className="font-semibold">+1800900122</p>
    </div>
  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
      <FaEnvelope />
    </div>
    <div>
      <p className="text-sm text-gray-300">Just Mail Us:</p>
      <p className="font-semibold">support@gmail.com</p>
    </div>
  </div>

</div>
    </div>
  </div>
</div>

      {/* 🔹 OFFICES SECTION */}
      <div className="py-24 px-6 bg-white">

  {/* TOP BADGE */}
  <div className="flex justify-center mb-6">
    <div className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-sm font-medium text-gray-700 tracking-wide">
      ✕ OFFICES NEAR YOU
    </div>
  </div>

  {/* MAIN HEADING */}
  <h2 className="text-6xl md:text-7xl font-bold text-center mb-16 tracking-tight">
    Discover Our Presence
  </h2>
  {["LA", "BOS", "NY"].map((city, i) => (
    <div
      key={i}
      className="max-w-7xl w-full mx-auto bg-[#f6f7f8] rounded-3xl p-6 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm border border-gray-200"
    >
      
      {/* LEFT TEXT */}
      <div className="w-full md:w-[35%] text-center md:text-left">
        <p className="text-gray-600 leading-relaxed">
          34 Sunset Boulevard, Suite 500 Los Angeles,
          CA 90026 United States.
        </p>

        <button className="mt-6 flex items-center justify-center md:justify-start gap-3 border border-[#1f3d2b] rounded-full px-6 py-3 group hover:bg-[#1f3d2b] transition mx-auto md:mx-0">
          
          <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1f3d2b] group-hover:bg-white group-hover:text-[#1f3d2b] transition">
            →
          </span>

          <span className="text-[#1f3d2b] group-hover:text-white font-medium">
            View On Map
          </span>

        </button>
      </div>

      {/* CENTER IMAGE */}
      <div className="relative w-full md:w-[420px] h-[240px] rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-full object-cover"
        />

        {/* CITY BADGE */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-semibold shadow">
          {city}
        </div>
      </div>

      {/* RIGHT CONTACT */}
      <div className="w-full md:w-1/3 space-y-6 flex flex-col items-center md:items-start">

        {/* PHONE */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-600">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-sm text-gray-500">Need help? Call Us:</p>
            <p className="font-semibold">+1800900122</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-600">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-sm text-gray-500">Just Mail Us:</p>
            <p className="font-semibold">support@gmail.com</p>
          </div>
        </div>

      </div>

    </div>
  ))}
</div>
{/* 
<div className="relative bg-[#2f4638] text-white overflow-hidden pt-24 pb-16">

  


  <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">

    
    <div className="space-y-10">

      <div>
        <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
        <p className="text-gray-300">
          Send Mail us at{" "}
          <span className="underline font-semibold">
            info@decoria.com
          </span>
        </p>
      </div>

   
      <div>
        <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
        <p className="text-gray-300 mb-4">
          Get exclusive offers and news delivered monthly.
        </p>

        <div className="flex items-center bg-white/10 rounded-xl px-4 py-3">
          <FaEnvelope className="text-gray-300 mr-3" />
          <input
            placeholder="Your email address"
            className="bg-transparent outline-none flex-1 text-white"
          />
          <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
            ➤
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-full flex items-center gap-2">
          Instagram
        </button>
        <button className="px-4 py-2 border rounded-full flex items-center gap-2">
          Facebook
        </button>
        <button className="px-4 py-2 border rounded-full flex items-center gap-2">
          TwitterX
        </button>
      </div>

    </div>

   
    <div>
      <h3 className="text-xl font-semibold mb-6">Essentials</h3>
      <ul className="space-y-3 text-gray-300">
        <li>Our Story</li>
        <li>How We Work</li>
        <li>Services & Solutions</li>
        <li>Case Studies</li>
        <li>Client Testimonials</li>
        <li>FAQs & Help</li>
        <li>Blog & Insights</li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
      <ul className="space-y-3 text-gray-300 mb-10">
        <li>Explore Our Work</li>
        <li>Start Your Project</li>
        <li>Meet the Team</li>
        <li>Read Our Insights</li>
        <li>Request a Quote</li>
        <li>Let’s Connect</li>
      </ul>

      <div className="space-y-4">
        <p className="text-gray-400">Just Mail Us:</p>
        <p className="font-semibold">
          Brimmer St, Boston, MA 02108
        </p>

        <p className="text-gray-400 mt-4">Phone</p>
        <p className="font-semibold">
          [+44] 987 65 4321 & 31
        </p>
      </div>
    </div>

  </div>
<div className="relative mt-20 overflow-hidden py-2">

  <div className="absolute inset-4 big-dash-box pointer-events-none"></div>


  <div className="absolute top-3 left-3 w-3 h-3 border border-white/30"></div>
  <div className="absolute top-3 right-3 w-3 h-3 border border-white/30"></div>
  <div className="absolute bottom-3 left-3 w-3 h-3 border border-white/30"></div>
  <div className="absolute bottom-3 right-3 w-3 h-3 border border-white/30"></div>

 
  <div className="whitespace-nowrap animate-marquee 
      text-[140px] md:text-[180px] 
      font-bold tracking-wide 
      text-transparent stroke-text opacity-40">

    Reliable ✦ Quality Assured ✦ Budget Friendly ✦ Reliable ✦

  </div>

</div>
 
  <div className="relative z-10 text-center mt-16 text-gray-300 border-t border-white/10 pt-6">
    Copyrights© 2026 Decoria. All rights reserved.
  </div>

</div> */}
         <Footer />
   
    </>
  );
}