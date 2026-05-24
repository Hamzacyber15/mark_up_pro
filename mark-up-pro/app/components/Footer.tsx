"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-dark-bg/50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20"
        >
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image 
                src="/logo.png" 
                alt="MarkupPro Logo" 
                width={160} 
                height={40} 
                style={{ width: '160px', height: 'auto' }}
              />
            </Link>

            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed mb-8 font-medium">
              The world's most advanced chart markup platform for professional traders. 
              Analyze, collaborate, and win.
            </p>
            <div className="flex gap-4">
              {["𝕏", "🌐", "📱", "💼"].map((s, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-pink hover:bg-brand-pink/5 transition-all duration-300"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
          ].map((column, i) => (
            <div key={i}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-orbitron">{column.title}</h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-zinc-500 hover:text-brand-pink transition-colors text-sm font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-zinc-600 text-xs font-bold uppercase tracking-widest"
        >
          <p>© 2026 MarkupPro. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

