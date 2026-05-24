"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a credit card to start the free trial?",
      answer: "No credit card required. Sign up with your email and get full access immediately. You'll only be asked for payment details if you choose to continue after your 7-day trial."
    },
    {
      question: "What happens after the 7-day trial?",
      answer: "After your trial ends, you can choose to subscribe to our Complete Trader Plan to retain access to all features. If you decide not to subscribe, your account will be downgraded to a limited free version."
    },
    {
      question: "Does this connect to my broker?",
      answer: "Yes, MarkupPro connects with over 50+ major brokers through our secure API integrations, allowing you to trade directly from your charts."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings, no questions asked."
    },
    {
      question: "Is this financial advice?",
      answer: "No. MarkupPro provides tools for technical analysis and AI-driven insights based on your markups. It does not provide personalized financial advice."
    }
  ];

  const features = [
    {
      icon: "📊",
      title: "Unlimited Chart Layouts",
      desc: "Work across multiple timeframes and instruments simultaneously. Save and recall any layout instantly."
    },
    {
      icon: "⏪",
      title: "Replay & Backtesting",
      desc: "Rewind any market, on any date. Practice your setups on real historical price action without risking capital."
    },
    {
      icon: "💡",
      title: "AI Markup Reviews",
      desc: "Submit any chart for instant AI scoring. Get simulated feedback on entries, stops, structure, and bias."
    },
    {
      icon: "⚖️",
      title: "Risk Calculator",
      desc: "Define your risk in seconds. Auto-calculate position sizes, R:R ratios, and stop distances for any trade."
    },
    {
      icon: "🌐",
      title: "6 Global Markets",
      desc: "Forex, Crypto, Stocks, Indices, Commodities, Futures — all streaming in real-time from one dashboard."
    },
    {
      icon: "🤖",
      title: "AI Trading Assistant",
      desc: "Chat with AI about any chart, ticker, or strategy. Get real-time suggestions to visualize your trades."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/80">AI-Powered Chart Analysis</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight mb-6"
          >
            Choose Your <span className="text-brand-gradient">Edge.</span><br />
            <span className="text-brand-gradient">Trade</span> Smarter with AI.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-lg md:text-xl font-medium mb-10"
          >
            From beginner traders to full-scale academies — MarkupPro gives you the tools, AI, and data to win consistently.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <button className="btn-brand px-8 py-4 text-sm w-full sm:w-auto">
              Start your free 7-daily trial
            </button>
            <button className="px-8 py-4 bg-white text-dark-bg font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-zinc-200 transition-colors w-full sm:w-auto">
              See what's included
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-bold uppercase tracking-widest text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              10,000+ Active Traders
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              50+ Global Markets
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              AI Pattern Models
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Broker API Connections
            </div>
          </motion.div>
        </section>

        {/* Pricing Card Section */}
        <section className="container-custom max-w-4xl py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] border border-white/10 bg-dark-card p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 overflow-hidden"
          >
            <div className="absolute -inset-1 bg-brand-gradient opacity-10 blur-xl pointer-events-none" />
            
            <div className="flex-1 relative z-10">
              <div className="inline-block bg-brand-pink/20 text-brand-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-pink/30">
                ⭐ Best Value
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">The Complete Trader Plan</h2>
              <p className="text-zinc-400 font-medium mb-8">
                The only trading toolset you'll ever need. + Defaults to Volume discounts.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b border-white/10 pb-4">Everything Included</h3>
                <ul className="space-y-4">
                  {[
                    "Unlimited Chart Layouts — Forex, Crypto, Stocks, Indices",
                    "Risk Calculator — position sizing, R:R, stop/loss management",
                    "Replay & Backtest — practice on historical data, any session",
                    "Unlimited AI Markup Reviews — instant grading on every chart",
                    "Premium Indicators — FVG, BoS, Liquidity Sweeps, and more",
                    "Community Access — signal rooms, mentors, daily sessions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-[320px] shrink-0 flex flex-col justify-center relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              <div className="flex flex-col mb-8">
                <div className="flex items-baseline gap-2 text-white">
                  <span className="text-6xl font-bold font-orbitron">$34</span>
                  <span className="text-zinc-400">/ month</span>
                </div>
                <span className="text-xs text-brand-orange mt-2">pay yearly - save you 2 free mos</span>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest text-center py-2 rounded-lg mb-4">
                Try 7-days free!
              </div>
              
              <button className="btn-brand w-full py-4 mb-4">
                Start My 7-day free trial →
              </button>
              
              <button className="w-full py-4 rounded-xl border border-white/20 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors mb-8 text-white">
                See full features
              </button>
              
              <ul className="space-y-3">
                {[
                  "No credit card required",
                  "Full access to all tools",
                  "Cancel anytime, no questions asked",
                  "7-day money-back guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Every Tool Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">What you get</span>
                <div className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                Every Tool a Serious <br /> Trader Needs
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-dark-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xl mb-6 border border-brand-orange/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Trading Coach Section */}
        <section className="py-20 bg-[#0F0F11]">
          <div className="container-custom">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-brand-orange" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">AI Coach</span>
              </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
                  Your AI Trading Coach – Built Into Every Chart
                </h2>
                <p className="text-zinc-400 mb-12">
                  "It's like having a professional trader reviewing every chart you draw."
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-white/5 border-t-2 border-t-green-500 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
                    <div className="text-green-500 mb-2 text-2xl">▲</div>
                    <div className="font-bold mb-1">Markup Grader</div>
                    <div className="text-xs text-zinc-500">Know your chart is accurate before you place the trade.</div>
                  </div>
                  <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-white/5 border-t-2 border-t-brand-pink text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
                    <div className="text-brand-pink mb-2 text-2xl">⬟</div>
                    <div className="font-bold mb-1">Bias Detection</div>
                    <div className="text-xs text-zinc-500">Stop trading on emotion, let the data tell you the trend.</div>
                  </div>
                  <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-white/5 border-t-2 border-t-brand-orange text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
                    <div className="text-brand-orange mb-2 text-2xl">■</div>
                    <div className="font-bold mb-1">Mistake Tracking</div>
                    <div className="text-xs text-zinc-500">Auto-document the top errors in your charts.</div>
                  </div>
                  <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-white/5 border-t-2 border-t-brand-purple text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
                    <div className="text-brand-purple mb-2 text-2xl">▼</div>
                    <div className="font-bold mb-1">Line Suggestions</div>
                    <div className="text-xs text-zinc-500">Find the optimal trend line after a few data points.</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-dark-card rounded-2xl border border-white/10 p-6 shadow-2xl relative"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="font-orbitron font-bold text-lg">GBPUSD · 4H</div>
                  <div className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    Review Mode
                  </div>
                </div>
                
                <div className="h-48 flex items-end gap-2 justify-between mb-8 px-4">
                  {[40, 60, 45, 80, 50, 30, 45, 60, 20, 40, 90].map((h, i) => (
                    <div key={i} className={`w-full rounded-sm ${i % 3 === 0 ? 'bg-brand-orange' : i % 2 === 0 ? 'bg-brand-pink' : 'bg-white/10'}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
                
                <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-bold text-zinc-400">AI Markup Score</div>
                    <div className="text-brand-orange font-orbitron font-bold text-xl">87/100</div>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden mb-4">
                    <div className="h-full bg-brand-gradient w-[87%]" />
                  </div>
                  <div className="flex gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-orange" /> Creative</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-pink" /> Stop Size</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-purple" /> Target 3x</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-xl border border-white/5 bg-white/5 italic text-sm text-zinc-300">
                  "Valid bias alignment. Entry is well-timed. Your stop is 2.4R wide — reduce to 1.5R max for this structure."
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container-custom max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-brand-orange" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">FAQ</span>
              <div className="h-[1px] w-12 bg-brand-orange" />
            </div>
            <h2 className="text-4xl font-bold font-orbitron text-center mb-12">Common Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-dark-card border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left"
                  >
                    <span className="font-bold">{faq.question}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-brand-orange/20 text-brand-orange transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`}>
                      {openFaq === i ? '-' : '+'}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
