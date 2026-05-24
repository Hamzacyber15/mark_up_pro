"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    desc: "Create your affiliate account in seconds. We provide all the tools you need to succeed from day one."
  },
  {
    number: "02",
    title: "Get Your Link",
    desc: "Access your unique referral link and marketing assets through your dedicated affiliate dashboard."
  },
  {
    number: "03",
    title: "Promote Subscribers",
    desc: "Share your link with your audience, on social media, or in your trading communities."
  },
  {
    number: "04",
    title: "You Get Paid",
    desc: "Earn a recurring 30% commission for every subscriber you bring to the platform. No caps on earnings."
  }
];

export default function ReferralSteps() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 font-orbitron tracking-tight"
          >
            Simple. Transparent. <br />
            No Hoops to Jump Through.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-2xl leading-relaxed font-medium"
          >
            We've built the most affiliate-friendly program in the trading space. 
            Simple rules, fast payouts, and high rewards.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-[#0D0D12] border border-white/5 group hover:bg-[#111116] transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold font-orbitron mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 font-orbitron text-white">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
