"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ReferralCTA() {
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
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter font-orbitron leading-tight"
          >
            Share MarkupPro. <br className="hidden md:block" />
            Get Paid Every Month.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-bold"
          >
            Join hundreds of successful affiliates already earning recurring income by sharing the world's most advanced chart markup platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="#" 
              className="inline-block px-14 py-6 rounded-2xl bg-white text-dark-bg font-bold uppercase tracking-widest hover:bg-zinc-100 hover:scale-105 transition-all shadow-2xl text-sm"
            >
              Join the Affiliate Program
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
