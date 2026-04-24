import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import content from "./data/content";

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
          backgroundImage: `url('${content.contact.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/80"></div>
        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-white/70 text-lg flex justify-center gap-2">
            <Link to="/" className="hover:text-white cursor-pointer">
              Home
            </Link>
            <span>›</span>
            <span>Contact Us</span>
          </p>
        </div>
      </div>

      {/* 🔹 CONTACT SECTION */}
      <div className="relative py-32 px-8 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute right-0 top-0 h-full w-[60%]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541888941259-7a974dfb9a51?q=80&w=2070&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-primary/60"></div>
          </div>
          <div className="absolute right-[10%] md:right-[20%] top-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-light rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-stretch gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 opacity-80">
              ✕ GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
              Start Your Conversation
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-lg">
              Reach us anytime, let’s design your dream together.
            </p>

            {/* FORM */}
            <div className="bg-white/95 backdrop-blur-md p-12 rounded-3xl shadow-2xl text-black max-w-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="Name" />
                <input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="Email" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="Subject" />
                <input className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="Phone" />
              </div>
              <textarea
                placeholder="Your message"
                className="w-full p-4 border border-gray-300 rounded-xl h-36 mb-4 focus:outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
              <button className="flex items-center gap-3 border border-primary rounded-full px-6 py-3 group hover:bg-primary transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-primary group-hover:bg-white group-hover:text-primary transition">
                  →
                </span>
                <span className="text-primary group-hover:text-white font-medium">
                  Submit
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-start text-left z-10 h-full md:pl-16">
            <div className="space-y-8 text-white mt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-white/70">Visit Us:</p>
                  <p className="font-semibold">{content.contact.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-white/70">Need help? Call Us:</p>
                  <p className="font-semibold">{content.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email Us:</p>
                  <p className="font-semibold">{content.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 OFFICES SECTION */}
      <div className="py-24 px-6 bg-white">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-sm font-medium text-gray-700 tracking-wide">
            ✕ OFFICES NEAR YOU
          </div>
        </div>
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-16 tracking-tight">
          Discover Our Presence
        </h2>
        {content.contact.offices.map((office, i) => (
          <div
            key={i}
            className="max-w-7xl w-full mx-auto bg-[#f6f7f8] rounded-3xl p-6 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm border border-gray-200"
          >
            <div className="w-full md:w-[35%] text-center md:text-left">
              <p className="text-gray-600 leading-relaxed">
                {office.address}
              </p>
              <button className="mt-6 flex items-center justify-center md:justify-start gap-3 border border-primary rounded-full px-6 py-3 group hover:bg-primary transition mx-auto md:mx-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-primary group-hover:bg-white group-hover:text-primary transition">
                  →
                </span>
                <span className="text-primary group-hover:text-white font-medium">
                  View On Map
                </span>
              </button>
            </div>
            <div className="relative w-full md:w-[420px] h-[240px] rounded-2xl overflow-hidden shadow-md">
              <img
                src={office.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-semibold shadow">
                {office.city.substring(0, 3).toUpperCase()}
              </div>
            </div>
            <div className="w-full md:w-1/3 space-y-6 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-600">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us:</p>
                  <p className="font-semibold">{office.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-600">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us:</p>
                  <p className="font-semibold">{office.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}