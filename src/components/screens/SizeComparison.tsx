import React from "react";
import { motion } from "motion/react";
import { RulerIcon, AspectRatioIcon, WardrobeIcon } from "../Icons";

export default function SizeComparison() {
  return (
    <div className="px-12 max-w-4xl mx-auto pb-32 pt-12">
      <section className="mb-16">
        <span className="font-mono text-[#CCFF00] text-xs tracking-[0.3em] uppercase mb-4 block">Simulation Room 01</span>
        <h2 className="font-headline text-8xl font-black tracking-tighter text-white uppercase leading-[0.8]">Size<br/><span className="text-[#CCFF00]">Delta.</span></h2>
      </section>

      {/* 3D Avatar Stage */}
      <section className="relative aspect-[3/4] w-full bg-[#1A1A1A] border-8 border-[#222] overflow-hidden mb-12 relative group">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtaKIEcutUbLSCHJMDcO99gKYu9avNVHk-ZUNqGgGa3rKYh8CL4wLbnD-u0HtTP9__LWna3K5xTkHiEzKrKQ30zz5hzVv4OGXcUmvsBgK0PX9j1OvYFmUjrbJHqaPYuVg6yYsoJJJTum9KEJwjKLVY0DOdD-gpAEvImXbELXIccKQk_FWgXHTBa8EB_hGJ6q4OddO3EoLMK3OJc1Le3ekaWsRu7f3P8fN9P4zTrtEx0HJLxZiZm-fNAYrxqytFDAHFlPa65a0iamI3"
          alt="Avatar Fit"
          className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 mix-blend-screen"
        />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[35%] left-[50%] -translate-x-1/2 flex flex-col items-center">
            <div className="h-16 w-0.5 bg-[#CCFF00]/40 mb-4" />
            <span className="bg-[#CCFF00] text-black px-6 py-2 font-black text-[10px] tracking-widest uppercase shadow-2xl">
              Optimal Magnitude
            </span>
          </div>
          <div className="absolute bottom-[35%] right-[20%] flex flex-col items-start">
            <div className="h-0.5 w-12 bg-[#CCFF00]/40 mb-4" />
            <span className="bg-white text-black px-6 py-2 font-black text-[10px] tracking-widest uppercase shadow-2xl">
              Elastic Range
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          <div className="w-3 h-3 bg-[#CCFF00]" />
          <div className="w-3 h-3 bg-[#222]" />
          <div className="w-3 h-3 bg-[#222]" />
        </div>
      </section>

      {/* Selectors */}
      <section className="space-y-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Select Magnitude</span>
            <span className="text-[10px] text-[#CCFF00] font-black uppercase tracking-widest">Med Recommended</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <SizeBtn size="S" match="45%" />
            <SizeBtn size="M" match="95%" active />
            <SizeBtn size="L" match="60%" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FitCard icon={<RulerIcon size={24} />} title="Stature" desc="Precision alignment with baseline frame." />
          <FitCard icon={<AspectRatioIcon size={24} />} title="Vector" desc="Extension optimized for high velocity." />
        </div>

        <button className="w-full bg-white text-black py-8 font-black text-xs tracking-[0.4em] uppercase hover:bg-[#CCFF00] transition-all shadow-[12px_12px_0px_rgba(255,255,255,0.1)]">
          Commit To Space
        </button>
      </section>
    </div>
  );
}

function SizeBtn({ size, match, active }: any) {
  return (
    <button className={`group flex flex-col items-center p-8 transition-all active:scale-95 border ${active ? "bg-[#CCFF00] border-[#CCFF00] text-black" : "bg-[#1A1A1A] border-white/5 text-gray-400 hover:border-[#CCFF00]"}`}>
      <span className="font-headline text-4xl font-black">{size}</span>
      <span className={`text-[10px] mt-2 font-mono tracking-widest uppercase ${active ? "text-black" : "text-gray-500"}`}>{match} Match</span>
    </button>
  );
}

function FitCard({ icon, title, desc }: any) {
  return (
    <div className="bg-[#1A1A1A] p-8 border border-white/5 hover:border-[#CCFF00] transition-all cursor-default">
      <div className="text-[#CCFF00] mb-6">{icon}</div>
      <h4 className="text-sm font-black uppercase tracking-widest mb-3 font-headline text-white">{title}</h4>
      <p className="text-xs text-gray-500 font-bold uppercase tracking-tight leading-relaxed">{desc}</p>
    </div>
  );
}
