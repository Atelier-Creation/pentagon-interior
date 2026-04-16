import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "SMART HOMES",
    title: "Smart Home Technology Reshaping Interior...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    views: 3,
    likes: 0,
  },
  {
    id: 2,
    category: "INTERIOR DESIGN",
    title: "Minimalist Interior Design Remains a Top Trend...",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    views: 2,
    likes: 0,
  },
  {
    id: 3,
    category: "ARCHITECTURE",
    title: "Sustainable Architecture Trends Transform Modern...",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    views: 8,
    likes: 0,
  },
];

export default function BlogSection() {
  return (
<section className="py-28 bg-white">
      <div className="max-w-[1350px] mx-auto px-6 lg:px-10">

        {/* TOP */}
        <div className="flex items-start justify-between mb-16">

  {/* LEFT SIDE */}
  <div>

    {/* BADGE */}
    <div className="flex items-center gap-4 mb-6">

      <span className="w-10 h-[1px] bg-gray-300"></span>

      <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-gray-600 bg-white">
        ✦ OUR BLOG
      </div>

    </div>

    {/* HEADING */}
    <h2 className="text-[64px] leading-[1.1] font-semibold text-[#2a2d2a] tracking-tight max-w-[700px]">
      Latest Articles & Updates
    </h2>

  </div>

  {/* RIGHT SIDE LINK */}
  <div className="mt-16">
    <a
      href="/"
      className="flex items-center gap-2 text-gray-600 hover:text-black transition"
    >
      → <span>View All Post</span>
    </a>
  </div>

</div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
  key={blog.id}
className="group bg-white rounded-[20px] overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] transition duration-500">
  {/* IMAGE */}
  <div className="relative overflow-hidden rounded-t-[20px]">

    <img
      src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
      className="w-full h-[320px] object-cover transition duration-500 ease-in-out group-hover:scale-110 transition duration-500 ease-in-out group-hover:scale-110"
      alt=""
    />

    {/* DATE BADGE */}
    <div className="absolute top-4 right-4 bg-white rounded-full w-[70px] h-[90px] flex flex-col items-center justify-center shadow text-xs">
      <span className="text-gray-500">MAR, 26</span>
      <div className="mt-1 w-10 h-10 border rounded-full flex items-center justify-center text-sm font-semibold">
        16
      </div>
    </div>

  </div>
              {/* CONTENT */}
              <div className="p-7">

                {/* CATEGORY */}
                <p className="text-xs text-gray-500 flex items-center gap-2 mb-3">
                  <span className="flex items-center gap-2 text-gray-500">
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M6 2h7l5 5v15H6z" />
    <path d="M13 2v6h6" />
  </svg>
  {blog.category}
</span>
                </p>

                {/* TITLE */}
               <h3 className="text-[22px] font-semibold text-[#2b2f2b] leading-snug mb-6">
                  {blog.title}
                </h3>

                {/* FOOTER */}
                <div className="flex justify-between items-center text-sm text-gray-500">

                  <span className="flex items-center gap-2">
                    → Read More
                  </span>

                  <div className="flex items-center gap-4">
                   <span className="flex items-center gap-1 text-gray-500">
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
  {blog.views} Views
</span> 
                  <span className="flex items-center gap-1 text-gray-500">
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M14 9V5a3 3 0 00-6 0v4" />
    <path d="M5 15h14l-1.5 6h-11z" />
  </svg>
  {blog.likes} Likes
</span>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}