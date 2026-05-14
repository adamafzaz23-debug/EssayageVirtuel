import React from "react";
import { 
  ExploreIcon, 
  ScanIcon, 
  WardrobeIcon, 
  ProfileIcon, 
  MenuIcon, 
  ShoppingBagIcon 
} from "./Icons";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  showNav?: boolean;
}

export default function Layout({ children, activeTab, onTabChange, showNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0F0F0F]/80 backdrop-blur-xl border-b-2 border-[#1A1A1A]">
        <div className="flex justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col">
            <span className="text-[#CCFF00] text-[10px] font-mono tracking-widest uppercase">Volume 04</span>
            <span className="text-on-background tracking-tighter font-black text-2xl uppercase font-headline">
              ESSAYAGE.
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <button className="text-on-background hover:text-[#CCFF00] transition-colors uppercase text-[10px] font-black tracking-widest">
              Cart
            </button>
            <button className="text-on-background hover:text-[#CCFF00] transition-colors">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* BottomNavBar */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 w-full bg-[#0F0F0F] z-50 border-t-2 border-[#1A1A1A]">
          <div className="flex justify-around items-center py-8 px-12 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center justify-center transition-all ${
                  activeTab === item.id ? "text-[#CCFF00]" : "text-outline hover:text-white"
                }`}
              >
                <span className={`text-[11px] tracking-[0.2em] uppercase font-black font-label ${activeTab === item.id ? "scale-110" : ""}`}>
                  {item.label}
                </span>
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="w-12 h-1 bg-[#CCFF00] mt-2"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

const navItems = [
  { id: "discover", label: "Discover", icon: ExploreIcon },
  { id: "scan", label: "Scan", icon: ScanIcon },
  { id: "wardrobe", label: "Wardrobe", icon: WardrobeIcon },
  { id: "profile", label: "Profile", icon: ProfileIcon },
];
