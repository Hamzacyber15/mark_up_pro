"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MoreVertical } from "lucide-react";
import { tickersData } from "./tickersData";

export default function OrderBookPanel({ symbol = "BTCUSDT" }: { symbol?: string }) {
  const [activeTab, setActiveTab] = useState<"Order Book" | "Recent Trade">("Order Book");
  const [recentTrades, setRecentTrades] = useState<any[]>([]);

  const activeTicker = tickersData[symbol] || tickersData.BTCUSDT;
  const basePrice = activeTicker.priceNum;
  const baseName = symbol.replace("USDT", "");

  // Determine pricing format
  const decimals = basePrice > 1000 ? 2 : basePrice > 10 ? 3 : 5;
  const step = basePrice * 0.00003;

  // Initialize rolling mock trades feed
  useEffect(() => {
    const initialTrades = Array(18).fill(null).map((_, i) => {
      const isBuy = Math.random() > 0.45;
      const tradePrice = basePrice + (Math.random() - 0.5) * step * 3;
      const now = new Date(Date.now() - i * 2500);
      const timeStr = now.toTimeString().split(" ")[0];
      return {
        id: `trade-${i}-${Date.now()}`,
        price: tradePrice.toFixed(decimals),
        qty: (Math.random() * 0.4 + 0.001).toFixed(3),
        time: timeStr,
        side: isBuy ? "Buy" : "Sell",
      };
    });
    setRecentTrades(initialTrades);
  }, [symbol, basePrice, step, decimals]);

  // Simulate scrolling live trades on a regular interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      const isBuy = Math.random() > 0.45;
      const tradePrice = basePrice + (Math.random() - 0.5) * step * 1.8;
      const timeStr = new Date().toTimeString().split(" ")[0];

      const newTrade = {
        id: `trade-${Date.now()}`,
        price: tradePrice.toFixed(decimals),
        qty: (Math.random() * 0.25 + 0.001).toFixed(3),
        time: timeStr,
        side: isBuy ? "Buy" : "Sell",
      };

      setRecentTrades((prev) => [newTrade, ...prev.slice(0, 17)]);
    }, 1800);

    return () => clearInterval(intervalId);
  }, [basePrice, step, decimals]);

  const sellOrders = Array(8).fill(null).map((_, i) => ({
    price: (basePrice + (i + 1) * step).toFixed(decimals),
    qty: (0.002 + i * 0.001).toFixed(3),
    total: (3.24 + i * 0.5).toFixed(2)
  })).reverse();

  const buyOrders = Array(8).fill(null).map((_, i) => ({
    price: (basePrice - (i + 1) * step).toFixed(decimals),
    qty: (0.002 + i * 0.001).toFixed(3),
    total: (3.24 + i * 0.5).toFixed(2)
  }));

  return (
    <div className="w-64 border-r border-white/5 bg-[#0D0D12] flex flex-col shrink-0">
      
      {/* Tabs selector */}
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 shrink-0 bg-[#0E0E12]/50">
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest relative h-full">
          {(["Order Book", "Recent Trade"] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-full relative transition-colors ${activeTab === tab ? 'text-white font-extrabold' : 'text-zinc-500 hover:text-white'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="orderBookTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
        <MoreVertical className="w-3 h-3 text-zinc-600 cursor-pointer hover:text-white transition-colors" />
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "Order Book" ? (
          <motion.div 
            key="orderbook"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.15 }}
            className="flex-1 flex flex-col min-h-0"
          >
            {/* Decimals spread select */}
            <div className="p-3 border-b border-white/5 flex items-center justify-between shrink-0">
              <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                {(step * 5).toFixed(decimals)} <ChevronDown className="w-3 h-3 text-zinc-500" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-px">
              <div className="grid grid-cols-3 text-[9px] font-bold uppercase text-zinc-600 mb-2 px-1 shrink-0 tracking-wider">
                <span>Price(USDT)</span>
                <span className="text-center">QTY({baseName})</span>
                <span className="text-right">Total({baseName})</span>
              </div>

              {/* Sell Orders */}
              <div className="flex flex-col gap-0.5">
                {sellOrders.map((order, i) => (
                  <div key={i} className="grid grid-cols-3 text-[10px] font-bold py-1 px-1 hover:bg-red-500/5 transition-colors group relative">
                    <div className="absolute right-0 top-0 bottom-0 bg-red-500/10 transition-all duration-300" style={{ width: `${Math.random() * 60}%` }} />
                    <span className="text-red-500 relative z-10 font-orbitron">{order.price}</span>
                    <span className="text-zinc-300 text-center relative z-10 font-orbitron">{order.qty}</span>
                    <span className="text-zinc-500 text-right relative z-10 font-orbitron">{order.total}</span>
                  </div>
                ))}
              </div>

              {/* Live Mid-Price spread */}
              <div className="py-3 flex flex-col items-center gap-0.5 border-y border-white/5 my-2 shrink-0">
                <span className={`text-sm font-bold font-orbitron tracking-tight ${activeTicker.isPositive ? "text-green-500" : "text-red-500"}`}>
                  {activeTicker.price}
                </span>
                <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Spread: {(step * 2).toFixed(decimals)}</span>
              </div>

              {/* Buy Orders */}
              <div className="flex flex-col gap-0.5">
                {buyOrders.map((order, i) => (
                  <div key={i} className="grid grid-cols-3 text-[10px] font-bold py-1 px-1 hover:bg-green-500/5 transition-colors group relative">
                     <div className="absolute right-0 top-0 bottom-0 bg-green-500/10 transition-all duration-300" style={{ width: `${Math.random() * 60}%` }} />
                    <span className="text-green-500 relative z-10 font-orbitron">{order.price}</span>
                    <span className="text-zinc-300 text-center relative z-10 font-orbitron">{order.qty}</span>
                    <span className="text-zinc-500 text-right relative z-10 font-orbitron">{order.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="recenttrades"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.15 }}
            className="flex-1 flex flex-col min-h-0 pt-3"
          >
            <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-px">
              <div className="grid grid-cols-3 text-[9px] font-bold uppercase text-zinc-600 mb-3 px-1 shrink-0 tracking-wider">
                <span>Price(USDT)</span>
                <span className="text-center">QTY({baseName})</span>
                <span className="text-right">Time</span>
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto flex-1 pb-4">
                {recentTrades.map((trade) => (
                  <div key={trade.id} className="grid grid-cols-3 text-[10px] font-bold py-1.5 px-1 hover:bg-white/5 transition-colors relative items-center">
                    <span className={`font-orbitron ${trade.side === "Buy" ? "text-green-500" : "text-red-500"}`}>{trade.price}</span>
                    <span className="text-zinc-300 text-center font-orbitron">{trade.qty}</span>
                    <span className="text-zinc-500 text-right font-orbitron">{trade.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
