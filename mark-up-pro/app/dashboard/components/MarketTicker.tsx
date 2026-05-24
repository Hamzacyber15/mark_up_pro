"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, TrendingDown, ChevronDown, Star, Search, Pin } from "lucide-react";
import { tickersData } from "./tickersData";

export default function MarketTicker({ 
  symbol, 
  onSymbolChange 
}: { 
  symbol: string; 
  onSymbolChange: (s: string) => void; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Spot");
  const [activeSubcat, setActiveSubcat] = useState("USDT");
  const [activeChip, setActiveChip] = useState("All");

  const activeTicker = tickersData[symbol] || tickersData.BTCUSDT;

  // Filter tickers based on search query
  const filteredTickers = Object.entries(tickersData).filter(([key, ticker]) => {
    const matchesSearch = 
      ticker.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticker.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-[#0D0D12] relative z-50">
      <div className="flex items-center gap-8 flex-wrap">
        
        {/* Interactive Ticker Selector */}
        <div className="relative">
          <div className="flex items-center gap-4">
            
            {/* Active Ticker Button */}
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 cursor-pointer hover:bg-white/5 px-3 py-1.5 rounded-xl border border-transparent hover:border-white/5 transition-all group"
            >
              <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                symbol.startsWith("BTC") ? "bg-yellow-500/20 border border-yellow-500/50 text-yellow-500" :
                symbol.startsWith("ETH") ? "bg-blue-500/20 border border-blue-500/50 text-blue-500" :
                symbol.startsWith("SOL") ? "bg-purple-500/20 border border-purple-500/50 text-purple-500" :
                symbol.startsWith("XRP") ? "bg-indigo-500/20 border border-indigo-500/50 text-indigo-500" :
                "bg-brand-pink/20 border border-brand-pink/50 text-brand-pink"
              }`}>
                {activeTicker.symbol.startsWith("BTC") ? "₿" : activeTicker.name.slice(0, 1)}
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white font-orbitron tracking-wide text-sm">{activeTicker.symbol}</span>
                  <span className="text-[9px] text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Spot</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </div>
            </div>

            {/* Quick Search Dialogue Box next to Ticker */}
            <div className="relative hidden sm:block">
              <input 
                type="text"
                placeholder="Search tickers..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                className="bg-[#070709] border border-white/5 rounded-xl px-4 py-2 pl-9 text-xs focus:outline-none focus:border-brand-pink/30 hover:border-white/10 transition-all placeholder:text-zinc-600 w-48 font-medium text-white"
              />
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
            </div>

          </div>

          {/* Dialogue Box Dropdown (replicates user's screenshot exactly) */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Click outside overlay */}
                <div className="fixed inset-0 z-40 bg-black/10" onClick={() => setIsOpen(false)} />
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-3 w-[440px] bg-[#0E0E12] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-50 overflow-hidden flex flex-col"
                >
                  {/* Dropdown Header Search Input */}
                  <div className="p-3 border-b border-white/5 bg-[#121217]/60 flex items-center gap-2">
                    <div className="relative flex-1">
                      <input 
                        type="text"
                        placeholder="Search tickers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#070709] border border-white/5 rounded-xl px-4 py-2 pl-9 text-xs focus:outline-none focus:border-brand-pink/30 transition-all font-medium text-white placeholder:text-zinc-600"
                        autoFocus
                      />
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
                    </div>
                    <button className="p-2 hover:bg-white/5 text-zinc-500 hover:text-white rounded-lg transition-all" title="Pin window">
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Category Tabs */}
                  <div className="px-3 py-1.5 border-b border-white/5 flex gap-1 overflow-x-auto scrollbar-hide text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    {["Favorites", "Spot", "Alpha", "Perpetual", "Futures", "Options", "TradFi", "Pre-Market"].map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                          activeCategory === cat ? "text-brand-pink bg-brand-pink/5" : "hover:text-zinc-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Sub-category Tabs */}
                  <div className="px-3 py-1.5 border-b border-white/5 flex gap-1.5 overflow-x-auto scrollbar-hide text-[9px] font-bold uppercase">
                    {["USDC", "USDT", "USDE", "MNT", "USD1", "EUR", "BRL", "PLN"].map((subcat) => (
                      <button 
                        key={subcat}
                        onClick={() => setActiveSubcat(subcat)}
                        className={`px-2 py-1 rounded transition-colors ${
                          activeSubcat === subcat ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {subcat}
                      </button>
                    ))}
                  </div>

                  {/* Filter Chips */}
                  <div className="px-3 py-2 border-b border-white/5 flex gap-1.5 overflow-x-auto scrollbar-hide text-[8px] font-bold uppercase">
                    {["All", "0 Fees", "50% Fees", "Margin Trading", "RWA", "SOL Ecosystem"].map((chip) => (
                      <button 
                        key={chip}
                        onClick={() => setActiveChip(chip)}
                        className={`px-2.5 py-1 rounded-full border transition-all ${
                          activeChip === chip 
                            ? "text-brand-pink border-brand-pink/20 bg-brand-pink/5" 
                            : "text-zinc-500 border-white/5 hover:border-white/10 hover:text-zinc-300"
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>

                  {/* Table Column Headers */}
                  <div className="grid grid-cols-4 px-4 py-2 border-b border-white/5 text-[9px] font-bold uppercase text-zinc-600 bg-[#09090C] tracking-wider">
                    <span>Name</span>
                    <span className="text-right">Price</span>
                    <span className="text-right">24h %</span>
                    <span className="text-right">Volume</span>
                  </div>

                  {/* Ticker rows list */}
                  <div className="max-h-[250px] overflow-y-auto divide-y divide-white/5 bg-[#0D0D12]">
                    {filteredTickers.length > 0 ? (
                      filteredTickers.map(([key, ticker]) => (
                        <div 
                          key={key}
                          onClick={() => {
                            onSymbolChange(ticker.symbol);
                            setIsOpen(false);
                            setSearchQuery("");
                          }}
                          className={`grid grid-cols-4 px-4 py-3 text-[11px] font-bold transition-all hover:bg-white/5 cursor-pointer items-center ${
                            symbol === ticker.symbol ? "bg-white/5 border-l-2 border-brand-pink" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-zinc-700 hover:text-yellow-500 transition-colors" />
                            <span className="text-white font-orbitron">{ticker.name}</span>
                            <span className="text-[7.5px] bg-brand-pink/10 border border-brand-pink/20 text-brand-pink px-1 py-0.5 rounded leading-none">10x</span>
                            <span className="text-[7.5px] bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-1 py-0.5 rounded leading-none">50%</span>
                          </div>
                          <span className="text-right font-orbitron text-zinc-300">{ticker.price}</span>
                          <span className={`text-right flex items-center justify-end gap-0.5 ${ticker.isPositive ? "text-green-500" : "text-red-500"}`}>
                            {ticker.isPositive ? "+" : ""}{ticker.change}
                          </span>
                          <span className="text-right font-orbitron text-zinc-500">{ticker.volume}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-zinc-600 text-xs">
                        No tickers found for "{searchQuery}"
                      </div>
                    )}
                  </div>

                </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>

        {/* Dynamic Display Metrics based on selected ticker */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className={`text-xl font-bold font-orbitron tracking-tight ${activeTicker.isPositive ? "text-green-500" : "text-red-500"}`}>
              {activeTicker.price}
            </span>
            <span className="text-[10px] text-zinc-600 font-bold">≈{activeTicker.price} USD</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">Change %</span>
            <span className={`text-xs font-bold flex items-center gap-1 ${activeTicker.isPositive ? "text-green-500" : "text-red-500"}`}>
              {activeTicker.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {activeTicker.changeText}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">24H High</span>
            <span className="text-xs font-bold text-white font-orbitron">{activeTicker.high}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">24H Volume</span>
            <span className="text-xs font-bold text-white font-orbitron">{activeTicker.volume}</span>
          </div>

          <div className="flex flex-col hidden lg:flex">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5">Funding Rate / Countdown</span>
            <span className="text-xs font-bold text-zinc-300">{activeTicker.funding}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
