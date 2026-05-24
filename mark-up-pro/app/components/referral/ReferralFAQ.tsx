"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need to be a MarkupPro subscriber to refer people?",
    answer: "Yes. You need an active MarkupPro subscription to join the affiliate program. We believe the best advocates are those who actually use and love the platform themselves."
  },
  {
    question: "What do I get paid?",
    answer: "You earn a 30% recurring commission on every subscription payment made by users you refer. As long as they remain a subscriber, you keep earning."
  },
  {
    question: "What happens if my referral cancels?",
    answer: "If a referred user cancels their subscription, your recurring commission for that specific user will stop. However, you will keep all commissions earned up to that point."
  },
  {
    question: "Can I refer people to annual plans?",
    answer: "Absolutely. Annual plans actually provide a larger upfront commission payout for you based on the total annual subscription price."
  },
  {
    question: "Is there a limit to how much I can earn?",
    answer: "No. There are no caps on earnings. The more successful traders you refer, the more you earn. Some of our top affiliates earn over $10k per month."
  }
];

export default function ReferralFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-dark-bg/50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-orbitron tracking-tight text-white"
          >
            Common Questions
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border transition-all ${openIndex === i ? 'bg-white/5 border-brand-pink/30' : 'bg-[#0D0D12] border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-brand-pink text-white' : 'bg-white/5 text-zinc-500'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 text-zinc-500 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
