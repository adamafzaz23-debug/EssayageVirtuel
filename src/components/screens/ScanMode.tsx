import React from "react";
import { motion } from "motion/react";
import { RefreshIcon } from "../Icons";

interface ScanModeProps {
  onCapture: () => void;
}

export default function ScanMode({ onCapture }: ScanModeProps) {
  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Simulation of Camera feed */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFhe1WVOLaQVCCMzcQBCxCSQIbwMXjWH4TOjjoRPh7rlRE7RxGdJKXKAc9FArR00ycA8OWtt7PHcueD98LC49wVK1q7qaYmAZl5LaaYQNKIeK0eO8FVN_w37MYOlsHbHoKtf-gQfydPvvU6BD20IIZNxPTEqZ1O1SUGU08V627S1TO8Dicxj92JLKPXWBqjJqyNHdBKf80XE5YWzYxxy8KdPrfERSzDzcA9CV7ItTzc2h7J-gvGjHo-vFZBG8ufqC7KysYKne2hvs8"
          alt="Camera View"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-on-background/10 backdrop-contrast-125" />
      </div>

      {/* Silhouette Guide */}
      <div className="relative z-10 w-full max-w-md h-full flex items-center justify-center pointer-events-none">
        <div className="w-full aspect-[3/4] border-2 border-white/20 rounded-xl relative flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-40 text-white fill-none stroke-current stroke-1" viewBox="0 0 200 400">
            <path d="M100,40 C110,40 120,50 120,65 C120,80 110,90 100,90 C90,90 80,80 80,65 C80,50 90,40 100,40 M80,95 L120,95 L140,150 L145,230 L135,235 L125,180 L125,360 L105,360 L100,240 L95,360 L75,360 L75,180 L65,235 L55,230 L60,150 L80,95 Z" />
          </svg>
          {/* Corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/60" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/60" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/60" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/60" />
        </div>
      </div>

      {/* Instruction Panel */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-12 left-12 z-20"
      >
        <div className="bg-[#1A1A1A] p-8 border border-[#CCFF00]/30 backdrop-blur-xl editorial-shadow min-w-[320px]">
          <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase mb-2 block">System Status: Active</span>
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4 leading-none">Capture <br/>Position</h3>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
            Stand with arms away <br/>from torso for 360 analysis
          </p>
        </div>
      </motion.div>

      {/* Capture Controls */}
      <div className="absolute bottom-12 w-full px-12 z-30 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4">
          <button className="w-16 h-16 flex items-center justify-center bg-[#1A1A1A] text-white border border-white/10 hover:border-[#CCFF00] transition-colors">
            <RefreshIcon size={24} />
          </button>
          <div className="hidden md:flex items-center px-4 bg-[#1A1A1A] border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CCFF00]">Scanning 0.1</span>
          </div>
        </div>
        
        <button
          onClick={onCapture}
          className="group relative p-2 bg-transparent transition-transform hover:scale-105 active:scale-95"
        >
          <div className="w-24 h-24 border-4 border-white/20 flex items-center justify-center">
            <div className="w-20 h-20 bg-white group-hover:bg-[#CCFF00] transition-colors" />
          </div>
        </button>

        <div className="flex gap-4">
          <div className="hidden md:flex flex-col items-end justify-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Focus: Auto</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">ISO: 400</span>
          </div>
          <button className="w-16 h-16 bg-[#1A1A1A] border border-white/10 p-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS0rytFc8_HOmkQ6jj500lornOz9_jIc3a_a4ZHWozoATY8Q146t0qCGZ26K4W--gy_fqhCvZNuOFMC-47zNpu1REO_j2aHrtkpzgDoZ0-JvgkdOYRNXsSPHM5i9r8g6C9LySN0yq0AeR_KUJyiCgs2EEFjldUEebOIg8RyXtOdDzgOx6KYNAy1CUXDc2mNZTjHGuK8fifefJunZkjXqhZYy8UJtUh80Dc3hQ3eV8kMG484SnOTZPQzJ69BB0OskaGk5b7X2XiJpN7"
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 flex gap-8">
        <span className="font-label text-[10px] tracking-[0.2em] uppercase font-bold text-white">Photo</span>
        <span className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-white/50">Video</span>
      </div>
    </div>
  );
}
