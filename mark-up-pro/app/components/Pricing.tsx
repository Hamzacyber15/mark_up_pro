"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  "Unlimited Chart Markups",
  "AI Analysis & Tips",
  "Real-time Cloud Sync",
  "All Platform Integrations",
  "Advanced Drawing Tools",
  "Priority Support",
];

export default function Pricing() {
  return (
    <section className="py-32 bg-mesh-gradient">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Simple pricing
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-8 font-orbitron tracking-tight"
            >
              One Plan. Everything <br />
              Included. Try Free for <br />
              7 Days.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-zinc-400 mb-10 leading-relaxed max-w-md font-medium"
            >
              We believe in simple, transparent pricing. One plan for all your needs. 
              No hidden fees or tiered features.
            </motion.p>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {benefits.map((benefit, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-default"
                >
                  <span className="text-brand-pink">✓</span> {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-brand-gradient rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-[32px] border border-white/10 bg-dark-card p-12 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Pro Monthly</h3>
                  <p className="text-zinc-500 text-sm">Best for serious traders</p>
                </div>
                <div className="bg-brand-pink/10 px-3 py-1 rounded-full text-brand-pink text-xs font-bold uppercase tracking-widest">
                  Best Value
                </div>
              </div>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold font-orbitron text-white">$34</span>
                <span className="text-zinc-500 font-medium">/month</span>
              </div>

              <Link 
                href="#" 
                className="btn-brand block w-full py-5 text-center"
              >
                Start 7-Day Free Trial
              </Link>
              
              <p className="text-center text-zinc-500 text-xs mt-6">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
