import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative py-32 px-8 bg-[#2f4638] text-white overflow-hidden">
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
          <div className="absolute inset-0 bg-[#2f4638]/60"></div>
        </div>
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
          <div className="bg-white/95 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-2xl text-black max-w-xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition"
                placeholder="Name"
              />
              <input
                className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition"
                placeholder="Email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition"
                placeholder="Subject"
              />
              <input
                className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition"
                placeholder="Phone"
              />
            </div>

            <textarea
              placeholder="Your message"
              className="w-full p-4 border border-gray-300 rounded-xl h-36 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] transition"
            ></textarea>

            <button className="flex items-center justify-center md:justify-start gap-3 border border-[#1f3d2b] rounded-full px-6 py-3 group hover:bg-[#1f3d2b] transition w-full md:w-auto">
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
    </section>
  );
};

export default ContactUs;
