"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";

export default function ScreenshotPage() {
  const features = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
      title: "Instant Sharing",
      desc: "Share trade ideas without switching tools or editing screenshots manually."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />,
      title: "Professional Output",
      desc: "Clean, high-quality visuals that make your analysis look publication-ready."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
      title: "Community Engagement",
      desc: "Post directly to your trading community and get feedback in real time."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center text-center px-4 relative">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 relative z-10"
          >
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-300">Share Your Edge</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-6 leading-tight text-white relative z-10"
          >
            Export Your Trading <br />
            <span className="text-brand-gradient">Screens</span> in One Click
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-lg font-medium mb-10 relative z-10"
          >
            Capture high-quality chart screenshots with annotations and share your <br className="hidden md:block" />
            trading ideas instantly across platforms or with your community.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            <button className="bg-brand-gradient text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-[0_10px_25px_rgba(220,70,122,0.25)]">
              Start Sharing Smarter
            </button>
            <button className="bg-white text-dark-bg px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
              Explore features
            </button>
          </motion.div>
        </section>

        {/* Mockup 1: Export Settings Dialog Mockup */}
        <section className="container-custom max-w-5xl pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#121214] rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden relative h-[500px]"
          >
            {/* Topbar Fake */}
            <div className="absolute top-4 left-6 flex items-center gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-zinc-500 text-xs font-bold uppercase tracking-widest z-10">
              BTCUSD • 4H • Overview Play
            </div>

            {/* Left Toolbar Fake */}
            <div className="absolute left-6 top-16 bottom-16 w-12 bg-black/40 rounded-xl border border-white/5 flex flex-col items-center py-4 gap-4 z-10">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"></div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"></div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"></div>
            </div>

            {/* Background Chart area */}
            <div className="absolute inset-0 bg-[#0A0A0C] flex items-center justify-center opacity-80">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border border-white" />
                ))}
              </div>

              {/* MAs */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 400">
                <path d="M0 300 Q 200 280 500 200 T 1000 100" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M0 350 Q 300 320 600 250 T 1000 150" fill="none" stroke="#F59E0B" strokeWidth="2" />
              </svg>

              {/* Candles */}
              <div className="relative flex items-end justify-center gap-6 md:gap-12 w-full h-full pb-20 pr-[300px]">
                {[
                  { h: 40, type: 'red', y: 40 },
                  { h: 60, type: 'green', y: 60 },
                  { h: 50, type: 'green', y: 80 },
                  { h: 30, type: 'red', y: 70 },
                  { h: 90, type: 'green', y: 110 },
                  { h: 120, type: 'green', y: 150, dot: true },
                ].map((candle, i) => (
                  <div key={i} className="relative flex flex-col items-center" style={{ transform: `translateY(-${candle.y}px)` }}>
                    <div className={`w-0.5 h-40 absolute top-1/2 -translate-y-1/2 ${candle.type === 'green' ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
                    <div className={`w-5 rounded-sm relative z-10 ${candle.type === 'green' ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${candle.h}px` }} />
                    {candle.dot && (
                      <>
                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#1A1A1C] text-yellow-500 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-yellow-500/50 whitespace-nowrap z-20 shadow-xl">
                          Breakout Confirmed!
                        </div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-yellow-500/50 z-10" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay Dialogue Panel */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[340px] bg-[#121214]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 z-20">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <h3 className="text-white font-bold text-base">Export Screenshot</h3>
                </div>
                <button className="text-zinc-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 text-center">Select a Format</div>
                  <div className="flex bg-[#0C0C0E] border border-white/5 rounded-lg p-1">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-brand-pink text-white text-xs font-bold py-2 rounded shadow-lg">
                      4K PNG (Pro)
                    </button>
                    <button className="flex-1 text-zinc-400 hover:text-white transition-colors text-xs font-bold py-2 rounded">
                      Standard JPG
                    </button>
                  </div>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Include Drawings</span>
                    <div className="w-10 h-6 bg-brand-orange rounded-full relative cursor-pointer shadow-inner">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-zinc-400">Watermark</span>
                    <div className="w-10 h-6 bg-white/10 rounded-full relative cursor-pointer shadow-inner">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-zinc-400 rounded-full shadow" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <button className="w-full bg-brand-gradient text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    Share Instantly
                  </button>
                  <button className="w-full bg-[#18181A] border border-white/10 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    Download to Device
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Floating Tools Fake */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border-4 border-[#121214] shadow-lg" />
              <div className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-md">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Features Grid */}
        <section className="py-20 relative border-t border-white/5 bg-dark-bg">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Screenshots</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                Designed for Fast-Moving <br /> Traders
              </h2>
              <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
                Build a seamless process from analysis to communication without ever leaving your charts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 group">
                  <div className="w-14 h-14 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 border border-brand-orange/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,126,95,0.2)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Trade Analysis Mockup */}
        <section className="py-24 relative bg-[#0F0F11]">
          <div className="container-custom max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Text */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-brand-orange" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Trade Analysis</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                  From Chart to <br />
                  Shareable Insight in <br />
                  Seconds
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
                  The Screenshot Export & Sharing tool lets you capture your trading setup exactly as you see it — complete with drawings, indicators, and notes. Whether you're analyzing entries or explaining market structure, you can export your screen in high resolution without losing clarity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-zinc-300 font-medium">Capture full or selected chart areas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-zinc-300 font-medium">Instant sharing to social or community feeds</span>
                  </li>
                </ul>
              </div>

              {/* Right Mockup */}
              <div className="bg-[#121214] border border-white/10 rounded-3xl shadow-2xl p-8 relative flex flex-col gap-4 max-w-md ml-auto w-full">
                {/* Setting Row 1 */}
                <div className="bg-[#18181A] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">High-Res Capture</h4>
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">4K Quality PNG output</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500/20 border border-emerald-500/30 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>
                </div>

                {/* Setting Row 2 */}
                <div className="bg-[#18181A] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center border border-brand-orange/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Smart Annotations</h4>
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Keep drawings & notes intact</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-brand-orange/20 border border-brand-orange/30 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_10px_rgba(255,126,95,0.8)]" />
                  </div>
                </div>

                {/* Setting Row 3 */}
                <div className="bg-[#18181A] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">One-Click Distro</h4>
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">To Twitter, Telegram & Feed</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-blue-500/20 border border-blue-500/30 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
