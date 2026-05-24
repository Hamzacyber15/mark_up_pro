"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const markets = [
  { name: "Forex", color: "bg-orange-500", text: "text-orange-500" },
  { name: "Futures", color: "bg-green-500", text: "text-green-500" },
  { name: "Stocks", color: "bg-blue-400", text: "text-blue-400" },
  { name: "Options", color: "bg-pink-500", text: "text-pink-500" },
  { name: "Commodities", color: "bg-purple-400", text: "text-purple-400" },
  { name: "Crypto", color: "bg-cyan-400", text: "text-cyan-400" },
];

export default function Hero() {
  return (
    <section className="relative pt-44 pb-20 overflow-hidden bg-mesh-gradient">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#26171E] border border-white/5 text-xs md:text-sm font-medium text-white mb-10 shadow-2xl"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#F3734E] shadow-[0_0_10px_rgba(243,115,78,0.5)]"></span>
            Now Live — 12,000+ traders already on board
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold tracking-tighter mb-8 max-w-5xl leading-[1.1] text-[40px] md:text-[70px] font-orbitron"
            style={{ fontFamily: 'var(--font-orbitron), Orbitron, sans-serif' }}
          >
            Your Chart <br className="md:hidden" /> Markup Platform. <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-brand-gradient inline-block mt-2"
            >
              Now with AI.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 text-sm md:text-lg max-w-3xl mb-12 leading-relaxed font-medium"
          >
            Open a chart. Draw your levels. Get instant AI feedback on your analysis, set price alerts, and trade smarter — across every market, on any timeframe.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link 
              href="#" 
              className="btn-brand w-full sm:w-auto px-12 py-5"
            >
              Start Trial
            </Link>
            <Link 
              href="#" 
              className="w-full sm:w-auto px-12 py-5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest"
            >
              See How It works
            </Link>
          </motion.div>


          {/* Market Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-24"
          >
            {markets.map((m, i) => (
              <motion.div 
                key={m.name} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#0D0D12] border border-white/5 hover:border-white/10 hover:bg-[#12121A] transition-all cursor-pointer group"
              >
                <span className={`h-2 w-2 rounded-full ${m.color} shadow-[0_0_10px_currentColor]`}></span>
                <span className={`text-[13px] font-bold tracking-wide ${m.text}`}>{m.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative w-full max-w-5xl mx-auto animate-float"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink to-brand-orange opacity-20 blur-3xl rounded-[32px]" />
            <div className="relative rounded-[32px] border border-white/10 bg-dark-card p-1 overflow-hidden shadow-2xl">
              <div className="relative rounded-[28px] overflow-hidden">
                <Image 
                  src="/trading_chart.png" 
                  alt="MarkupPro Trading Chart" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



