import React from "react";
import { motion } from "motion/react";
import { ArrowRightIcon } from "../Icons";

interface OnboardingProps {
  onNext: () => void;
}

export default function Onboarding({ onNext }: OnboardingProps) {
  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row">
      <div className="relative w-full h-[60vh] md:h-screen md:w-1/2 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxmLa9StuI8uV5bBq-mKLIY3lWYLUi80pf7StMtkedYx78kStXzx3MMQ1oOGi8bj87ExszJQXma8lh1Vf4oe3aYSEOFcunIGrPN5lEq-jwdqGhUxgClUIZwkKEeEhCknH3NQ6fefhEmdg7pdEppbdOYKoWxCs9xRIBz5GhTMECITiBobF0bJJEvKcDBiKM6QzMX2ycm3BbZo_Dm1chSSsXv56WHqnCllJhxp_v-b2lkUZ4UTT7C811hxxYORrTgwRpV7DJfAISKdHS"
          alt="Luxury Fashion Suit"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 -right-4 md:right-8 w-64 aspect-[3/4] bg-surface-container-lowest ambient-shadow rounded-lg overflow-hidden hidden sm:block"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9fme0sfpnV1wo3AfJk2DHPz0FESsCwTb0hsdOT_MPJocEtRoKp3KU6VabgsCn8v34hRGkVBpl6uCjfbGr4qoPRzKB8Yj8NPSUYajplFkJI-o_OWIpstSAXCE9yDTTHxH9OCIQhl3bCzLxLsGBwXCREzQRHEx8ar80RQQ4BcFdXtlm-o2PXxiG-wVYFlqT1Tl6lhzcEpwkfBZc4Lkj7S17YvM3blPNqqnKlhAvKBY5zLSCZU3zVeiAtS0UNTtchopEVkqSm2paXlcg"
            alt="Fabric Detail"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
              Precision Scan 0.1
            </span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col justify-center px-12 py-12 md:px-24 md:w-1/2 bg-surface">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="font-mono text-[#CCFF00] text-xs tracking-[0.3em] uppercase mb-8 block">
            01 / Introduction
          </span>
          <h1 className="font-headline text-8xl md:text-[8rem] leading-[0.85] font-black text-on-background -ml-2 tracking-tighter uppercase mb-12">
            Personal <br />
            <span className="text-[#CCFF00]">Digital</span><br />
            Tailor
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-16 max-w-md tracking-tight border-l-4 border-[#CCFF00] pl-8">
            Architecting the future of immersive interfaces through structural brutalism and typographic hierarchy.
          </p>

          <div className="flex items-center space-x-12">
            <button
              onClick={onNext}
              className="group relative px-12 py-6 bg-[#CCFF00] text-black font-black text-sm tracking-[0.2em] uppercase overflow-hidden transition-all hover:scale-[1.05] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                Begin Space <ArrowRightIcon size={20} />
              </span>
            </button>
            <div className="flex space-x-4">
              <div className="w-3 h-3 rounded-full bg-[#CCFF00]" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
