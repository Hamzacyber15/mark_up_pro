"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  TrendingUp, 
  Layout, 
  PieChart, 
  BarChart3, 
  Zap, 
  Cpu, 
  LineChart, 
  Lightbulb, 
  Activity,
  Coins
} from "lucide-react";

const leftFeatures = [
  { title: "Forex", desc: "Real-time broker feeds for accurate pricing", icon: <Globe className="w-6 h-6 text-cyan-400" /> },
  { title: "Futures", desc: "Institutional-grade futures data", icon: <Coins className="w-6 h-6 text-yellow-500" /> },
  { title: "Stocks & Equities", desc: "Global equities from top exchanges", icon: <TrendingUp className="w-6 h-6 text-orange-500" /> },
  { title: "Options", desc: "Advanced options chain with full analytics", icon: <PieChart className="w-6 h-6 text-blue-400" /> },
  { title: "Commodities", desc: "Monitor global commodity markets", icon: <Activity className="w-6 h-6 text-green-500" /> },
];

const rightFeatures = [
  { title: "Crypto", desc: "Spot & perpetual futures across exchanges", icon: <Cpu className="w-6 h-6 text-yellow-400" /> },
  { title: "Charting & Analysis", desc: "Advanced charts with precision tools", icon: <Layout className="w-6 h-6 text-blue-400" /> },
  { title: "Trading Indicators", desc: "Built-in & custom indicators", icon: <LineChart className="w-6 h-6 text-purple-400" /> },
  { title: "Strategy Builder", desc: "Create, test & refine strategies", icon: <Zap className="w-6 h-6 text-green-400" /> },
  { title: "Market Insights", desc: "Live sentiment & trend analysis", icon: <Lightbulb className="w-6 h-6 text-yellow-300" /> },
];

export default function Connectivity() {
  return (
    <section className="py-32 relative overflow-hidden bg-dark-bg">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Integrations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-orbitron tracking-tight"
          >
            One Platform. <br />
            Every Market You Trade.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 max-w-2xl leading-relaxed md:text-lg font-medium"
          >
            The same drawing tools, indicators, and AI features work across all 6 markets. Switch between Gold and NQ Futures in seconds — your markup style travels with you.
          </motion.p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 max-w-7xl mx-auto px-4">
          
          {/* SVG Connection Lines Background (Desktop) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <svg className="w-full h-full opacity-40" viewBox="0 0 1200 600" fill="none">
              <defs>
                <linearGradient id="hub-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF4E8E" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF4E8E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF4E8E" stopOpacity="0.2" />
                </linearGradient>
                <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Left Side Lines */}
              {[100, 200, 300, 400, 500].map((y, i) => (
                <motion.path 
                  key={`left-${i}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  d={`M 400 ${y} L 460 ${y} L 500 300 L 540 300`}
                  stroke="url(#hub-line-grad)"
                  strokeWidth="2"
                  filter="url(#line-glow)"
                />
              ))}
              
              {/* Right Side Lines */}
              {[100, 200, 300, 400, 500].map((y, i) => (
                <motion.path 
                  key={`right-${i}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  d={`M 800 ${y} L 740 ${y} L 700 300 L 660 300`}
                  stroke="url(#hub-line-grad)"
                  strokeWidth="2"
                  filter="url(#line-glow)"
                />
              ))}
            </svg>
          </div>


          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full lg:w-[32%] z-20">
            {leftFeatures.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#0F0F14] border border-white/5 hover:bg-[#14141A] hover:border-white/10 transition-all group"
              >
                <div className="h-14 w-14 rounded-2xl bg-zinc-900/80 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold font-orbitron text-white leading-tight">{f.title}</h3>
                  <p className="text-[11px] md:text-xs text-zinc-500 mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Hub */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center z-30">
            {/* Pulsing Background Rings */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-brand-pink/20 blur-3xl"
            />
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-brand-gradient p-1.5 shadow-[0_0_80px_rgba(255,78,142,0.4)]"
            >
              <div className="w-full h-full rounded-full bg-[#0A0A0B] flex items-center justify-center overflow-hidden">
                <span className="text-6xl lg:text-8xl font-bold font-orbitron text-white select-none">M</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full lg:w-[32%] z-20">
            {rightFeatures.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#0F0F14] border border-white/5 hover:bg-[#14141A] hover:border-white/10 transition-all group"
              >
                <div className="h-14 w-14 rounded-2xl bg-zinc-900/80 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold font-orbitron text-white leading-tight">{f.title}</h3>
                  <p className="text-[11px] md:text-xs text-zinc-500 mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

