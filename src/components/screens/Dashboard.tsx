import React from "react";
import { motion } from "motion/react";
import { 
  RefreshIcon, 
  RulerIcon, 
  WindIcon, 
  AspectRatioIcon, 
  VerifiedIcon,
  ArrowRightIcon
} from "../Icons";

interface DashboardProps {
  onRetake: () => void;
}

export default function Dashboard({ onRetake }: DashboardProps) {
  return (
    <div className="px-12 max-w-7xl mx-auto space-y-16 pb-32">
      {/* Hero Recommendation */}
      <section className="flex flex-col md:flex-row items-center gap-16 pt-12">
        <div className="w-full md:w-2/3 text-center md:text-left order-2 md:order-1 relative">
          <div className="absolute -left-20 top-0 opacity-5 pointer-events-none hidden lg:block">
            <span className="text-[320px] font-black tracking-tighter leading-none">24</span>
          </div>
          <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase mb-4 block">Recommended Magnitude</span>
          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-8 text-on-background font-headline uppercase">
            Size<br/>
            <span className="text-[#CCFF00]">Med.</span>
          </h1>
          <p className="text-xl text-gray-400 font-bold mb-12 font-body max-w-md border-l-4 border-[#CCFF00] pl-8">
            95% Compatibility detected. Optimal silhouette confirmed for high-density environments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
            <button className="bg-[#CCFF00] text-black px-12 py-6 rounded-none font-black tracking-widest hover:scale-105 transition-all uppercase text-xs font-label shadow-[8px_8px_0px_rgba(204,255,0,0.2)]">
              Save To Space
            </button>
            <button 
              onClick={onRetake}
              className="bg-[#1A1A1A] text-white px-12 py-6 rounded-none font-black tracking-widest border border-white/10 hover:border-[#CCFF00] transition-all uppercase text-xs flex items-center gap-3 font-label"
            >
              <RefreshIcon size={18} /> Re-Scan
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 relative order-1 md:order-2">
          <div className="aspect-[3/4] bg-[#1A1A1A] border-8 border-[#222] relative group overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEx_p5Xz2SMc2-noyag-A_Zbi7czvsIJKi_StZtPwdFCj_EOIy31FZO93i0k-gl5A44v_y4yuJ9k9MJjsNerLLBYv3IGdx6kXpdB-A8HTpBh4LwbI12uEW190k2DEibiCXRVRq38bZ5AjD_7qbnps8RyCI4gsOt4k7VC6gAqsnpA1TdkSk3RNoxp2ppjIWVQIgUR_MQFbqwoZjISTOkxPtdcGxTEEwCboRRkoE4lM-b9JtPqlb5AM6QtlOm_HaMG3L0O2PjkkhQYOM"
              alt="3D Avatar"
              className="w-full h-full object-contain grayscale opacity-60 mix-blend-screen"
            />
            {/* Hotspots */}
            <Hotspot top="15%" right="10%" label="178" />
            <Hotspot top="40%" left="50%" label="96 Chest" translate="-translate-x-1/2" />
            <Hotspot top="55%" left="30%" label="82 Waist" translate="-translate-x-full" pulseLeft />

            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-mono text-[#CCFF00] uppercase tracking-widest">Live Engine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={<RulerIcon size={24} />} label="Stature" value="178" unit="cm" trend="04" />
        <MetricCard icon={<WindIcon size={24} />} label="Thorax" value="96" unit="cm" trend="01" />
        <MetricCard icon={<AspectRatioIcon size={24} />} label="Section" value="82" unit="cm" trend="09" />
        <MetricCard icon={<AspectRatioIcon size={24} />} label="Base" value="101" unit="cm" trend="03" />
      </section>

      {/* Recommendations */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t-2 border-[#1A1A1A]">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#1A1A1A] p-8 border border-white/5 group hover:border-[#CCFF00] transition-colors">
            <span className="text-[#CCFF00] font-mono text-sm leading-none">01.</span>
            <h3 className="text-2xl font-black mt-2 mb-4 uppercase tracking-tighter">Visual Core</h3>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-tight leading-relaxed">Proprietary rendering pipeline optimized for high-density typographic displays.</p>
          </div>
          <div className="bg-[#CCFF00] p-8 text-black">
            <span className="font-mono text-sm leading-none">02.</span>
            <h3 className="text-2xl font-black mt-2 mb-4 uppercase tracking-tighter text-black">Market Feed</h3>
            <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest">
              <span>Enter Store</span>
              <ArrowRightIcon size={16} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-[#1A1A1A] p-12 border border-white/5">
          <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase mb-8 block">Manifesto Items</span>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
            <RecItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBsFm0paPNQBV-zI76k4LDBnjrozFd-BLOuWlw0TtJPPRWMFmB4GIhDJr3JY8d94XjyFAIpSAjp0xmT50DPLcMFPQFpL-bExNaGhu7uYb9U4bnGapA5a0-cL5yZGoN9N7oCrfdVOD9FVYVlmr6mPy5DxQHec-k_5doDoobFbaa9e5nUQMMsFsmKJrkKmo3WrTeQxJVDpb3mh2yErNdMoGUjWMhwRbmXTt5xaHWIEVLF7X1hkTUMHuenWTYNEiQVB9jiYS-psPqMSfUo"
              name="Merino v.04"
              fit="Match: Sync"
            />
            <RecItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCWB6m7lCAdP6FopH5Qmthzd2KjGLvWKQI53nBIEc_0m4fz7cTTeO_HOVZAYGu2pve08Ho2eBkFfcN1xr3QsSLjhN7w01M-dYBCLgLaOGVgKUDT3g7LPieqM6FHyxAihmG5s5BGq6oubZHySE6CxVljFegY4sD4YNv9azIEKfAlDdsDEgda0cPcdI_yuNCgbI7QJOfDznfj2jfvLPSCyJEXjFUAET_j8gwxjQsHlY2BkHOBfPwppw9OY-9hYFmTbc8RI4whFx7-wOKv"
              name="Trench v.09"
              fit="Match: Flow"
            />
            <RecItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDB81ZJ_vkwNGVu_OgRbt-AySZvFcKVlL-48ZKBDurUueQrvMBRUq6s_RyNq-K-r-4jnNsca4n0Oy1bU0bNk_cdi1HePx3qRw-89LMVHHjxWUs2TLjCnbuNXmlaC-zwnGWVWR4G9I-vL-YFr3xIJ8XvFGqJABwJuXIAPyMzfBkQuLJ3-xLo1RkVT8QRVDTdt91MlV3a6aT_DF4KFIfjptx9RiKObRWWYLiRBOf2yxpgLSA4zzumfZ9FtVdMsDeJ1TXGiegpE44RCd96"
              name="Linen v.01"
              fit="Match: Base"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Hotspot({ top, right, left, label, translate = "", pulseLeft = false }: any) {
  return (
    <div className={`absolute pointer-events-auto cursor-help group/label ${translate}`} style={{ top, right, left }}>
      <div className="bg-[#CCFF00] px-4 py-1.5 shadow-xl flex items-center gap-3 transform transition-all group-hover/label:scale-110">
        {!pulseLeft && <span className="text-[10px] font-black font-mono text-black uppercase tracking-widest">{label}</span>}
        <div className="w-1.5 h-1.5 bg-black" />
        {pulseLeft && <span className="text-[10px] font-black font-mono text-black uppercase tracking-widest">{label}</span>}
      </div>
    </div>
  );
}

function MetricCard({ icon, label, value, unit, trend }: any) {
  return (
    <div className="bg-[#1A1A1A] p-10 flex flex-col justify-between min-h-[200px] border border-white/5 transition-all hover:border-[#CCFF00] group">
      <div className="flex justify-between items-start">
        <span className="text-[#CCFF00]">{icon}</span>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">ID:{trend}</span>
      </div>
      <div>
        <h3 className="text-gray-500 uppercase text-[10px] font-bold tracking-[0.3em] mb-2 font-mono">{label}</h3>
        <p className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter">
          {value}<span className="text-xs font-mono text-[#CCFF00] ml-1">{unit}</span>
        </p>
      </div>
    </div>
  );
}

function RecItem({ img, name, fit }: any) {
  return (
    <div className="flex-none w-48 group cursor-pointer">
      <div className="aspect-[3/4] bg-[#222] mb-4 overflow-hidden border border-white/5 group-hover:border-[#CCFF00] transition-all">
        <img src={img} alt={name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <p className="text-[11px] font-black uppercase tracking-widest mb-1 font-headline text-white">{name}</p>
      <p className="text-[11px] text-[#CCFF00] font-mono tracking-widest uppercase">{fit}</p>
    </div>
  );
}
