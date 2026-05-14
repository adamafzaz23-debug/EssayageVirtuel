import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRightIcon, 
  WardrobeIcon, 
  PlusIcon, 
  EyeIcon,
  SparklesIcon
} from "../Icons";

export default function ProductDetail() {
  return (
    <div className="px-6 max-w-7xl mx-auto pb-20 pt-4">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-outline font-label">
        <span>Home</span>
        <ChevronRightIcon size={12} />
        <span>Collection</span>
        <ChevronRightIcon size={12} />
        <span className="text-on-surface">Essentials</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Imagery */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-4">
          <div className="col-span-2 aspect-[16/9] bg-[#1A1A1A] border-8 border-[#222] overflow-hidden relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB81ZJ_vkwNGVu_OgRbt-AySZvFcKVlL-48ZKBDurUueQrvMBRUq6s_RyNq-K-r-4jnNsca4n0Oy1bU0bNk_cdi1HePx3qRw-89LMVHHjxWUs2TLjCnbuNXmlaC-zwnGWVWR4G9I-vL-YFr3xIJ8XvFGqJABwJuXIAPyMzfBkQuLJ3-xLo1RkVT8QRVDTdt91MlV3a6aT_DF4KFIfjptx9RiKObRWWYLiRBOf2yxpgLSA4zzumfZ9FtVdMsDeJ1TXGiegpE44RCd96" 
              alt="Linen Shirt" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute top-8 left-8">
              <span className="bg-[#CCFF00] text-black px-4 py-2 font-black font-mono text-[10px] uppercase tracking-[0.2em]">High Contrast Render</span>
            </div>
          </div>
          <div className="aspect-square bg-[#1A1A1A] border border-white/10 group overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe0x_eiIs98JBHqF1ThCQkArdzimnbKXTrQxQutcKAvKlhLv7Pp3QIukPsoTLHkel-d1E7VQs9B7GKbEYQ_qmjK6bWInkjUWxIr3uc1mQWJXAUrs89Ze0zcWNC3eiDCq4yELRCa-eVFZKIfU-zOrhOHR_Li4MCudxBoyORduCxpKhBm7fxVQj3MlSXjnonUqcC4LUlbesg21LqNjXpM7mWrIjLSilZ5gTlwC4_D5NRgRZcPwspdDAfFZLy3aWV5_9V7QJZqt_tXqfv" 
              alt="Texture Detail" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="aspect-square bg-[#1A1A1A] border border-white/10 group overflow-hidden relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLoMBHY7O7J7V0Si6bhaN7CP_mRz8YvVYQKBrBKQjk0jMg-XbQeC_QcNMVAN0yJG6V6Qecl6gllULrddrIrvwSCqp9lnnqjtIgFCqjy8tSZLmp4fR01h3Bj1sxDwwx2L7AxxvQ1kFw_t4XQtGTJpcC13ZqVoiVY_SqtZGMEhIJ8MyKXHXWFBswwHYN--tAAgQKwdczM2topWG5jgGFn90K5f6vHWqhe55YRRomaColItj3WoTe-34G0ftUm2n3ezjy4ascanayp8U" 
              alt="Model View" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-12">
          <section>
            <div className="flex flex-col mb-4">
              <span className="font-mono text-[#CCFF00] text-[10px] uppercase tracking-[0.3em] mb-2">Manifesto 04 / Section 01</span>
              <span className="text-gray-500 text-xs font-black uppercase tracking-widest leading-none">Ref: LV-ARCHIVE-842</span>
            </div>
            <h1 className="font-headline text-8xl font-black tracking-tighter uppercase text-white mb-6 leading-[0.85]">Linen<br/><span className="text-[#CCFF00]">Shirt.</span></h1>
            <p className="font-headline text-3xl font-black text-gray-500">$145.00</p>
          </section>

          <div className="bg-[#1A1A1A] p-8 border-l-8 border-[#CCFF00] editorial-shadow flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#CCFF00] text-black">
                <WardrobeIcon size={20} />
              </div>
              <h4 className="font-headline text-xs font-black tracking-widest uppercase text-white">Size Engine Recommendation</h4>
            </div>
            <p className="font-body text-sm text-gray-400 font-bold uppercase tracking-tight leading-relaxed">Based on your virtual profile, <span className="text-[#CCFF00]">Med.</span> is your optimal magnitude.</p>
          </div>

          <div className="space-y-10">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Select Spectrum: Oat</label>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-[#E5DACE] border-2 border-[#CCFF00]" />
                <button className="w-12 h-12 bg-[#FFFFFF] border border-white/10" />
                <button className="w-12 h-12 bg-[#2D3435] border border-white/10" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Vector Size</label>
                <button className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00] border-b border-[#CCFF00] pb-1">Chart</button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {["S", "M", "L", "XL"].map((s) => (
                  <button key={s} className={`py-5 text-xs font-black tracking-widest transition-all ${s === "M" ? "bg-[#CCFF00] text-black" : "bg-[#1A1A1A] text-white border border-white/10 hover:border-[#CCFF00]"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-white text-black py-6 font-black text-xs uppercase tracking-[0.3em] hover:bg-[#CCFF00] transition-colors shadow-[10px_10px_0px_rgba(255,255,255,0.1)]">
              Store In Space
            </button>
            <button className="w-full bg-[#1A1A1A] text-white py-6 border border-white/10 font-black text-xs uppercase tracking-[0.3em] hover:border-[#CCFF00] transition-all flex items-center justify-center gap-3">
              <EyeIcon size={18} /> Virtual Trace
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Content */}
      <section className="mt-32 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-on-background">The Virtual Fitting Experience</h2>
          <p className="max-w-xl mx-auto text-on-surface-variant font-body leading-relaxed">
            Leveraging state-of-the-art volumetric scanning to ensure your garments fit perfectly, reducing waste and enhancing your digital wardrobe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCVAxrJqvWYpxgoZalhyGqPhDge9cTzrXLkIPH50L76yaKv2L99T7QOSGhIH6pxmVAWpZi3xxS23eautvOIqdrhcy_8DIvO7JHwXg-uOiZogK5b3fUPEXau_eAvhQoO2rWfZw3lDrhQAsB3hsxNpXuSW4CfhjNBlTaVqAbU-iZIU4JFsqWaf3BhqX3MndGDUDhw3vo4RwpqUcEvQlz592ENuY7x4fax9hbpnykzFzWrh2lkSXoPaTMNrnnX3h5MPlfZiltI4IAAJppz" 
            title="100% Organic Linen" 
          />
          <FeatureCard 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBBv4e9RNy0beYnj7bkIXczJKypi8g_vSBZql_414Bqj1au4x1PbqalilDtIwgGpNd0UX9ZQYnuGtQrXiD6UpnzHUIazBJI1nPcW7YSGVxs3CBhRTPCJoJEB5UMp8Iio20KG4S66kgaXStyxcAJ446bg5EO0N1Rn94neaBxoGZCwYc49bxmwA_ElbJTAc7DZZ6xTIM4QMq_EVOEhat-BpvIHRTZrwCwIYY_jkp2J7ONzDl3JH4kOa7JRyHgq6v1WYW4tKuDPpBTeAF1" 
            title="Ethically Sourced" 
            offset
          />
          <FeatureCard 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAyi-7wHzsuOJAuSAjkNZouWX_cchNzzufgssCXQVdd_9MZvQjbNPm4lfhdBLBXFO31GGyLYYEOQLuXIk6HfowsXV5rrSTtM24d-8PSfx_B0MsSoDoDo9IR7aAFd3nCGQBVQUlffA9m8Wd-5wewLvyiZvGliEdyjvzrBpsDvieqh_KOlLZiZaafbu3TIWG4qTnWI4QyYQpbqJ4xzpaeW8J6HMAfEMgub26gYMKkcAwgBQZtAp5AtiIwzxGIZcrPQjgobJn90ThgRyHs" 
            title="Timeless Silhouette" 
          />
        </div>
      </section>

      {/* Floating AI Bubble */}
      <div className="fixed bottom-24 right-6 z-40">
        <button className="w-16 h-16 rounded-full bg-surface-container-lowest backdrop-blur-md flex items-center justify-center ambient-shadow text-on-surface hover:scale-105 transition-transform active:scale-95">
          <SparklesIcon size={24} />
        </button>
      </div>
    </div>
  );
}

function Collapsible({ label }: { label: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20 hover:border-on-surface transition-colors">
        <span className="font-headline text-sm font-bold tracking-widest uppercase text-on-background">{label}</span>
        <PlusIcon size={18} />
      </div>
    </div>
  );
}

function FeatureCard({ img, title, offset }: any) {
  return (
    <div className={`space-y-6 ${offset ? "md:mt-12" : ""}`}>
      <div className="aspect-square rounded-md overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-shadow">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-headline text-sm font-bold tracking-widest uppercase text-center text-on-background">{title}</h3>
    </div>
  );
}
