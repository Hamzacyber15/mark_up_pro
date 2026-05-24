"use client";

import { motion } from "framer-motion";

const rows = [
  { feature: "Free Built-in Charting Tools", pro: true, others: "Limited" },
  { feature: "AI Analysis & Insights", pro: true, others: false },
  { feature: "Real-time Multi-device Sync", pro: true, others: false },
  { feature: "Custom Markup Templates", pro: true, others: "Basic" },
  { feature: "Trade Performance Tracking", pro: true, others: "Manual" },
  { feature: "Collaborative Analysis", pro: true, others: false },
  { feature: "Unlimited Chart Storage", pro: true, others: "Subscription" },
  { feature: "Ad-free Experience", pro: true, others: false },
];

export default function Comparison() {
  return (
    <section className="py-32 bg-dark-bg">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4"
          >
            Comparison
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-orbitron tracking-tight"
          >
            MarkupPro vs <br />
            Other Charting Platforms
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-500 max-w-2xl leading-relaxed font-medium"
          >
            See how MarkupPro stacks up against traditional charting tools. 
            We provide more features and better value for serious traders.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-dark-card shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-zinc-900/50">
                <th className="p-6 text-sm font-bold uppercase tracking-widest text-zinc-500">Feature</th>
                <th className="p-6 text-sm font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/5 font-orbitron">MarkupPro</th>
                <th className="p-6 text-sm font-bold uppercase tracking-widest text-zinc-500">Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-sm font-medium text-zinc-300">{row.feature}</td>
                  <td className="p-6 bg-brand-pink/[0.02]">
                    {row.pro ? (
                      <span className="h-6 w-6 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center mx-auto md:mx-0">
                        ✓
                      </span>
                    ) : (
                      <span className="text-zinc-600">—</span>
                    )}
                  </td>
                  <td className="p-6">
                    {typeof row.others === "boolean" ? (
                      row.others ? "✓" : <span className="text-zinc-600">✗</span>
                    ) : (
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{row.others}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

