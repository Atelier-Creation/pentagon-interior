import React from "react";
import { Link } from "react-router-dom";
import content from "../../data/content";

export default function BlogSection() {
  const blogs = content.blogs;

  return (
    <section className="py-5 md:py-24 bg-white">
      <div className="max-w-[1350px] mx-auto px-6 lg:px-10">
        {/* TOP */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12 md:mb-16">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-gray-300"></span>
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[2px] text-gray-600 bg-white shadow-sm">
                ✦ OUR BLOG
              </div>
            </div>
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-[1.1] font-semibold text-[#2a2d2a] tracking-tight max-w-[700px]">
              Latest Articles & Updates
            </h2>
          </div>

          {/* RIGHT SIDE LINK */}
          <div className="md:mt-16">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px] hover:text-text-main transition group"
            >
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">→</span>
              <span>View All Posts</span>
            </Link>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id} 
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  alt={blog.title}
                  loading="lazy"
                />
                
                {/* FLOATING CATEGORY */}
                <div className="absolute top-5 left-5">
                   <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                     {blog.category}
                   </span>
                </div>

                {/* DATE OVERLAY */}
                <div className="absolute bottom-5 right-5 bg-primary text-white w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                  <span className="text-[10px] font-bold uppercase tracking-tighter opacity-80">{blog.date.month}</span>
                  <span className="text-xl font-bold leading-none">{blog.date.day}</span>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-8">
                {/* STATS ABOVE TITLE */}
                <div className="flex items-center gap-6 mb-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    {blog.views} Views
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    {blog.likes}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-text-main leading-tight mb-8 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* BOTTOM LINK */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link to={blog.path} className="flex items-center gap-3 text-primary text-[11px] font-bold uppercase tracking-[0.2em] group/link">
                    <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all group-hover/link:bg-primary group-hover/link:text-white group-hover/link:border-primary">
                      →
                    </span>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}