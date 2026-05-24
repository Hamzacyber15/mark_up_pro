"use client";

import { motion } from "framer-motion";
import { 
  DollarSign, 
  Clock, 
  Users, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

const leftCards = [
  { title: "$34/month", desc: "MarkupPro plan price", icon: <DollarSign className="w-5 h-5 text-green-500" />, color: "border-green-500/20" },
  { title: "Get Commission", desc: "Get a good amount", icon: <Zap className="w-5 h-5 text-orange-500" />, color: "border-orange-500/20" },
  { title: "Instant Payout", desc: "Get best payout options", icon: <Clock className="w-5 h-5 text-green-500" />, color: "border-green-500/20" },
  { title: "Subscribers", desc: "Approval for Subscribers", icon: <Users className="w-5 h-5 text-orange-500" />, color: "border-orange-500/20" },
  { title: "Best Offers", desc: "Provide good earning option", icon: <ShieldCheck className="w-5 h-5 text-red-500" />, color: "border-red-500/20" },
];

const potentialRows = [
  { refs: "5 Ref", amount: "$56", progress: 60 },
  { refs: "10 Ref", amount: "$16", progress: 30 },
  { refs: "54 Ref", amount: "$76", progress: 80 },
  { refs: "51 Ref", amount: "$96", progress: 90 },
];

export default function ReferralCommission() {
  return (
    <section className="py-20 relative">
      <div className="container-custom">
        <div className="bg-[#0D0D12] border border-white/5 rounded-[40px] p-6 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_120px_1.5fr] gap-8">
            
            {/* Left Column: Feature Cards */}
            <div className="flex flex-col justify-between py-2 min-h-[640px]">
              {leftCards.map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group min-h-[100px]"
                >
                  <div className={`h-12 w-12 rounded-xl bg-dark-bg flex items-center justify-center flex-shrink-0 border ${card.color} group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">{card.title}</h3>
                    <p className="text-[11px] md:text-xs text-zinc-500 mt-1">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Column: Vertical Timeline */}
            <div className="hidden lg:flex flex-col items-center relative py-2">
              <div className="absolute top-10 bottom-10 w-px bg-white/10" />
              
              <div className="flex flex-col items-center justify-between h-[640px] relative z-10">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-[#1A1110] border border-orange-500/30 flex items-center justify-center text-orange-500 text-xs font-bold mb-2 shadow-[0_0_20px_rgba(249,115,22,0.1)]">You</div>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Affiliate</span>
                </div>

                <div className="px-5 py-2.5 rounded-lg bg-[#2A1810] border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Share Link
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-[#1A1020] border border-purple-500/30 flex items-center justify-center text-purple-400 text-sm font-bold mb-2 font-orbitron shadow-[0_0_20px_rgba(168,85,247,0.1)]">3+</div>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Subscribers</span>
                </div>

                <div className="px-5 py-2.5 rounded-lg bg-[#102018] border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-widest font-orbitron shadow-lg">
                  $56.00
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-[#101A18] border border-green-500/30 flex items-center justify-center text-green-500 text-3xl font-bold mb-2 shadow-[0_0_20px_rgba(34,197,94,0.1)]">$</div>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Your Wallet</span>
                </div>
              </div>
            </div>



            {/* Right Column: Highlight Boxes */}
            <div className="flex flex-col gap-6">
              {/* Top Box: 30% */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-black border border-white/5 text-center relative overflow-hidden"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[9px] font-bold uppercase tracking-widest mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Active Now
                </div>
                <h4 className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-6">Your Commission Rate</h4>
                <div className="text-9xl font-bold font-orbitron text-brand-gradient leading-none mb-6">30%</div>
                <p className="text-xs text-white font-bold uppercase tracking-[0.2em]">Recurring — Every Month</p>
              </motion.div>

              {/* Bottom Box: Potential */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 rounded-3xl bg-black border border-white/5"
              >
                <h4 className="text-center text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-10">Monthly Earnings Potential</h4>
                <div className="flex flex-col gap-6">
                  {potentialRows.map((row, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <span className="w-12 text-[10px] font-bold text-zinc-500 uppercase">{row.refs}</span>
                      <div className="flex-grow h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                          className="h-full bg-brand-gradient"
                        />
                      </div>
                      <span className="w-12 text-right text-[10px] font-bold text-zinc-400 font-orbitron">{row.amount}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

