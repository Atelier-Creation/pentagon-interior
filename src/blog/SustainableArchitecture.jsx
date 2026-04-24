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
  ArrowRight
} from "lucide-react";
import {
  Send,
  MessageCircle,
  Mail,
  Globe,
  Link as LinkIcon
} from "lucide-react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function SustainableArchitecture() {

 //const [hoveredIndex, setHoveredIndex] = useState(null);
 const [hoveredIndex, setHoveredIndex] = useState(null);
 const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
 const posts = [
   {
     id: 1,
     category: "LIFESTYLE & TRENDS",
     title: "5 Simple Ways to Upgrade Your Living Space",
     image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
   },
   {
     id: 2,
     category: "INDUSTRY NEWS",
     title: "Refresh Your Interiors with 2025 Color Trends",
     image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9"
   },
   {
     id: 3,
     category: "LIFESTYLE & TRENDS",
     title: "Eco-Friendly Living: Small Changes, Big Impact",
     image: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
   },
   {
     id: 4,
     category: "MODERN LIVING",
     title: "Innovative Lighting Ideas for Every Home",
     image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
   },
   {
     id: 5,
     category: "ARCHITECTURE",
     title: "Sustainable Architecture Trends Transform Modern Cities in 2026",
     image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
   }
 ];
 
 
 return (
     <>
       <Header />
 
       {/* HERO */}
       <section
         className="h-[280px] md:h-[420px] flex items-center justify-center text-white relative px-4"
         style={{
           backgroundImage:
             "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6)",
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       >
         <div className="absolute inset-0 bg-black/60"></div>
 
         <div className="relative text-center max-w-4xl px-4">
           <p className="flex justify-center items-center gap-2 text-sm mb-4 opacity-90">
             <Calendar size={16} /> March 16, 2026
           </p>
 
<h1 className="text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-6xl font-bold leading-tight">
                Sustainable Architecture Trends Transform Modern Cities In 2026
          </h1>
 
           <div className="flex justify-center gap-6 mt-4 text-sm opacity-80">
             <span className="flex items-center gap-1">
               <User size={16} /> Robert Downey
             </span>
             <span className="flex items-center gap-1">
               <Eye size={16} /> 12 Views
             </span>
             <span className="flex items-center gap-1">
               <ThumbsUp size={16} /> 2 Likes
             </span>
           </div>
         </div>
       </section>
 
       {/* BREADCRUMB */}
       <div className="bg-[#eef2ef] py-5">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center text-center text-gray-600 text-sm gap-3">
           <Link to="/" className="hover:text-[#8c6d5a]">Home</Link>
           <ChevronRight size={14} />
           <Link to="/blog" className="hover:text-[#8c6d5a]">Interior Design</Link>
           <ChevronRight size={14} />
           <span className="text-gray-800">
             Minimalist Interior Design
           </span>
         </div>
       </div>
       {/* ================= CONTENT ================= */}
 <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 gap-10 items-start">
                     {/* LEFT CONTENT */}
         <div className="lg:col-span-2">
  <img
  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
   className="rounded-xl w-full"
 />
 
           <p className="text-gray-600 leading-7 mb-6">
            Transforming your home doesn’t always need a complete renovation. With a few smart changes, you can refresh your living space, make it more functional, and reflect your personal style. Here
 are five simple yet impactful ways to start today.
           </p>
 
           {/* SECTION */}
           <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
   <span className="w-3 h-3 bg-[#8c6d5a] rounded-sm"></span>
   Refresh with Color
 </h2>
 
 <p className="text-gray-600 mb-4 leading-7">
   Upgrade your home effortlessly with simple ideas—add color, light, greenery, and smart
   organization to transform your living space into something stylish and refreshing.
 </p>
 
 <ul className="space-y-3 text-gray-600 mb-8">
   {[
     "Try a feature wall with bold paint.",
     "Add colorful cushions, rugs, or curtains.",
     "Use pastel tones for a calming effect."
   ].map((item, i) => (
     <li key={i} className="flex items-start gap-3">
       <CheckCircle2 size={16} className="mt-1 text-[#8c6d5a]" />
       {item}
     </li>
   ))}
 </ul>
 
           <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
   <span className="w-3 h-3 bg-[#8c6d5a] rounded-sm"></span>
   Maximize Natural Light
 </h2>
 
 <p className="text-gray-600 mb-4 leading-7">
   Brighten your home by embracing sunlight—use larger windows, light curtains, and mirrors
   to create an airy, open, and inviting atmosphere naturally.
 </p>
 
 <ul className="space-y-3 text-gray-600 mb-8">
   {[
     "Replace heavy curtains with sheer drapes.",
     "Use mirrors to reflect natural light.",
     "Place light-toned furniture near windows."
   ].map((item, i) => (
     <li key={i} className="flex items-start gap-3">
       <CheckCircle2 size={16} className="mt-1 text-[#8c6d5a]" />
       {item}
     </li>
   ))}
 </ul> 
           {/* QUOTE - UPDATED DESIGN */}
 <div className="relative mb-10 rounded-[40px] overflow-hidden">
 
   {/* Background Image */}
   <img
     src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
     className="absolute inset-0 w-full h-full object-cover"
   />
 
   {/* Overlay Gradient */}
   <div className="absolute inset-0  bg-[#8b6b55]"></div>
 
   {/* Content */}
   <div className="relative flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 md:p-10 text-center sm:text-left text-white">
 
     {/* Quote Icon Circle */}
     <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/40 flex items-center justify-center text-4xl">
       ❝
     </div>
 
     {/* Text */}
     <div>
       <p className="text-xl md:text-2xl font-semibold leading-relaxed">
         Natural light breathes life into spaces, creating warmth, energy, and timeless beauty.
       </p>
       <p className="mt-3 text-white/80 underline cursor-pointer">
         Silvester Scott
       </p>
     </div>
 
   </div>
 </div>
           {/* DECLUTTER SECTION - FIXED */}
 <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
   <span className="w-3 h-3 bg-[#8c6d5a] rounded-sm"></span>
   Declutter & Organize
 </h2>
 
 <p className="text-gray-600 mb-6 leading-7">
   Streamline your living space by removing excess, organizing essentials, and creating a
   balanced environment that promotes clarity, comfort, and peace of mind.
 </p>
 
 <div className="space-y-6 mb-10">
 
   {/* ITEM 1 */}
   <div className="flex gap-4">
    <Sparkles size={18} className="text-[#8c6d5a]" />
     <div>
       <h4 className="font-semibold text-lg">Declutter</h4>
       <p className="text-gray-600 text-sm">
         Clear out unused items to create fresh, welcoming space.
       </p>
     </div>
   </div>
 
   {/* ITEM 2 */}
   <div className="flex gap-4">
    <Sparkles size={18} className="text-[#8c6d5a]" />
     <div>
       <h4 className="font-semibold text-lg">Organize</h4>
       <p className="text-gray-600 text-sm">
         Arrange and store essentials smartly for easy access.
       </p>
     </div>
   </div>
 
   {/* ITEM 3 */}
   <div className="flex gap-4">
    <Sparkles size={18} className="text-[#8c6d5a] " />
     <div>
       <h4 className="font-semibold text-lg">Maintain</h4>
       <p className="text-gray-600 text-sm">
         Build lasting habits to keep everything consistently neat and tidy.
       </p>
     </div>
   </div>
 
 </div>
 {/* FINAL THOUGHTS - FIXED */}
 <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
   <span className="w-4 h-4 bg-[#8c6d5a] rounded-sm"></span>
   Final Thoughts
 </h2>
 
 <p className="text-gray-600 mb-6 leading-7">
   A beautiful living space doesn’t always require big investments—it’s about smart,
   simple changes that bring lasting comfort.
 </p>
 
 <ul className="space-y-4 text-gray-600 mb-10">
   {[
     "Even the tiniest improvements can transform how your home feels daily.",
     "Maintaining habits ensures your living space always stays welcoming and organized.",
     "A clean, clutter-free home allows peace of mind to flourish."
   ].map((item, i) => (
     <li key={i} className="flex items-start gap-3">
       <CheckCircle2 size={16} className="text-[#8c6d5a] mt-1" />
       <span>{item}</span>
     </li>
   ))}
 </ul>
 
 {/* ================= TAGS + SHARE SECTION ================= */}
 <div className="border-t border-gray-200 pt-10 mt-12 space-y-10">
 
   {/* TAGS + CATEGORY */}
   <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
 
     {/* TAGS */}
     <div>
       <h4 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
         <Tag size={18} className="text-gray-400" />
         Tags
       </h4>
 
       <div className="flex flex-wrap gap-4">
         {["Furniture", "Home Decor", "Lighting"].map((tag) => (
           <span
             key={tag}
             className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700
            hover:bg-[#8c6d5a] hover:text-white hover:border-[#8c6d5a] transition"
           >
             #{tag}
           </span>
         ))}
       </div>
     </div>
 
     {/* POSTED IN */}
     <div className="md:text-right">
       <h4 className="font-semibold mb-4 flex items-center gap-2 text-gray-800 md:justify-end">
         <Tag size={18} strokeWidth={1.5} className="text-gray-400" />
         Posted In
       </h4>
 
       <span className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700">
         Modern Living
       </span>
     </div>
 
   </div>
 
   {/* SHARE */}
 <div className="border-t border-gray-200 pt-8 flex flex-col items-center justify-center gap-4 text-center">
 
 
     <h4 className="font-semibold flex items-center gap-2 text-gray-800">
   
 
 <Share2 size={18} strokeWidth={1.5} className="text-gray-400" />
       Share
     </h4>
 
     {/* ICON BUTTONS */}
     <div className="flex gap-4">
   {[Globe, Send, MessageCircle, LinkIcon, Mail].map(
     (Icon, i) => (
       <div
         key={i}
         className="w-11 h-11 flex items-center justify-center
         rounded-full border border-gray-200
         text-gray-400 hover:text-[#8c6d5a] hover:border-[#8c6d5a]
         transition duration-300 cursor-pointer"
       >
         <Icon size={18} />
       </div>
     )
   )}
 </div>
   </div>
 
 </div>
           {/* AUTHOR */}
 <div className="border-t border-gray-200 mt-10 pt-8">
 
   <div className="flex items-start gap-5">
 
     {/* PROFILE IMAGE */}
     <img
       src="https://randomuser.me/api/portraits/men/45.jpg"
       alt="author"
       className="w-16 h-16 rounded-full object-cover"
     />
 
     {/* CONTENT */}
     <div>
       <h4 className="text-lg font-semibold text-gray-900">
         Robert Downey
       </h4>
 
       <p className="text-gray-500 mt-1 text-sm">
         Sharing travel tales from around the globe, with heart.
       </p>
 
       {/* READ MORE */}
       <div className="mt-3">
         <a
           href="#"
           className="text-gray-900 font-medium flex items-center gap-2 hover:text-[#8c6d5a] transition"
         >
           Read All Post
           <ArrowUpRight size={18} />
         </a>
       </div>
     </div>
 
   </div>
 
 </div>
 {/* ================= PREV / NEXT POSTS ================= */}
 <div className="border-t border-gray-200 mt-10 pt-8">
 
   <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
 
     {/* LEFT - PREVIOUS POST */}
     <div className="flex items-center gap-4 max-w-[40%]">
       <img
         src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
         className="w-14 h-14 rounded-full object-cover"
       />
 
       <div>
         <h4 className="text-sm font-semibold text-gray-900 leading-tight">
           Eco-Friendly Living: <br /> Small Changes, Big...
         </h4>
 
         <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
           ← Previous Post
         </p>
       </div>
     </div>
 
     {/* CENTER DOTS */}
     <div className="grid grid-cols-3 gap-1 opacity-60">
       {Array.from({ length: 9 }).map((_, i) => (
         <span key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
       ))}
     </div>
 
     {/* RIGHT - NEXT POST */}
     <div className="flex items-center gap-4 max-w-[40%] justify-end text-right">
       <div>
         <h4 className="text-sm font-semibold text-gray-900 leading-tight">
           Sustainable <br /> Architecture Trends
         </h4>
 
         <p className="text-gray-500 text-sm mt-1 flex items-center justify-end gap-1">
           Next Post →
         </p>
       </div>
 
       <img
         src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
         className="w-14 h-14 rounded-full object-cover"
       />
     </div>
 
   </div>
 
 </div>
           {/* COMMENT */}
           {/* ================= COMMENT SECTION ================= */}
 <div className="mt-14 bg-[#eef3ef] p-8 md:p-10 rounded-3xl">
 
   {/* TITLE */}
   <h3 className="text-2xl font-semibold text-gray-900 mb-2">
     Post a comment
   </h3>
 
   <p className="text-gray-500 text-sm mb-6">
     Your email address will not be published.
   </p>
 
   <h4 className="text-lg font-medium text-gray-900 mb-4">
     Leave a Reply
   </h4>
 
   {/* TEXTAREA */}
   <textarea
     placeholder="Write your comment here..."
     className="w-full h-40 p-5 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8c6d5a] mb-6"
   />
 
   {/* INPUTS */}
   <div className="gap-4 md:gap-5 gap-5 mb-5">
     
     <div>
       <label className="block text-sm font-medium mb-2 text-gray-700">
         Full Name
       </label>
       <input
         placeholder="ex. John Doe"
         className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8c6d5a]"
       />
     </div>
 
     <div>
       <label className="block text-sm font-medium mb-2 text-gray-700">
         Email Address
       </label>
       <input
         placeholder="ex. John Doe"
         className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8c6d5a]"
       />
     </div>
 
   </div>
 
   {/* WEBSITE */}
   <div className="mb-5">
     <label className="block text-sm font-medium mb-2 text-gray-700">
       Website URL
     </label>
     <input
       placeholder="Your website address"
       className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8c6d5a]"
     />
   </div>
 
   {/* CHECKBOX */}
   <div className="flex items-center gap-3 mb-6">
     <input type="checkbox" className="w-4 h-4 accent-[#2f3e34]" />
     <p className="text-sm text-gray-600">
       Save my name and email in this browser for the next time I comment.
     </p>
   </div>
 
   {/* BUTTON */}
   <button className="bg-[#8c6d5a] text-white w-full md:w-auto px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
     Post comment
   </button>
 
 </div>        </div>
 
         {/* SIDEBAR */}
 <div className="bg-[#f4f6f4] p-4 sm:p-6 md:p-8 rounded-3xl space-y-10">
       {/* SEARCH */}
   <div>
     <h3 className="text-lg font-semibold mb-4">Search</h3>
     <input
       placeholder="Search for posts and pages..."
       className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none"
     />
   </div>
 
   {/* AUTHOR */}
   <div className="text-center border-t border-gray-200 pt-8">
     <img
       src="https://randomuser.me/api/portraits/men/45.jpg"
       className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
     />
     <h4 className="font-semibold text-lg text-gray-900">
       Robert Downey
     </h4>
     <p className="text-sm text-gray-500 mt-2 mb-4">
       Sharing travel tales from around the globe, with heart.
     </p>
 
     {/* SOCIAL ICONS */}
    <div className="flex justify-center gap-3 mb-5">
   {[Globe, Send, MessageCircle, LinkIcon, Mail].map(
     (Icon, i) => (
       <div
         key={i}
         className="w-9 h-9 flex items-center justify-center
         rounded-full border border-gray-200
         text-gray-400 hover:text-[#8c6d5a] hover:border-[#8c6d5a]
         transition duration-300 cursor-pointer"
       >
         <Icon size={16} />
       </div>
     )
   )}
 </div>
     {/* BUTTON */}
     <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-full px-6 py-2 mx-auto">
       <span>→</span>
       <span className="bg-[#8c6d5a] text-white px-4 py-2 rounded-full text-sm">
         Read All Post
       </span>
     </button>
   </div>
 
   {/* CATEGORIES */}
   <div className="border-t border-gray-200 pt-8">
     <h3 className="text-lg font-semibold mb-4">Categories</h3>
     <ul className="space-y-3 text-gray-700 text-sm">
       <li className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
         <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> ARCHITECTURE 1
       </li>
       <li className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
         <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> INDUSTRY NEWS 1
       </li>
       <li className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
         <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> INTERIOR DESIGN 1
       </li>
       <li className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
         <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> LIFESTYLE & TRENDS 2
       </li>
       <li className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
         <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> MODERN LIVING 1
       </li>
       <li className="flex items-center gap-2 group cursor-pointer hover:text-[#8c6d5a] transition">
         <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> SMART HOMES 1
       </li>    </ul>
   </div>
 
   {/* POPULAR POSTS */}
   <div className="relative border-t border-gray-200 pt-8">
   <h3 className="text-lg font-semibold mb-6">Popular Posts</h3>
 
   <div className="space-y-6">
     {posts.map((post, i) => (
   <div
   key={post.id}
   className="pb-5 border-b border-gray-200 last:border-none relative"
   onMouseEnter={() => setHoveredIndex(i)}
   onMouseLeave={() => setHoveredIndex(null)}
   onMouseMove={(e) =>
     setMousePos({
       x: e.clientX,
       y: e.clientY,
     })
   }
 >
         {/* CATEGORY */}
         <div className="flex items-center gap-2 text-xs text-gray-500 uppercase mb-2">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="w-4 h-4 text-gray-400"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={1.5}
           >
             <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
           </svg>
           <span>{post.category}</span>
         </div>
 
         {/* TITLE */}
         <h4 className="text-[15px] font-semibold text-gray-900 leading-snug hover:text-[#8c6d5a] transition cursor-pointer">
           {post.title}
         </h4>
 
         {/* HOVER IMAGE */}
         {hoveredIndex === i && (
 <div
     className="fixed z-[999] pointer-events-none"
     style={{
       left: mousePos.x - 60,
       top: mousePos.y - 60,
     }}
   >            <img
               src={post.image}
               className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white"
             />
           </div>
         )}
 
       </div>
     ))}
   </div>
 </div>
 
 
   {/* POPULAR TAGS */}
   <div className="border-t border-gray-200 pt-8">
     <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
 
     <div className="flex flex-wrap gap-3">
       {[
         "Architecture Ideas",
         "Home Decor",
         "Lighting",
         "Furniture",
         "Interior",
         "Design",
         "Smart Homes",
       ].map((tag, i) => (
         <span
           key={i}
 className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700
 hover:bg-[#8c6d5a] hover:text-white hover:border-[#8c6d5a]
 transition duration-300 cursor-pointer"        >
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
 
 