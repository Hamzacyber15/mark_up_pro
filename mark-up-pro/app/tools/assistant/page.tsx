"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";

export default function AssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center text-center px-4 relative">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-pink/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 relative z-10"
          >
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-300">New Look — 10,000+ Traders already on board</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-6 leading-tight text-white relative z-10"
          >
            Your AI That Understands <br />
            the Chart — <span className="text-brand-gradient">Not Just Text</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-lg font-medium mb-10 relative z-10"
          >
            A trading-native assistant embedded directly into your charts. Ask questions, get <br className="hidden md:block" />
            structured answers, and improve every decision in real time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            <button className="bg-brand-gradient text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-[0_10px_25px_rgba(220,70,122,0.25)]">
              Open AI Assistant
            </button>
            <button className="bg-white text-dark-bg px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
              Try on chart
            </button>
          </motion.div>
        </section>

        {/* Mockup 1: Dashboard Assistant Split */}
        <section className="container-custom max-w-5xl pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#121214] rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col md:flex-row h-auto md:h-[550px]"
          >
            {/* Left: Chart Area */}
            <div className="flex-1 bg-[#0C0C0E] border-b md:border-b-0 md:border-r border-white/5 flex flex-col relative">
              <div className="h-14 border-b border-white/5 flex justify-between items-center px-6">
                <div className="flex items-center gap-3">
                  <span className="text-white font-orbitron font-bold">XAUUSD</span>
                  <span className="text-emerald-500 font-bold">$2,384.50</span>
                  <span className="text-emerald-500 text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">+0.45%</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500">
                  <span className="hover:text-white cursor-pointer px-1">1M</span>
                  <span className="hover:text-white cursor-pointer px-1">5M</span>
                  <span className="text-white bg-white/10 rounded px-2 py-0.5 cursor-pointer">15M</span>
                  <span className="hover:text-white cursor-pointer px-1">1H</span>
                  <span className="hover:text-white cursor-pointer px-1">4H</span>
                  <span className="hover:text-white cursor-pointer px-1">1D</span>
                </div>
              </div>

              <div className="flex-1 relative p-6 overflow-hidden flex flex-col justify-end">
                {/* Fake chart elements */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5 pointer-events-none">
                  {Array.from({ length: 72 }).map((_, i) => (
                    <div key={i} className="border border-white" />
                  ))}
                </div>

                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-500/30 -rotate-12 translate-y-[-50px]" />
                <div className="absolute top-1/2 left-1/2 bg-[#1A1A1C] border border-blue-500/50 text-blue-400 px-2 py-0.5 rounded text-[8px] font-bold uppercase -rotate-12 translate-x-[-120px] translate-y-[-75px]">
                  Half Trend
                </div>

                {/* Candlesticks */}
                <div className="relative flex items-end justify-between gap-2 md:gap-4 w-full h-48 px-4 z-10 mb-8">
                  {[
                    { h: 60, type: 'red', y: 0 },
                    { h: 40, type: 'red', y: -20 },
                    { h: 80, type: 'green', y: 20 },
                    { h: 50, type: 'green', y: 40 },
                    { h: 90, type: 'red', y: 50 },
                    { h: 70, type: 'green', y: 70 },
                    { h: 100, type: 'green', y: 90 },
                    { h: 60, type: 'red', y: 80 },
                    { h: 120, type: 'green', y: 110, dot: true },
                  ].map((candle, i) => (
                    <div key={i} className="relative flex flex-col items-center group" style={{ transform: `translateY(-${candle.y}px)` }}>
                      <div className={`w-0.5 h-32 absolute top-1/2 -translate-y-1/2 ${candle.type === 'green' ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
                      <div className={`w-4 rounded-sm relative z-10 ${candle.type === 'green' ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${candle.h}px` }} />
                      {candle.dot && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500/20 text-emerald-400 text-[8px] px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap">
                          + Indicator
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Volume bars */}
                <div className="h-16 flex items-end justify-between gap-1 w-full opacity-30 mt-auto px-4 relative z-0">
                  {[30, 45, 20, 60, 40, 80, 50, 70, 90].map((v, i) => (
                    <div key={i} className={`w-full ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: AI Assistant Panel */}
            <div className="w-full md:w-[380px] bg-[#121214] flex flex-col relative">
              <div className="h-14 border-b border-white/5 flex justify-between items-center px-6 bg-[#18181A]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-white font-bold text-sm">Trading Assistant</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-medium">
                {/* User Bubble 1 */}
                <div className="flex justify-end">
                  <div className="bg-brand-gradient text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg">
                    What's my play on Gold right now?
                  </div>
                </div>

                {/* AI Bubble 1 */}
                <div className="flex justify-start">
                  <div className="bg-[#1A1A1C] border border-white/5 text-zinc-300 px-4 py-3 rounded-2xl rounded-tl-sm w-full shadow-lg">
                    <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                      <div className="w-4 h-4 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <span className="font-bold text-white font-orbitron">XAUUSD</span>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Bias</span>
                        <span className="text-emerald-500 font-bold">Bullish</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Structure</span>
                        <span className="text-emerald-500 font-bold">Valid</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Support</span>
                        <span className="text-red-500 font-bold font-orbitron">2374.5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Resistance</span>
                        <span className="text-red-500 font-bold font-orbitron">2388.1</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-relaxed text-[11px]">
                      Price just broke out above the consolidation pattern on 15M.
                    </p>
                  </div>
                </div>

                {/* User Bubble 2 */}
                <div className="flex justify-end">
                  <div className="bg-brand-gradient text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg">
                    Is this a valid break out trade?
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/5 bg-[#18181A]">
                <div className="bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                  <input 
                    type="text" 
                    placeholder="Ask AI Assistant..." 
                    className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-zinc-600"
                  />
                  <button className="text-brand-orange hover:text-brand-pink transition-colors shrink-0 ml-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Feature Banner */}
        <section className="bg-brand-gradient py-16 relative overflow-hidden">
          {/* subtle mesh texture overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
          
          <div className="container-custom max-w-6xl relative z-10">
            <div className="grid md:grid-cols-3 gap-12 text-center text-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md border border-white/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-orbitron">Chart-native <br/> understanding</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                  Reads your exact levels, trendlines, zones, and order blocks in plain mathematical formats.
                </p>
              </div>
              
              <div className="flex flex-col items-center relative">
                {/* Separators for desktop */}
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-white/20" />
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-white/20" />
                
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md border border-white/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-orbitron">Real-time <br/> feedback loop</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                  AI assistant analyzes the market context — not a summary after the fact.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md border border-white/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-orbitron">Structured, <br/> not vague</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                  Clear bias, structural review, R/R ratios, and setup quality — no fluff, no bull.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Structured Trade Feedback */}
        <section className="py-24 relative bg-[#0A0A0C]">
          <div className="container-custom max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Text */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-brand-orange" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Trade Analysis</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                  Structured Trade <br /> Feedback
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base max-w-lg">
                  Get clear, actionable feedback based on your setup — not vague suggestions. Every output is structured and decision-ready.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bias direction with confidence level",
                    "Market structure validation",
                    "Final verdict on setup quality",
                    "Entry, SL, and TP positioning"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Mockup */}
              <div className="bg-[#121214] border border-white/10 rounded-2xl shadow-2xl p-8 relative">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <h4 className="text-white font-bold font-orbitron flex items-center gap-2">
                    AUD/USD — 1H Setup
                  </h4>
                  <div className="bg-brand-pink/20 text-brand-pink px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-pink/30">
                    AI Analysis
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#18181A] border border-white/5 rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 border border-red-500/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">Bias</div>
                      <div className="text-zinc-400 text-xs">Bearish</div>
                    </div>
                  </div>

                  <div className="bg-[#18181A] border border-white/5 rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">Risk / Reward</div>
                      <div className="text-zinc-400 text-xs">1 : 2.1</div>
                    </div>
                  </div>

                  <div className="bg-[#18181A] border border-white/5 rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">Entry Zone</div>
                      <div className="text-zinc-400 text-xs font-orbitron">0.6450 - 0.6470</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Speak Your Trade */}
        <section className="py-24 relative bg-[#121214] border-t border-white/5">
          <div className="container-custom max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Mockup */}
              <div className="bg-[#18181A] border border-white/10 rounded-3xl shadow-2xl p-8 relative flex flex-col items-center text-center max-w-md mx-auto w-full lg:order-1 order-2">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-brand-orange/20 rounded-full animate-ping" />
                  <svg className="w-6 h-6 text-brand-orange relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
                
                <h4 className="text-white font-bold mb-8">Recording trade idea...</h4>
                
                <div className="bg-[#0C0C0E] border border-emerald-500/20 rounded-2xl p-6 text-left w-full relative">
                  <div className="absolute -top-3 left-6 bg-[#0C0C0E] px-2 flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    AI Transcription
                  </div>
                  
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                    "I'm looking at a bullish setup on Gold 1H. Price reacting off the 2,340 support zone. Macros looking heavily leading to 2,352 where I place limit TP at 2,388 for roughly 1:7 R/R. Fundamentals check out for NFP week."
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Long
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> XAUUSD
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 text-blue-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Setup
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:order-2 order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-brand-orange" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Trade Analysis</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                  Speak Your <br /> Trade. We Log It.
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base max-w-lg">
                  Describe your trade idea using voice. AI transcribes it, structures it, and stores it alongside a snapshot of your chart — automatically.
                </p>
                <ul className="space-y-4">
                  {[
                    "AI converts speech to structured trade notes",
                    "Chart snapshot auto-attached to each entry",
                    "Build a searchable trading journal effortlessly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/30 shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
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
