import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SparklesIcon } from "../Icons";

interface AnalyzingProgressProps {
  onComplete: () => void;
}

export default function AnalyzingProgress({ onComplete }: AnalyzingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="relative h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center px-8 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[150%] h-[150%] bg-gradient-to-tr from-surface-container-low via-surface to-surface-container-high blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Info */}
        <div className="w-full md:w-1/2 space-y-12">
          <div className="space-y-4">
            <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase mb-4 block">Process Status: 082</span>
            <h1 className="text-8xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase text-white">
              Data<br/>
              <span className="text-[#CCFF00]">Flow</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 font-bold tracking-tight border-l-4 border-[#CCFF00] pl-8 max-w-md">
            Architecting the future of immersive interfaces through structural brutalism and typographic hierarchy.
          </p>
          <div className="flex gap-16 pt-8">
            <div>
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Latency</span>
              <span className="text-2xl font-black text-white">0.02ms</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Engine</span>
              <span className="text-2xl font-black text-[#CCFF00]">Active</span>
            </div>
          </div>
        </div>

        {/* Right Scanning Portal */}
        <div className="w-full md:w-1/3 aspect-[3/4] bg-[#1A1A1A] border-8 border-[#222] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZDUYbSVs054DGdvUSCotmwVnRHhJA-AXa3IFajimA4mP1pAZvI6MGGq1XbfnPG_92RUxkdG2gy3jo54JqfIRZZnhhxBWGHmjOP853PLRAkGB8IEo8ejb0ICeliUHuLSL4YGtuIYorinIuCKP8uIji2en2zkwroHNNM7iPVbys9qeANQUuxIngosi-Qljx2Je1mWjPgaDWerB_0GROToKLgp0ZFEPlj_pRTF3KWOh5RbFUIhN__ZNjr-VRvowcOIDwOUJznb9D7pNS"
              alt="Scanning Silhouette"
              className="h-full object-cover grayscale"
            />
          </div>
          
          <motion.div
            animate={{ top: ["-20%", "120%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-[#CCFF00] shadow-[0_0_20px_#CCFF00]"
          />

          <div className="absolute bottom-0 w-full bg-[#1A1A1A] p-8">
            <div className="h-4 w-full bg-black relative">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#CCFF00]" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">Syncing...</span>
              <span className="text-[10px] font-black tracking-widest uppercase text-[#CCFF00]">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-24 w-full flex justify-center items-center">
        <div className="flex items-center gap-3 bg-surface-container-lowest/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-[11px] font-label tracking-[0.1em] text-on-surface-variant uppercase font-medium">Neural Engine Active</span>
        </div>
      </footer>
    </div>
  );
}

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-left border-l border-outline-variant/30 pl-4">
      <p className="text-[10px] uppercase tracking-widest text-outline font-label">{label}</p>
      <p className="text-sm font-medium font-headline">{value}</p>
    </div>
  );
}
