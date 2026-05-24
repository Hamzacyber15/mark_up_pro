"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Traders Board", value: "12k+" },
  { label: "Indicators", value: "68+" },
  { label: "Markets", value: "6" },
  { label: "Feedback Score", value: "4.9" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-stats-gradient relative overflow-hidden">
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 font-orbitron text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


