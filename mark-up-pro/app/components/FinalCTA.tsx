"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 container-custom">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[40px] overflow-hidden bg-brand-stats-gradient p-12 md:p-24 text-center shadow-[0_20px_50px_rgba(220,70,122,0.3)]"
      >
        {/* Subtle shine overlay */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter font-orbitron leading-tight"
          >
            The Chart Markup Platform <br className="hidden md:block" />
            Built for Serious Traders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-bold"
          >
            Open a chart. Draw your levels. Set your alerts. Get AI feedback on your markup. 
            MarkupPro makes it simple to understand the market and trade with more confidence every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="#" 
              className="inline-block px-14 py-6 rounded-2xl bg-white text-dark-bg font-bold uppercase tracking-widest hover:bg-zinc-100 hover:scale-105 transition-all shadow-2xl text-sm"
            >
              Start your free 7 daily trial
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}


