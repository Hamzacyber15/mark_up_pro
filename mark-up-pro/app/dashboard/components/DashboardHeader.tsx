"use client";

import { Search, Bell, Settings, Download, ChevronDown, Activity, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-white/5 bg-[#0D0D12]/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-8 flex-1">
        <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-zinc-300 hover:text-white transition-all">
          Trade <ChevronDown className="w-4 h-4 text-zinc-500" />
        </button>

        <div className="relative max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
          <input 
            type="text" 
            placeholder="Search assets, tools..."
            className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-2 text-xs focus:outline-none focus:border-white/10 transition-all placeholder:text-zinc-700"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-[10px] font-bold uppercase tracking-widest hover:bg-brand-pink/20 transition-all flex items-center gap-2">
            <Activity className="w-3 h-3" /> AI Chart Analysis
          </button>
          <button className="px-4 py-2 rounded-xl bg-brand-gradient text-white text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-brand-pink/20">
            <Play className="w-3 h-3 fill-current" /> Start Live Trading
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <button className="hover:text-white transition-colors">Assets</button>
          <button className="hover:text-white transition-colors">Orders</button>
        </div>

        <div className="flex items-center gap-4 pl-6 border-l border-white/10">
          <button className="p-2 text-zinc-500 hover:text-white relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-pink rounded-full border-2 border-[#0D0D12]" />
          </button>
          <button className="p-2 text-zinc-500 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-zinc-500 hover:text-white">
            <Download className="w-5 h-5" />
          </button>
          <div className="h-10 w-10 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-500 font-bold font-orbitron text-sm">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
