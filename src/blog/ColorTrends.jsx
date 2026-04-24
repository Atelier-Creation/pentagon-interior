import Header from "../sections/homePage/Header";
import Footer from "../sections/homePage/Footer";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Eye,
  ThumbsUp,
  ChevronRight,
  CheckCircle2,
  Tag,
  Share2,
  ArrowUpRight,
  ArrowRight,
  Send,
  MessageCircle,
  Mail,
  Globe,
  Link as LinkIcon
} from "lucide-react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import content from "../data/content";

export default function ColorTrends() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const sidebar = content.blogSidebar;
  const currentPost = content.blogs.find(b => b.path === "/blog/colors") || content.blogs[5];

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[280px] md:h-[420px] flex items-center justify-center text-white relative px-4"
        style={{
          backgroundImage: `url(${currentPost.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center max-w-4xl px-4">
          <p className="flex justify-center items-center gap-2 text-sm mb-4 opacity-90">
            <Calendar size={16} /> {currentPost.date.month} {currentPost.date.day}, 2026
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
            {currentPost.title}
          </h1>

          <div className="flex justify-center gap-6 mt-4 text-sm opacity-80">
            <span className="flex items-center gap-1">
              <User size={16} /> {content.about.team[0].name}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={16} /> {currentPost.views} Views
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp size={16} /> {currentPost.likes} Likes
            </span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[#eef2ef] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center text-center text-gray-600 text-sm gap-3">
          <Link to="/" className="hover:text-[#8c6d5a]">Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-[#8c6d5a]">{currentPost.category}</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800">{currentPost.title}</span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <img
            src={`${currentPost.image}?auto=format&fit=crop&w=1200&q=80`}
            className="rounded-xl w-full h-[200px] sm:h-[300px] md:h-auto object-cover"
            alt=""
          />

          <p className="text-gray-600 leading-7 mb-6 mt-10">
            {currentPost.title} are all about creating a sense of calm, connection, and personality in your home. From earthy neutrals to vibrant jewel tones, here's what's trending for the coming year.
          </p>

          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#8c6d5a] rounded-sm"></span>
            Earthy Neutrals
          </h2>
          <p className="text-gray-600 mb-4 leading-7">
            Warm beiges, soft terracottas, and mossy greens are leading the way, bringing a touch of nature indoors.
          </p>
          <ul className="space-y-3 text-gray-600 mb-8">
            {["Use warm beige for a cozy, inviting atmosphere.", "Incorporate terracotta accents for a rustic feel.", "Add mossy green for a refreshing, natural touch."].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-1 text-[#8c6d5a]" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#8c6d5a] rounded-sm"></span>
            Bold Jewel Tones
          </h2>
          <p className="text-gray-600 mb-4 leading-7">
            Deep emeralds, sapphire blues, and rich amethysts are making a statement, adding drama and luxury to modern interiors.
          </p>
          <ul className="space-y-3 text-gray-600 mb-8">
            {["Use emerald green for a sophisticated look.", "Add sapphire blue for a sense of calm and depth.", "Incorporate amethyst for a touch of regal elegance."].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-1 text-[#8c6d5a]" />
                {item}
              </li>
            ))}
          </ul> 

          <div className="relative mb-10 rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 bg-[#8b6b55]"></div>
            <div className="relative flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-10 text-center sm:text-left text-white">
              <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-4xl">❝</div>
              <div>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  Color has the power to transform a space and influence our emotions profoundly.
                </p>
                <p className="mt-3 text-white/80 underline cursor-pointer">{content.about.team[0].name}</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#8c6d5a] rounded-sm"></span>
            Technicolor Pastels
          </h2>
          <p className="text-gray-600 mb-6 leading-7">
            Soft, vibrant pastels are being used in unexpected ways, bringing a sense of playfulness and modernity to home design.
          </p>
          <div className="space-y-6 mb-10">
            {[
              { title: "Mint Green", desc: "A fresh and modern pastel that pairs perfectly with neutrals." },
              { title: "Dusty Rose", desc: "A sophisticated and romantic shade for bedrooms and living areas." },
              { title: "Sky Blue", desc: "A calming and airy color that expands small spaces." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <Sparkles size={18} className="text-[#8c6d5a]" />
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="w-4 h-4 bg-[#8c6d5a] rounded-sm"></span>
            Final Thoughts
          </h2>
          <p className="text-gray-600 mb-6 leading-7">
            Choosing the right color palette is about reflecting your personal style and creating a space where you feel truly at home.
          </p>
          <ul className="space-y-4 text-gray-600 mb-10">
            {["Don't be afraid to experiment with bold colors in small doses.", "Consider the psychological impact of colors when designing each room.", "Use color to define different zones in an open-plan living space."].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#8c6d5a] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-10 mt-12 space-y-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
                  <Tag size={18} className="text-gray-400" /> Tags
                </h4>
                <div className="flex flex-wrap gap-4">
                  {sidebar.popularTags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-[#8c6d5a] hover:text-white hover:border-[#8c6d5a] transition cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:text-right">
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-gray-800 md:justify-end">
                  <Tag size={18} strokeWidth={1.5} className="text-gray-400" /> Posted In
                </h4>
                <span className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700">
                  {currentPost.category}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col items-center justify-center gap-4 text-center">
              <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                <Share2 size={18} strokeWidth={1.5} className="text-gray-400" /> Share
              </h4>
              <div className="flex gap-4">
                {[Globe, Send, MessageCircle, LinkIcon, Mail].map((Icon, i) => (
                  <div key={i} className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#8c6d5a] hover:border-[#8c6d5a] transition duration-300 cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-8">
            <div className="flex items-start gap-5">
              <img src={content.about.team[0].img} alt="author" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{content.about.team[0].name}</h4>
                <p className="text-gray-500 mt-1 text-sm">{content.about.team[0].role}</p>
                <div className="mt-3">
                  <Link to="/blog" className="text-gray-900 font-medium flex items-center gap-2 hover:text-[#8c6d5a] transition">
                    Read All Post <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-[#f4f6f4] p-5 sm:p-6 md:p-8 rounded-3xl space-y-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Search</h3>
            <input placeholder="Search for posts..." className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none" />
          </div>

          <div className="text-center border-t border-gray-200 pt-8">
            <img src={content.about.team[0].img} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" alt="" />
            <h4 className="font-semibold text-lg text-gray-900">{content.about.team[0].name}</h4>
            <p className="text-sm text-gray-500 mt-2 mb-4">{content.about.team[0].role}</p>
            <div className="flex justify-center gap-3 mb-5">
              {[Globe, Send, MessageCircle, LinkIcon, Mail].map((Icon, i) => (
                <div key={i} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#8c6d5a] hover:border-[#8c6d5a] transition duration-300 cursor-pointer">
                  <Icon size={16} />
                </div>
              ))}
            </div>
            <Link to="/blog" className="flex items-center justify-center gap-3 border border-gray-300 rounded-full px-6 py-2 mx-auto">
              <span>→</span>
              <span className="bg-[#8c6d5a] text-white px-4 py-2 rounded-full text-sm">Read All Post</span>
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              {sidebar.categories.map((cat, i) => (
                <li key={i} className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> {cat.name} {cat.count}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold mb-6">Popular Posts</h3>
            <div className="space-y-6">
              {sidebar.popularPosts.map((post, i) => (
                <div key={post.id} className="pb-5 border-b border-gray-200 last:border-none relative" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
                  <div className="flex items-center gap-2 text-xs text-gray-500 uppercase mb-2">
                    <Sparkles size={14} className="text-gray-400" />
                    <span>{post.category}</span>
                  </div>
                  <h4 className="text-[15px] font-semibold text-gray-900 leading-snug hover:text-[#8c6d5a] transition cursor-pointer">
                    {post.title}
                  </h4>
                  {hoveredIndex === i && (
                    <div className="fixed z-[999] pointer-events-none" style={{ left: mousePos.x - 60, top: mousePos.y - 60 }}>
                      <img src={post.image} className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white" alt="" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3">
              {sidebar.popularTags.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:bg-[#8c6d5a] hover:text-white hover:border-[#8c6d5a] transition duration-300 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}