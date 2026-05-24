"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Open your chart",
    description: "Pick any market — Gold, Forex, Stocks, Futures, Options, or Crypto — and pull up your preferred timeframe.",
  },
  {
    number: "02",
    title: "Mark it up",
    description: "Draw your support and resistance zones, trend lines, channels, and patterns using professional drawing tools. Just like any charting platform — but smarter.",
  },
  {
    number: "03",
    title: "Set price alerts",
    description: "Place alerts directly on your chart at key levels. Get notified by push notification, email, SMS, or Telegram the moment price hits your zone.",
  },
  {
    number: "04",
    title: "Get AI feedback",
    description: "Submit your markup and get a real score on your analysis — what you got right, what you missed, and how to improve. No guessing, just clear feedback.",
  },
];

export default function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4"
          >
            The platform
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-orbitron tracking-tight"
          >
            Your Chart Markup <br />
            Platform — With Superpowers
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 max-w-2xl leading-relaxed text-sm md:text-base font-medium"
          >
            Markup Pro is where you go to mark up your charts. Think of like your charting home -- open any market, draw your levels, set alerts, and let AI help you understand what you're looking at. Whether you're a complete beginner or a full-time trader, the work is the same.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`group relative p-8 rounded-[24px] transition-all duration-500 cursor-pointer ${
                  i === 0 
                  ? "bg-[#14141A] border border-transparent after:absolute after:-inset-[1px] after:rounded-[24px] after:bg-brand-gradient after:-z-10 after:opacity-100" 
                  : "bg-[#111116] border border-white/5 hover:bg-[#14141A]"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="h-14 w-14 rounded-full bg-brand-gradient flex items-center justify-center text-white text-lg font-bold font-orbitron group-hover:scale-110 transition-transform duration-500">
                      {feature.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative sticky top-32"
          >
            <div className="absolute -inset-4 bg-brand-pink/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <Image 
                src="/2nd chart home page.png" 
                alt="MarkupPro Chart Interface" 
                width={800} 
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

