"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Main Navbar */}
      <nav className="border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
        <div className="container-custom flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MarkupPro Logo" 
                width={292} 
                height={195} 
                style={{ width: '200px', height: 'auto' }}
                className="object-contain"
                priority
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              <Link href="/" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">What is MarkupPro?</Link>
              
              <div className="relative group py-6">
                <Link href="#" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
                  Tools
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-[#121214] border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#1A1A1C]">
                      <div>
                        <h3 className="text-white font-bold text-lg leading-none">Trading Tools</h3>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">Advanced Utility Suite</p>
                      </div>
                      <button className="text-zinc-500 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    
                    <div className="p-2 flex flex-col gap-1">
                      {[
                        {
                          title: "Education Layer",
                          desc: "Master market dynamics with institutional-grade",
                          icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></>,
                          color: "text-emerald-400",
                          bg: "bg-emerald-400/5",
                          border: "border-emerald-400/20",
                          href: "/tools/education"
                        },
                        {
                          title: "Risk Management Suite",
                          desc: "Advanced calculators and exposure limits for capital",
                          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
                          color: "text-orange-400",
                          bg: "bg-orange-400/5",
                          border: "border-orange-400/20",
                          href: "/tools/risk-management"
                        },
                        {
                          title: "Social & Community Features",
                          desc: "Connect with professional traders and share market",
                          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                          color: "text-rose-400",
                          bg: "bg-rose-400/5",
                          border: "border-rose-400/20",
                          href: "/tools/social"
                        },
                        {
                          title: "AI Trading Assistant",
                          desc: "Predictive analytics and pattern recognition powered",
                          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h.01M15 12h.01M10 16c0 1.5 1 2 2 2s2-.5 2-2M12 3a3 3 0 00-3 3v2H7a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2V6a3 3 0 00-3-3z" />,
                          color: "text-amber-400",
                          bg: "bg-amber-400/5",
                          border: "border-amber-400/20",
                          href: "/tools/assistant"
                        },
                        {
                          title: "Screenshot export & Sharing",
                          desc: "Export high-fidelity charts and results for social...",
                          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
                          color: "text-brand-pink",
                          bg: "bg-brand-pink/5",
                          border: "border-brand-pink/20",
                          href: "/tools/screenshot"
                        }
                      ].map((item, i) => (
                        <Link key={i} href={item.href || "#"} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors group/item">
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border ${item.bg} ${item.color} ${item.border}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {item.icon}
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-medium mb-0.5 group-hover/item:text-white transition-colors">{item.title}</h4>
                            <p className="text-zinc-400 text-xs line-clamp-1">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/pricing" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Pricing</Link>
              <Link href="/referral" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                <span className="text-sm">🎁</span> Referral Program
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
              Login
            </Link>
            <Link 
              href="/register" 
              className="btn-brand px-8 py-3 text-[11px] hidden md:block"
            >
              Start Free Trial
            </Link>
          </div>

        </div>
      </nav>
    </motion.div>
  );
}


