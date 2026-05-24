"use client";

import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  MousePointer2, 
  Settings2, 
  Share2, 
  BarChart3, 
  Type, 
  Paintbrush, 
  Smile, 
  Search, 
  Ruler 
} from "lucide-react";
import Image from "next/image";

const sidebarIcons = [
  { icon: <LayoutGrid className="w-5 h-5" />, active: true },
  { icon: <MousePointer2 className="w-5 h-5" /> },
  { icon: <Settings2 className="w-5 h-5" /> },
  { icon: <Share2 className="w-5 h-5" /> },
  { icon: <BarChart3 className="w-5 h-5" /> },
  { icon: <Type className="w-5 h-5" /> },
  { icon: <Paintbrush className="w-5 h-5" /> },
  { icon: <Smile className="w-5 h-5" /> },
  { icon: <Search className="w-5 h-5" /> },
  { icon: <Ruler className="w-5 h-5" /> },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-20 bg-[#0D0D12] border-r border-white/5 flex flex-col items-center py-6 gap-8 shrink-0 h-screen sticky top-0">
      <div className="w-16 h-12 relative mb-4">
        <Image src="/logo.png" alt="M" fill className="object-contain" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {sidebarIcons.map((item, i) => (
          <button 
            key={i}
            className={`w-full h-14 flex items-center justify-center transition-all relative group ${item.active ? 'text-brand-pink' : 'text-zinc-600 hover:text-zinc-300'}`}
          >
            {item.active && (
              <motion.div 
                layoutId="sidebar-active"
                className="absolute left-0 w-1 h-8 bg-brand-pink rounded-r-full shadow-[0_0_15px_rgba(255,78,142,0.5)]"
              />
            )}
            {item.icon}
            
            {/* Tooltip placeholder */}
            <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Feature {i + 1}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
