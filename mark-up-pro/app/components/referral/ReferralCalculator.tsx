"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReferralCalculator() {
  const [referrals, setReferrals] = useState(50);
  const subscriptionPrice = 34; // Pro Plan Price
  const commissionRate = 0.30;
  
  const monthlyIncome = Math.round(referrals * subscriptionPrice * commissionRate);
  const annualIncome = monthlyIncome * 12;
  const perSubscriber = Math.round(subscriptionPrice * commissionRate * 12);

  return (
    <section className="py-32 relative bg-dark-bg">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4"
          >
            Earnings Calculator
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 font-orbitron tracking-tight"
          >
            Drag. See. Earn.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-2xl leading-relaxed font-medium"
          >
            Slide to see how much you could earn by referring traders to MarkupPro. <br className="hidden md:block" />
            30% recurring commission, forever.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto p-12 rounded-[40px] bg-[#0D0D12] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient" />
          
          <div className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <label className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Number of Referrals</label>
              <span className="text-4xl font-bold font-orbitron text-white">{referrals}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="1000" 
              value={referrals} 
              onChange={(e) => setReferrals(parseInt(e.target.value))}
              className="w-full h-3 bg-white/5 rounded-full appearance-none cursor-pointer accent-brand-pink"
              style={{
                background: `linear-gradient(to right, #F17842 0%, #DC467A ${(referrals/1000)*100}%, rgba(255,255,255,0.05) ${(referrals/1000)*100}%, rgba(255,255,255,0.05) 100%)`
              }}
            />
            <div className="flex justify-between mt-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
              <span>1</span>
              <span>250</span>
              <span>500</span>
              <span>1000</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center transition-all hover:bg-white/10 group">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Monthly Income</span>
              <div className="text-4xl font-bold font-orbitron text-brand-gradient group-hover:scale-110 transition-transform">${monthlyIncome}</div>
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-4 block">Per month</span>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center transition-all hover:bg-white/10 group">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Annual Income</span>
              <div className="text-4xl font-bold font-orbitron text-green-500 group-hover:scale-110 transition-transform">${annualIncome}</div>
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-4 block">Per year</span>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center transition-all hover:bg-white/10 group">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Per Subscriber</span>
              <div className="text-4xl font-bold font-orbitron text-blue-400 group-hover:scale-110 transition-transform">${perSubscriber}</div>
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-4 block">Per year</span>
            </div>
          </div>

          <p className="text-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-12">
            *Based on pro monthly subscription price ($34). actual earnings may vary based on subscription choice.
          </p>
        </div>
      </div>
    </section>
  );
}
