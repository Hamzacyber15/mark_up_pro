"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";

export default function SocialCommunityPage() {
  const features = [
    {
      icon: "➕",
      title: "Technical Structured Formats",
      desc: "Say goodbye to vague descriptions. Strict data matrices, HTF bias, entry triggers, and key structural levels. Comparable data points make insights useful."
    },
    {
      icon: "🤖",
      title: "Automated AI Moderation Layer",
      desc: "Our internal visual scanner simulates structure validity instantly, weeding out spam, noisy memes, and random signal advertisements."
    },
    {
      icon: "📚",
      title: "Education & Academy Ecosystems",
      desc: "Integrated homework hubs where teachers evaluate direct chart drawings, offering detailed step-by-step markups on student errors."
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
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-300">Join 10,000+ Active Traders</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-6 leading-tight text-white relative z-10"
          >
            A Trading Community Built <br />
            Around <span className="text-brand-gradient">Real Markups</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-lg font-medium mb-10 relative z-10"
          >
            Share your charts, get structured feedback, and improve through objective <br className="hidden md:block" />
            trading insights — not just opinions. No clutter. Just pure trading intelligence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            <button className="bg-brand-gradient text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-[0_10px_25px_rgba(220,70,122,0.25)]">
              Explore Community Features
            </button>
            <button className="bg-white text-dark-bg px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
              Explore Features
            </button>
          </motion.div>
        </section>

        {/* Mockup 1: Feed Post */}
        <section className="container-custom max-w-4xl pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#121214] rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden relative p-8"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              {/* User Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500 font-bold font-orbitron">
                    MK
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-lg">Marcus King</h4>
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      FX Structural Analyst — EURUSD
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Chart Accuracy : 94%
                </div>
              </div>

              {/* Chart Image Mockup */}
              <div className="bg-[#0C0C0E] border border-white/5 rounded-xl h-64 mb-6 relative overflow-hidden flex items-center justify-center p-8">
                {/* Chart elements */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 10 80 Q 30 20 50 40 T 90 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
                
                <div className="relative w-full max-w-md h-full flex items-end justify-between px-10">
                  {[
                    { h: 30, type: 'red', y: -20 },
                    { h: 40, type: 'red', y: -10 },
                    { h: 50, type: 'green', y: 10 },
                    { h: 70, type: 'green', y: 30 },
                    { h: 60, type: 'red', y: 40 },
                    { h: 80, type: 'green', y: 60 },
                  ].map((candle, i) => (
                    <div key={i} className="relative flex flex-col items-center" style={{ transform: `translateY(-${candle.y}px)` }}>
                      <div className={`w-0.5 h-24 absolute top-1/2 -translate-y-1/2 ${candle.type === 'green' ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
                      <div className={`w-3 rounded-sm relative z-10 ${candle.type === 'green' ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${candle.h}px` }} />
                    </div>
                  ))}
                  
                  {/* Floating target dot */}
                  <div className="w-4 h-4 rounded-full bg-blue-500/50 border border-blue-500 absolute right-8 top-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>

                <div className="absolute bottom-6 left-6 bg-[#1A1A1C]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">4H Macro Trend Aligned</span>
                </div>
              </div>

              {/* Data Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-[#18181A] rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Bias</div>
                  <div className="text-emerald-500 font-bold flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    Bullish
                  </div>
                </div>
                <div className="bg-[#18181A] rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Entry</div>
                  <div className="text-white font-orbitron font-bold">1.0820</div>
                </div>
                <div className="bg-[#18181A] rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Invalidation</div>
                  <div className="text-red-500 font-orbitron font-bold">1.0780</div>
                </div>
                <div className="bg-[#18181A] rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Target</div>
                  <div className="text-emerald-500 font-orbitron font-bold">1.0920</div>
                </div>
              </div>

              {/* Comment */}
              <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center font-bold text-xs shrink-0">
                    SJ
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-sm font-bold">Sarah Jenkins</span>
                      <span className="text-zinc-600 text-[10px]">12 mins ago</span>
                    </div>
                    <p className="text-zinc-400 text-sm">
                      Excellent consolidation phase setup. The bias holds well on 1H structure...
                    </p>
                  </div>
                </div>
                
                <button className="bg-brand-purple/10 border border-brand-purple/20 text-brand-purple px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-purple/20 transition-colors shrink-0">
                  💬 3 Replies | View All Specs
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Features Grid */}
        <section className="py-20 bg-[#0F0F11] border-y border-white/5 relative">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Social Community</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                Not just publishing. A feedback-<br /> driven trading network.
              </h2>
              <p className="text-zinc-400 max-w-3xl text-sm md:text-base leading-relaxed">
                Every chart you share becomes part of an in-platform educational loop — analyzed dynamically by high-level professionals and moderated by machine-learning mechanics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                <div key={i} className="bg-[#141416] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-6 ${i === 0 ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30' : i === 1 ? 'bg-brand-pink/20 text-brand-pink border border-brand-pink/30' : 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30'} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Strict Reviews */}
        <section className="py-24 relative">
          <div className="container-custom max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Text */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-brand-orange" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Trade Analysis</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                  Strict reviews, <br />
                  monitored for <br />
                  quality and insight.
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
                  Say goodbye to generic comments like "great post" or "to the moon!". TradeFlyte incorporates a natural community-driven grading system for structural analysis. Our integrated moderation scanner flags low-effort messages and highlights precise, data-rich commentary that advances educational metrics automatically.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-zinc-300 font-medium">AI-categorized insights automatically tagged</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-zinc-300 font-medium">Spam comments and signals filtered immediately</span>
                  </li>
                </ul>
              </div>

              {/* Right Mockup */}
              <div className="bg-[#121214] border border-white/10 rounded-2xl shadow-2xl p-6 relative">
                <div className="absolute inset-0 bg-brand-pink/5 rounded-2xl blur-xl pointer-events-none" />
                
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4 relative z-10">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Markup Reviews | Interactive Thread Views
                  </h4>
                  <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                    Live Chat Active
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Comment 1 */}
                  <div className="bg-[#18181A] rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-[10px] font-bold">SJ</div>
                        <span className="text-white text-sm font-bold">Sarah Jenkins</span>
                      </div>
                      <span className="text-zinc-600 text-[10px]">2 mins ago</span>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed ml-8">
                      Built a nice support level at 1.0820, I suggest the invalidation sits slightly lower, 1.0775 level to account for potential institutional liquidity grabs.
                    </p>
                  </div>

                  {/* Comment 2 (Reply) */}
                  <div className="bg-[#1A1A1C] rounded-xl p-4 border border-white/5 ml-8 relative before:absolute before:left-[-16px] before:top-[-20px] before:bottom-1/2 before:w-4 before:border-l before:border-b before:border-white/10 before:rounded-bl-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px] font-bold">MK</div>
                        <span className="text-white text-sm font-bold">Marcus King</span>
                      </div>
                      <span className="text-zinc-600 text-[10px]">Just now</span>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed ml-8">
                      Agree with the structure but the pullback might hit the demand node first. You're right to widen the stop a bit. Good analysis!
                    </p>
                  </div>

                  {/* Input Box */}
                  <div className="bg-[#0C0C0E] border border-white/10 rounded-xl p-4 mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-xs">
                        ME
                      </div>
                      <input 
                        type="text" 
                        placeholder="Type your insightful review..." 
                        className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-zinc-600"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center border-t border-white/5 pt-3">
                      <div className="flex items-center gap-3">
                        <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          Add Drawing
                        </button>
                        <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Attach Shot
                        </button>
                      </div>
                      
                      <button className="bg-brand-orange text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                        Add Review
                      </button>
                    </div>
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
