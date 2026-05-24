"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import dynamic from "next/dynamic";

const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  { ssr: false }
);

export default function TradingChart({ symbol = "BTCUSDT" }: { symbol?: string }) {
  const [interval, setInterval] = useState<any>("30");

  const timeframes = [
    { label: "1s", value: "1S" },
    { label: "1m", value: "1" },
    { label: "5m", value: "5" },
    { label: "15m", value: "15" },
    { label: "30m", value: "30" },
    { label: "1h", value: "60" },
    { label: "4h", value: "240" },
    { label: "1d", value: "D" },
    { label: "1w", value: "W" },
    { label: "1M", value: "M" },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#0A0A0B] border-r border-white/5">
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <button className="text-white border-b-2 border-brand-pink h-12">Chart</button>
            <button className="text-zinc-500 hover:text-white h-12">Overview</button>
            <button className="text-zinc-500 hover:text-white h-12">Data</button>
            <button className="text-zinc-500 hover:text-white h-12">Feed</button>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <button className="hover:text-white">Standard</button>
            <button className="text-brand-pink">TradingView</button>
            <button className="hover:text-white">Depth</button>
          </div>
        </div>
        <div className="flex items-center gap-4 text-zinc-500">
           <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="h-10 border-b border-white/5 flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide shrink-0">
        {timeframes.map((tf) => (
          <button 
            key={tf.label}
            onClick={() => setInterval(tf.value)}
            className={`px-3 py-1 text-[10px] font-bold uppercase rounded-lg transition-all ${interval === tf.value ? 'bg-white/10 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
          >
            {tf.label}
          </button>
        ))}
      </div>

      <div className="flex-1 relative overflow-hidden group">
        <AdvancedRealTimeChart 
          theme="dark" 
          symbol={`BINANCE:${symbol}`}
          interval={interval}
          allow_symbol_change={true}
          autosize={true}
          hide_side_toolbar={false}
          enable_publishing={false}
          backgroundColor="#0A0A0B"
        />
        
        {/* Floating Controls Overlay (moved slightly to not block the widget) */}
        <div className="absolute top-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 z-10 pointer-events-none">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs font-bold font-orbitron text-white">{symbol}</span>
            <span className="text-[10px] text-green-500 font-bold">Perpetual . 30 . Bybit</span>
          </div>
          <div className="text-lg font-bold font-orbitron text-white">66,849.80</div>
        </div>
      </div>
    </div>
  );
}
