"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ReferralHero() {
  return (
    <section className="relative pt-56 pb-20 overflow-hidden bg-mesh-gradient">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-pink mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-brand-pink animate-pulse" />
          Affiliates
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-8 leading-tight"
        >
          <span className="text-brand-gradient">Get Paid</span> to Share <br />
          What You Already Love
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Open a chart. Draw your levels. Get instant AI feedback on your analysis, set price alerts, and trade smarter — across every market, on any timeframe.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="#" 
            className="btn-brand px-12 py-5 w-full sm:w-auto"
          >
            Join MarkupPro Affiliate
          </Link>
          <Link 
            href="#" 
            className="w-full sm:w-auto px-12 py-5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest"
          >
            See How it works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
