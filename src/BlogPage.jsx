import Header from "./sections/homePage/Header";
import Footer from "./sections/homePage/Footer";
import { Link } from "react-router-dom";
import { Eye, Heart, ChevronRight, ArrowRight } from "lucide-react";
import content from "./data/content";

export default function BlogPage() {
  const blogs = content.blogs;

  return (
    <>
      <Header />

      {/* 🔹 HERO SECTION */}
      <div
        className="h-[420px] flex items-center justify-center relative text-white"
        style={{
          backgroundImage: `url('${content.blogs[0].image}?q=80&w=2070')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>

        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our Blogs
          </h1>

          <p className="mt-4 text-white/70 text-lg flex justify-center items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={16} />
            <span>Our Blogs</span>
          </p>
        </div>
      </div>

      {/* 🔹 BLOG GRID  */}
      <div className="py-24 bg-[#f5f7f6]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <Link key={blog.id} to={blog.path}>
                <div
                  className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100/80 
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 
                  transition-all duration-500"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      alt={blog.title}
                    />

                    {/* CATEGORY */}
                    <div className="absolute top-5 left-5">
                      <span className="bg-white/90 backdrop-blur-md text-[#8c6d5a] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                        {blog.category}
                      </span>
                    </div>

                    {/* DATE */}
                    <div className="absolute bottom-5 right-5 bg-[#8c6d5a] text-white w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                      <span className="text-[10px] font-bold uppercase opacity-80">{blog.date.month}</span>
                      <span className="text-xl font-bold leading-none">{blog.date.day}</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    {/* STATS */}
                    <div className="flex items-center gap-6 mb-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Eye size={14} className="text-[#8c6d5a]" /> {blog.views} Views
                      </span>
                      <span className="flex items-center gap-2">
                        <Heart size={14} className="text-[#8c6d5a]" /> {blog.likes}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-[#2a2d2a] leading-tight mb-8 
                      group-hover:text-[#8c6d5a] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* READ MORE */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                      <button className="flex items-center gap-3 text-[#8c6d5a] text-[11px] font-bold uppercase tracking-[0.2em] group/link">
                        <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center 
                        transition-all group-hover/link:bg-[#8c6d5a] group-hover/link:text-white group-hover/link:border-[#8c6d5a]">
                          <ArrowRight size={14} />
                        </span>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
      <Footer />
    </>
  );
}