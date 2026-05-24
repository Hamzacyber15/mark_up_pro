"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";

export default function EducationLayerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center text-center px-4 relative">
          {/* Background glows */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-300">Join Us — 4,323+ Traders already on board</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-6 leading-tight text-white relative z-10"
          >
            Learn <span className="text-brand-orange">Trading</span> Inside <br />
            the Chart
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-lg font-medium mb-10 relative z-10"
          >
            The first charting platform where learning is built directly into the tool — not <br className="hidden md:block" />
            hidden in courses.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            <button className="bg-brand-gradient text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity">
              Start learning
            </button>
            <button className="bg-white text-dark-bg px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
              Explore features
            </button>
          </motion.div>
        </section>

        {/* Mockup 1: Simple ChartLearn */}
        <section className="container-custom max-w-5xl pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#121214] rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden relative"
          >
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#18181A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-zinc-400 font-orbitron font-bold text-sm tracking-wider">
                BTCUSD_HM_CHARTLEARN
              </div>
              <div className="bg-brand-gradient bg-opacity-20 px-4 py-1.5 rounded-full border border-brand-orange/30">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Curated Study Market</span>
              </div>
            </div>
            
            <div className="h-[400px] relative p-8 bg-[#0C0C0E] overflow-hidden">
              {/* Candlesticks mock */}
              <div className="absolute inset-0 flex items-center justify-center gap-6 mt-12">
                {[
                  { h: 60, type: 'red', y: 40 },
                  { h: 40, type: 'green', y: 80 },
                  { h: 80, type: 'green', y: 60 },
                  { h: 50, type: 'green', y: 40 },
                  { h: 100, type: 'green', y: 20 },
                  { h: 70, type: 'red', y: -10 },
                  { h: 90, type: 'green', y: 30 },
                ].map((candle, i) => (
                  <div key={i} className="relative flex flex-col items-center" style={{ transform: `translateY(${candle.y}px)` }}>
                    <div className={`w-0.5 h-32 absolute top-1/2 -translate-y-1/2 ${candle.type === 'green' ? 'bg-emerald-500/50' : 'bg-red-500/50'}`} />
                    <div className={`w-4 rounded-sm relative z-10 ${candle.type === 'green' ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${candle.h}px` }} />
                  </div>
                ))}
              </div>

              {/* Pattern Confirmed Box */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute left-10 top-16 bg-[#1A1A1C]/80 backdrop-blur-sm border border-brand-orange p-4 rounded-lg max-w-[200px]"
              >
                <h4 className="text-brand-orange text-[10px] font-bold uppercase tracking-widest mb-2">Pattern Confirmed</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Double Bottom structure. Pattern defined at 4.2h base of liquidity.
                </p>
              </motion.div>

              {/* Support Level Box */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute right-12 top-10 bg-[#1A1A1C]/80 backdrop-blur-sm border border-yellow-500 p-4 rounded-lg max-w-[200px]"
              >
                <h4 className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-2">Support Level</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Strong volume by buyers in this zone. Watch for a bounce.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: The Learning Shift */}
        <section className="py-20 bg-dark-bg relative border-t border-white/5">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">The Learning Shift</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                The First Charting Platform <br />
                That Teaches You as You Trade
              </h2>
              <p className="text-zinc-400 max-w-3xl text-sm md:text-base leading-relaxed">
                Traditional platforms separate learning from execution. You watch video modules, then try to apply concepts <br className="hidden md:block" />
                on your own — often getting lost in translation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
              {/* Left Column */}
              <div className="bg-[#121214] border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px]" />
                
                <div className="w-14 h-14 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mb-8 border border-red-500/30 relative z-10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Isolated Theory</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 relative z-10">
                  Watch countless hours of video tutorials on side tabs. Draw structures blindly on your empty chart and hope you identified the setups correctly.
                </p>
                
                <ul className="space-y-5 relative z-10">
                  {[
                    "No real-time confirmation of your analysis",
                    "Easy to make bad habits on live charts",
                    "High cognitive load switching tabs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 text-red-500">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </div>
                      <span className="text-zinc-300 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="bg-[#121214] border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
                
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-8 border border-emerald-500/30 relative z-10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Interactive Guidance</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 relative z-10">
                  Every tool, every candlestick, and every structural swing becomes a dynamic lesson in context. Understand not just what to click, but exactly why.
                </p>
                
                <ul className="space-y-5 relative z-10">
                  {[
                    "Direct, real-time validation of your markups",
                    "Step-by-step interactive lesson pathways",
                    "Eliminates guesswork & builds system discipline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-500">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-zinc-300 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Repeated text + Mockup 2 */}
        <section className="py-20 relative">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">The Learning Shift</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                The First Charting Platform <br />
                That Teaches You as You Trade
              </h2>
              <p className="text-zinc-400 max-w-3xl text-sm md:text-base leading-relaxed">
                Traditional platforms separate learning from execution. You watch video modules, then try to apply concepts <br className="hidden md:block" />
                on your own — often getting lost in translation.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#121214] rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden max-w-5xl mx-auto flex flex-col"
            >
              {/* Toolbar */}
              <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-[#18181A]">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <span className="text-brand-orange">M</span> BTCUSD_1D
                  </div>
                  <div className="hidden md:flex items-center gap-4 text-xs font-medium text-zinc-500">
                    <span>Open: <span className="text-white">6.230</span></span>
                    <span>High: <span className="text-emerald-500">6.450</span></span>
                    <span>Low: <span className="text-red-500">6.120</span></span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <div className="bg-brand-gradient bg-opacity-20 text-white px-3 py-1.5 rounded-lg border border-brand-orange/30 cursor-pointer">
                    Standard Chart
                  </div>
                  <div className="text-zinc-500 hover:text-white transition-colors cursor-pointer hidden sm:block">Compare Markets</div>
                  <div className="text-zinc-500 hover:text-white transition-colors cursor-pointer hidden sm:block">Save Layout</div>
                </div>
              </div>

              <div className="flex h-[500px]">
                {/* Left Sidebar */}
                <div className="w-[280px] border-r border-white/5 bg-[#0A0A0C] p-6 flex flex-col hidden md:flex">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Chart Tasks</h4>
                  
                  <div className="space-y-2 flex-grow">
                    <div className="bg-[#1A1A1C] border border-emerald-500/30 rounded-lg p-3 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-500/20 text-emerald-500">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white text-sm font-medium">Trend Line</span>
                      </div>
                      <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    
                    <div className="bg-[#1A1A1C] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-3 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center bg-white/5 text-zinc-500">
                          <div className="w-2 h-2 rounded-sm bg-current" />
                        </div>
                        <span className="text-zinc-400 text-sm font-medium">Support Zone</span>
                      </div>
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>

                    <div className="bg-[#1A1A1C] border border-white/5 hover:border-white/10 transition-colors rounded-lg p-3 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center bg-white/5 text-zinc-500">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </div>
                        <span className="text-zinc-400 text-sm font-medium">Fibonacci Retracement</span>
                      </div>
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>

                  <div className="bg-[#1A1A1C] border border-emerald-500/20 rounded-xl p-4 mb-4">
                    <h5 className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Lesson Info
                    </h5>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Trend lines are dynamic lines that connect a series of data points. They are used by traders to identify the direction of the market.
                    </p>
                  </div>

                  <button className="bg-brand-gradient w-full py-3 rounded-lg text-white text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                    Mark the chart
                  </button>

                  <div className="mt-6 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest font-bold border-t border-white/5 pt-4">
                    <span>Module 1/4 - Master the Trend</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Main Chart Area */}
                <div className="flex-1 bg-[#0C0C0E] relative p-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5 pointer-events-none">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <div key={i} className="border border-white" />
                    ))}
                  </div>

                  {/* Candlesticks */}
                  <div className="relative flex items-center justify-center gap-8 md:gap-12 w-full h-full">
                    {[
                      { h: 70, type: 'red', y: 0 },
                      { h: 90, type: 'red', y: 30 },
                      { h: 40, type: 'green', y: 50 },
                      { h: 80, type: 'green', y: 20 },
                      { h: 60, type: 'red', y: 40 },
                      { h: 110, type: 'green', y: -10, dot: true },
                    ].map((candle, i) => (
                      <div key={i} className="relative flex flex-col items-center group" style={{ transform: `translateY(${candle.y}px)` }}>
                        <div className={`w-0.5 h-40 absolute top-1/2 -translate-y-1/2 ${candle.type === 'green' ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
                        <div className={`w-6 rounded-sm relative z-10 transition-transform group-hover:scale-105 cursor-pointer ${candle.type === 'green' ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${candle.h}px` }}>
                          {candle.dot && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Watermark */}
                  <div className="absolute bottom-4 right-6 text-zinc-700 font-orbitron text-xs tracking-widest">
                    MARKUP PRO V.1.0
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
