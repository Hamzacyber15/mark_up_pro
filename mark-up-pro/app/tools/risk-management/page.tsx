"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";

export default function RiskManagementPage() {
  const features = [
    {
      icon: "🛡️",
      title: "Absolute Protection",
      desc: "Prevent payouts without drawdown verification. Protect account drawdown limits automatically by locking margins prior to trigger point boundaries."
    },
    {
      icon: "🔄",
      title: "Auto Correlations",
      desc: "Prevent disastrous trading in highly correlated assets. Detect overlap exposure across cross indices or currencies directly."
    },
    {
      icon: "⚡",
      title: "Real-Time Sizing Math",
      desc: "Automatic leverage and unit size calculation under 10 milliseconds. Adapts dynamically to account equity."
    },
    {
      icon: "⚖️",
      title: "Flexible R/R Thresholds",
      desc: "Lock customized minimum acceptable reward profiles. Visually envelope optimal justification prior to entering any UI field."
    },
    {
      icon: "📋",
      title: "Predefined Presets",
      desc: "Configure logical risk limits directly with presets matching parameters from major prop firms like FTMO."
    },
    {
      icon: "🔔",
      title: "Smart Loss Audio Alerts",
      desc: "Integrated native browser synthesizers playing protective alert cues as trades approach close limit parameters."
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
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-300">Rule #1: Protect Your Drawdown</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-6 leading-tight text-white relative z-10"
          >
            <span className="text-brand-gradient">Control Risk</span> Before <br />
            It Controls You
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-lg font-medium mb-10 relative z-10"
          >
            Embedded risk tools that work directly on your chart — helping you trade with <br className="hidden md:block" />
            strict mathematical discipline, not visual guesswork or emotion.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            <button className="bg-brand-gradient text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-[0_10px_25px_rgba(220,70,122,0.25)]">
              Start Managing Risk
            </button>
            <button className="bg-white text-dark-bg px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
              Explore features
            </button>
          </motion.div>
        </section>

        {/* Mockup 1: Position Risk Matrix */}
        <section className="container-custom max-w-5xl pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#121214] rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden relative"
          >
            {/* Topbar */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#18181A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /></div>
              </div>
              <div className="text-zinc-400 font-orbitron font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                BTCUSD 1H - POSITION RISK MATRIX
              </div>
              <div className="bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live Active</span>
              </div>
            </div>
            
            <div className="p-6 bg-[#0C0C0E] relative flex flex-col h-[500px]">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8 relative z-10">
                <div className="bg-[#1A1A1C] border border-white/5 rounded-xl p-4">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Potential Gain</div>
                  <div className="text-emerald-500 font-orbitron font-bold text-2xl">+$2,500.00</div>
                </div>
                <div className="bg-[#1A1A1C] border border-white/5 rounded-xl p-4">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Max Risk</div>
                  <div className="text-red-500 font-orbitron font-bold text-2xl">-$1,000.00</div>
                </div>
                <div className="bg-[#1A1A1C] border border-white/5 rounded-xl p-4">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Position Size</div>
                  <div className="text-white font-orbitron font-bold text-2xl">0.58 Lots</div>
                </div>
              </div>

              {/* Main Chart Risk Area */}
              <div className="flex-1 border border-white/5 rounded-xl relative overflow-hidden bg-[#121214]">
                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                  <span className="text-9xl font-orbitron font-bold whitespace-nowrap text-white tracking-widest">R : R  2 . 5 0</span>
                </div>

                {/* Top Green Zone */}
                <div className="absolute top-0 left-0 right-0 bottom-1/2 bg-emerald-500/5 border-b border-white/10" />
                
                {/* Bottom Red Zone */}
                <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-red-500/5" />

                {/* Lines */}
                <div className="absolute top-[20%] left-0 right-0 flex items-center justify-end px-6 group cursor-pointer">
                  <div className="h-[1px] bg-emerald-500/50 w-full absolute left-0" />
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest relative z-10">
                    Take Profit (Hit: 2.5R)
                  </div>
                </div>

                <div className="absolute top-1/2 left-0 right-0 flex items-center justify-end px-6 group cursor-pointer -translate-y-1/2">
                  <div className="h-[1px] bg-white/30 border-dashed border-b border-white/30 w-full absolute left-0" />
                  <div className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest relative z-10">
                    Entry Point (65,540.00)
                  </div>
                </div>

                <div className="absolute top-[80%] left-0 right-0 flex items-center justify-end px-6 group cursor-pointer">
                  <div className="h-[1px] bg-red-500/50 w-full absolute left-0" />
                  <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest relative z-10">
                    Stop Loss (Hit: -1.0R)
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-6">
                  <span className="text-zinc-400">Account : <span className="text-white">$100,000</span></span>
                  <span className="text-zinc-400">Allowed Risk : <span className="text-red-500">1.0%</span></span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Risk Engine Ready
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Features Grid */}
        <section className="py-20 relative bg-dark-bg border-t border-white/5">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Mathematical Edge</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                Engineered for Mathematical <br /> Discipline
              </h2>
              <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
                Discover why professional quantitative analysts and traders choose our integrated suite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <div key={i} className="bg-[#121214] border border-white/5 hover:border-white/10 transition-colors p-8 rounded-2xl group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xl mb-6 border border-brand-orange/20 group-hover:scale-110 transition-transform">
                    {feature.icon}
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

        {/* Section 2: Live Risk Sandbox */}
        <section className="py-24 relative">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Live Risk Sandbox</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                Chart-Based Risk Calculator
              </h2>
              <p className="text-zinc-400 max-w-3xl text-sm md:text-base leading-relaxed">
                True risk-free mastermind control. Drag the entry, target (take profit), or risk (stop loss) lines directly on the chart <br className="hidden md:block" />
                to dynamically calculate your parameters instantly.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {/* Left Chart Panel */}
              <div className="lg:col-span-2 bg-[#121214] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
                <div className="h-12 border-b border-white/5 bg-[#18181A] px-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    Portfolio Position Simulator - USD ($100k prop firm)
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                    Simulation Running
                  </div>
                </div>

                <div className="flex-1 bg-[#0C0C0E] relative p-6">
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  
                  {/* Fake Price Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 400">
                    <path d="M0 250 L100 280 L200 210 L300 240 L400 180 L500 220 L600 150 L700 200 L800 120 L900 190 L1000 160" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinejoin="round" />
                  </svg>

                  {/* Lines */}
                  <div className="absolute top-[25%] left-0 right-0 flex items-center justify-end px-6">
                    <div className="h-px bg-emerald-500/50 w-full absolute left-0" />
                    <div className="bg-[#1A1A1C] border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold font-orbitron relative z-10 flex items-center gap-2 shadow-lg cursor-ns-resize hover:bg-emerald-500/10 transition-colors">
                      Target : PL + $5,123.75
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-0 right-0 flex items-center justify-end px-6 -translate-y-1/2">
                    <div className="h-px bg-blue-500/50 w-full absolute left-0" />
                    <div className="bg-[#1A1A1C] border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-lg text-xs font-bold font-orbitron relative z-10 flex items-center gap-2 shadow-lg cursor-ns-resize hover:bg-blue-500/10 transition-colors">
                      Entry : 62,342.11
                    </div>
                  </div>

                  <div className="absolute top-[70%] left-0 right-0 flex items-center justify-end px-6">
                    <div className="h-px bg-red-500/50 w-full absolute left-0" />
                    <div className="bg-[#1A1A1C] border border-red-500/30 text-red-400 px-3 py-1.5 rounded-lg text-xs font-bold font-orbitron relative z-10 flex items-center gap-2 shadow-lg cursor-ns-resize hover:bg-red-500/10 transition-colors">
                      Stop Loss : PL -$2,110.15
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="absolute bottom-10 left-6 bg-[#1A1A1C] border border-white/10 rounded-xl p-5 shadow-xl flex gap-12">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Risk : Reward</div>
                      <div className="text-2xl font-bold font-orbitron text-white">1 : 1.67</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Status</div>
                      <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mt-2 bg-brand-orange/10 px-2 py-1 rounded inline-block border border-brand-orange/20">
                        Excellent
                      </div>
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="absolute bottom-4 right-6 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                    Sandbox Mode - Simulation completely Visual - Not Financial Advice
                  </div>
                </div>
              </div>

              {/* Right Control Panel */}
              <div className="bg-[#121214] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full min-h-[600px]">
                <div className="p-6 border-b border-white/5 bg-[#18181A]">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                    Control Parameters
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">Drag your levels on the chart and lock in the estimate below.</p>
                </div>

                <div className="p-6 flex-1 flex flex-col gap-6 bg-[#0C0C0E]">
                  <div>
                    <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      <span>Account Balance</span>
                      <span className="text-white">$100,000</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-zinc-500 sm:text-sm">$</span>
                      </div>
                      <input type="text" className="w-full bg-[#1A1A1C] border border-white/10 rounded-lg py-3 pl-7 pr-3 text-white font-orbitron font-bold text-sm focus:outline-none focus:border-brand-orange transition-colors" defaultValue="100000" />
                    </div>
                  </div>

                  <div>
                    <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      <span>Account Risk (%)</span>
                      <span className="text-brand-orange">1.50%</span>
                    </label>
                    <div className="relative pt-2">
                      <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
                        <div className="h-full bg-brand-orange w-[15%]" />
                      </div>
                      <div className="absolute top-1 left-[15%] w-3 h-3 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,126,95,0.8)] -translate-x-1.5 cursor-pointer" />
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Max Risk (Stop Loss Amount)</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-400">Interactive PL</span>
                        <span className="text-red-400 font-orbitron font-bold">-$1,500.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-400">Manual PL Risk</span>
                        <span className="text-red-400 font-orbitron font-bold">-$1,500.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Calculated Size (Rounded)</div>
                      <div className="text-xl font-bold font-orbitron text-white">95 Units <span className="text-sm text-zinc-500">/ 0.95 Lots</span></div>
                    </div>
                    
                    <button className="w-full bg-brand-gradient text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      Place Visual Trade
                    </button>
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
