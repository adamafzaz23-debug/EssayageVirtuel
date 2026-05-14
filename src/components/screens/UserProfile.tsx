import React from "react";
import { motion } from "motion/react";
import { 
  EditIcon, 
  AccessibilityIcon, 
  PlusIcon,
  SparklesIcon
} from "../Icons";

export default function UserProfile() {
  return (
    <div className="px-12 max-w-7xl mx-auto pb-32 pt-12 space-y-20">
      {/* Hero */}
      <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 relative">
        <div className="absolute -left-20 top-0 opacity-5 pointer-events-none hidden lg:block">
          <span className="text-[320px] font-black tracking-tighter leading-none">09</span>
        </div>
        <div className="relative z-10">
          <h4 className="font-mono text-[#CCFF00] text-xs tracking-[0.3em] uppercase mb-4">Registry ID: ALPHA-09</h4>
          <h1 className="font-headline text-8xl md:text-[10rem] font-black tracking-tighter uppercase text-white leading-[0.8] mb-8">
            Julian<br/>
            <span className="text-[#CCFF00]">Vane.</span>
          </h1>
          <p className="mt-8 font-body text-gray-400 max-w-lg leading-relaxed text-xl font-bold border-l-4 border-[#CCFF00] pl-8">
            Curating a digital wardrobe based on precision metrics and editorial aesthetics.
          </p>
        </div>
        <div className="relative group shrink-0">
          <div className="w-48 h-48 md:w-80 md:h-80 bg-[#1A1A1A] border-8 border-[#222] overflow-hidden grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUlpNygwkl0YYJwnqit53z9encK3nYwKygasYyWDTazXJW5s7FZgpP12OtK3jHQ4CBrO2LgFU4JTe-QVdk55RyfZyV4iMeEbAZNGyk99kQUFHtq8Hal8v_JXb9kPUs0V3OWnSc8wzp3l_sUvoYFt-wbe5W-VhVHpfNzMQKaNnsyD1hol_yqn5nCbVmBHx46G2LwvWqgIK7Jk8EZxN-F3JkWDNGoxWuEBBDRmdy3LbQXtfsFuhNAviX9QNZ1WU5MwIVO3FpszbUWiF-" 
              alt="Julian Vane" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute -bottom-6 -right-6 bg-[#CCFF00] text-black p-6 rounded-none shadow-2xl hover:scale-110 active:scale-95 transition-transform">
            <EditIcon size={24} />
          </button>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Fit Profile */}
        <div className="md:col-span-8 bg-[#1A1A1A] p-12 editorial-shadow border border-white/5">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase mb-2 block">System Scan 0.2</span>
              <h2 className="font-headline text-4xl font-black text-white tracking-tighter uppercase">Fit Vector</h2>
            </div>
            <button className="font-mono text-[#CCFF00] text-[10px] tracking-[0.2em] uppercase font-black border-b border-[#CCFF00] pb-1 hover:text-white hover:border-white transition-all">
              Update Meta
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <Stat label="Stature" value="184" unit="cm" />
            <Stat label="Mass" value="78" unit="kg" />
            <Stat label="Thorax" value="102" unit="cm" />
            <Stat label="Section" value="84" unit="cm" />
          </div>
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="flex items-center gap-6">
              <div className="p-6 bg-[#CCFF00] text-black">
                <AccessibilityIcon size={32} />
              </div>
              <div>
                <p className="font-headline font-black text-2xl text-white uppercase tracking-tighter">Athletic Vector</p>
                <p className="text-gray-500 font-bold uppercase tracking-tight text-sm">Target: Slim Fit (Tops) / Tapered (Base)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Style Preferences */}
        <div className="md:col-span-4 bg-[#CCFF00] text-black p-12 flex flex-col justify-between shadow-2xl">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase font-black mb-8 block">Config: Taste</span>
            <h2 className="font-headline text-4xl font-black mb-8 tracking-tighter uppercase">Preferences</h2>
            <div className="space-y-6">
              <PreferenceRow label="Logic" value="Minimalist" />
              <PreferenceRow label="Palette" value="Monochrome" />
              <PreferenceRow label="Fiber" value="Linen" />
            </div>
          </div>
          <div className="mt-12">
            <button className="w-full bg-black text-white py-6 font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors">
              Refine Logic
            </button>
          </div>
        </div>

        {/* Recent Scans */}
        <div className="md:col-span-12 mt-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-headline text-3xl font-bold text-on-background">Recent Scans</h2>
            <button className="font-label text-[11px] tracking-widest uppercase text-on-surface-variant hover:text-on-background transition-colors underline underline-offset-4">View History</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <ScanCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_AoCpq_ZdICAzmXCvN7sZsNj5rNcwauLHZInYLQZzjv9nUdJcVWBXd1oQDSnilb06obiU5ubHim5flGt4XQ9gZdz2KFZfZdH4SR5bqU2EdwmFmzlXezAbKLArnAi8PveTb7_iam87oeT2Rs9RVnxH3eQzcEGVWTv8t5_yBbv3f36cJ7clpChP-fKPmX4y5ClIuPP_SG5gfhGnMogvWhjxEyTIZa4f735jHrHidXZbyKYA5t10BdN02MC9vlnuv4OoZDgJ_PrjmX7"
              name="Cashmere Overcoat"
              match="98% Perfect"
            />
            <ScanCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAvq5hkQa7m_vsQhmIzE43_YiKDS_Zkktd6kHrFKrI_eQT_Dpan-GulnXhzrExKRi8oUJmX2CpyPYCD719_Rn4c9zmIBH7M2EUE0islRswHxL_V007DPBjL9t9EpCVAlGwTjmyJBSATld5C7dbURVLpk3tOtLnrFyVNFgpwnKO-olgPwP6pZ2-IMF4yGxrELObFX5tS4s_YBYsYMqmCIi9EdYbfAOwEZ7PX8bR86D5RUxOZVH3DbvW9A-HmRywbPWPZzuQjllZTCb7e"
              name="Pleated Trousers"
              match="92% Good"
            />
            <ScanCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBi9LmUTlhA2s5lFkJnHFjnbG4T1PjZPQQfvV8TYnvC7B7d3InArLBjbn7XeqZdVuy3VTIu8uYfFosbGnqwXFrMoxtcRPN3p0to9R5v3Oc3YOGYZR9m93ODFzmqiRm26VV8uq3QdaccPKceaaOc3_kX0oJlm_hdIcCiAD95d7EtVi4z5azjB3zwb6Ko8NO6bVXw_lCS_cghQUcKUm9Z_q9THEWQEyNeIiaQPY_BHDM2nK2cvCXF1PJg0EIIIjFehhvswoTIHZmMRG"
              name="Chelsea Boot"
              match="100% Exact"
            />
            <div className="hidden lg:block">
               <ScanCard 
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuANFDq7s0XKwtByVQ4bAEJk6jZMQEtymAU3A4wyhRT7g-89Onz5id8f0KztDqazdZ38jvgvtpoAlBPgEq3Lcj6j0zNHx2qeRt4qX17Wmr2G63Rk6esIknv9MpZJ9H7NnoyFEZ220FnC1moKOd_X9jNL3inUIhAnT_p1qc2SEo27KJ2Rp0nPKBfHjNZ8K9dbJRslWUtgPqhtWXDQ66vtkZD495a5voVLFo5KiWvREpiumEZa5BwEj00kmZ-knGFn8izdetwFq49VD54g"
                  name="Relaxed Linen Shirt"
                  match="85% Fair"
                />
            </div>
            
            <div className="border-2 border-dashed border-outline-variant/30 rounded-md flex flex-col items-center justify-center p-6 hover:border-primary/50 transition-colors group cursor-pointer aspect-[3/4]">
              <PlusIcon size={32} className="text-outline-variant group-hover:text-primary transition-colors mb-4" />
              <p className="font-label text-[10px] text-outline text-center uppercase tracking-widest">New Scan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 right-6 z-40">
        <button className="w-14 h-14 bg-surface-container-lowest backdrop-blur shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border border-outline-variant/10">
          <SparklesIcon size={24} className="text-primary" />
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value, unit }: any) {
  return (
    <div className="space-y-1">
      <p className="font-label text-[10px] uppercase tracking-widest text-outline">{label}</p>
      <p className="font-headline text-xl font-bold text-on-background">{value} <span className="text-sm font-normal text-outline">{unit}</span></p>
    </div>
  );
}

function PreferenceRow({ label, value }: any) {
  return (
    <div className="flex justify-between items-center border-b border-surface/10 pb-4">
      <span className="font-body text-sm opacity-70">{label}</span>
      <span className="font-label text-xs uppercase tracking-widest font-bold">{value}</span>
    </div>
  );
}

function ScanCard({ img, name, match }: any) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
        <img src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      <p className="font-headline font-bold text-sm text-on-background">{name}</p>
      <p className="font-label text-[10px] text-outline uppercase tracking-tighter">{match}</p>
    </div>
  );
}
