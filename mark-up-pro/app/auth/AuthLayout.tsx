"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Left Side: Welcome Panel */}
      <div className="hidden lg:flex lg:w-[45%] relative bg-[#0D0D12] items-center justify-center p-20 overflow-hidden border-r border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-lg">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-16 relative"
          >
            {/* Laptop Mockup placeholder or actual asset if available */}
            <div className="relative w-full aspect-video rounded-xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden group">
               <Image 
                src="/2nd chart home page.png" 
                alt="Dashboard" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl font-bold font-orbitron mb-6 leading-tight">
              Welcome to <br />
              <span className="text-brand-gradient">MarkupPro</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              Let's get you all set up so you can verify your personal account and begin setting up your profile.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Form Panel */}
      <div className="flex-1 flex flex-col p-8 md:p-20 relative overflow-y-auto">
        <div className="w-full max-w-md mx-auto flex-grow flex flex-col justify-center py-12">
          {/* Logo Top Right (Optional as per image) */}
          <div className="absolute top-12 right-12 hidden md:block">
            <Image src="/logo.png" alt="Logo" width={140} height={40} className="object-contain opacity-80" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-orbitron mb-4">{title}</h2>
            <p className="text-zinc-500 text-sm mb-10 leading-relaxed font-medium">
              {subtitle}
            </p>

            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
