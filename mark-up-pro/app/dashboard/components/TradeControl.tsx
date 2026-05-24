"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, LayoutGrid, MoreVertical, HelpCircle, EyeOff } from "lucide-react";
import { tickersData } from "./tickersData";

export default function TradeControl({ 
  symbol = "BTCUSDT",
  onPlaceOrder
}: { 
  symbol?: string;
  onPlaceOrder?: (side: "Buy" | "Sell", price: string, qty: string, type?: string) => void;
}) {
  const activeTicker = tickersData[symbol] || tickersData.BTCUSDT;
  
  // Tab states
  const [activeTab, setActiveTab] = useState<"Spot" | "Convert">("Spot");
  const [marginEnabled, setMarginEnabled] = useState(false);
  const [orderSide, setOrderSide] = useState<"Buy" | "Sell">("Sell");
  const [orderType, setOrderType] = useState<"Limit" | "Market" | "TP/SL">("Limit");
  
  // Inputs
  const [price, setPrice] = useState(activeTicker.price.replace(/,/g, ""));
  const [quantity, setQuantity] = useState("");
  const [sliderPct, setSliderPct] = useState(0);

  // Sync inputs when active ticker or orderType changes
  useEffect(() => {
    if (orderType === "Market") {
      setPrice("Market Price");
    } else {
      setPrice(activeTicker.price.replace(/,/g, ""));
    }
    setQuantity("");
    setSliderPct(0);
  }, [symbol, activeTicker, orderType]);

  const baseName = symbol.replace("USDT", "");
  
  // Calculated values
  const numPrice = orderType === "Market" ? activeTicker.priceNum : (parseFloat(price) || 0);
  const numQty = parseFloat(quantity) || 0;
  const orderValue = numPrice * numQty;

  const handleSliderClick = (pct: number) => {
    setSliderPct(pct);
    if (orderSide === "Buy") {
      const mockUsdtBalance = 50000;
      const targetUsdt = (pct / 100) * mockUsdtBalance;
      const targetQty = numPrice > 0 ? (targetUsdt / numPrice).toFixed(3) : "0.000";
      setQuantity(targetQty);
    } else {
      const mockBtcBalance = 1.5;
      const targetQty = ((pct / 100) * mockBtcBalance).toFixed(3);
      setQuantity(targetQty);
    }
  };

  const handlePlaceOrderClick = () => {
    if (!quantity || isNaN(parseFloat(quantity)) || parseFloat(quantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }
    if (onPlaceOrder) {
      onPlaceOrder(orderSide, price, quantity, orderType);
      setQuantity("");
      setSliderPct(0);
    }
  };

  return (
    <div className="w-76 bg-[#0E0E12] border-l border-white/5 flex flex-col shrink-0 overflow-y-auto scrollbar-hide select-none text-zinc-400 font-sans shadow-2xl relative">
      
      {/* Header */}
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-5 shrink-0 bg-[#121217]/50 backdrop-blur-md sticky top-0 z-30">
        <span className="text-xs font-bold text-white tracking-wide uppercase">Trade</span>
        <div className="flex items-center gap-3 text-zinc-500">
           <FileText className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
           <LayoutGrid className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
           <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      <div className="p-5 space-y-5 flex-1 flex flex-col">
        
        {/* Spot/Convert & Margin toggle */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex gap-4 text-xs font-extrabold tracking-wider uppercase relative">
            {(["Spot", "Convert"] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1.5 transition-all relative ${activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="spotConvertIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer gap-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Margin</span>
              <div 
                onClick={() => setMarginEnabled(!marginEnabled)}
                className={`w-8 h-4 rounded-full transition-all relative ${marginEnabled ? 'bg-orange-500' : 'bg-zinc-800'}`}
              >
                <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all shadow-md ${marginEnabled ? 'left-4.5' : 'left-0.5'}`} />
              </div>
            </label>
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          </div>
        </div>

        {/* Buy / Sell Spring-loaded Toggle Capsule */}
        <div className="relative grid grid-cols-2 bg-[#060608] p-1 rounded-xl gap-1 shrink-0 overflow-hidden border border-white/[0.02]">
          {/* Capsule Slider Background */}
          <motion.div 
            className={`absolute top-1 bottom-1 rounded-lg z-0 ${orderSide === "Buy" ? "bg-[#22C55E]" : "bg-[#EF4444]"}`}
            initial={false}
            animate={{
              left: orderSide === "Buy" ? "4px" : "50%",
              right: orderSide === "Buy" ? "50%" : "4px"
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          />
          
          <button 
            onClick={() => setOrderSide("Buy")}
            className={`py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all relative z-10 ${
              orderSide === "Buy" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Buy
          </button>
          <button 
            onClick={() => setOrderSide("Sell")}
            className={`py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all relative z-10 ${
              orderSide === "Sell" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Sell
          </button>
        </div>

        {/* Order Type Selectors with Underlines */}
        <div className="flex items-center justify-between text-[10.5px] font-extrabold uppercase tracking-wider text-zinc-500 shrink-0">
          <div className="flex gap-4 relative">
            {(["Limit", "Market", "TP/SL"] as const).map((type) => (
              <button 
                key={type}
                onClick={() => setOrderType(type)}
                className={`transition-colors pb-1 relative ${orderType === type ? "text-orange-500" : "hover:text-zinc-300"}`}
              >
                {type === "TP/SL" ? (
                  <span className="flex items-center gap-0.5">TP/SL <ChevronDown className="w-3 h-3 text-zinc-500" /></span>
                ) : type}
                {orderType === type && (
                  <motion.div 
                    layoutId="orderTypeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
          <HelpCircle className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
        </div>

        {/* Available Balance */}
        <div className="flex justify-between text-[10px] font-black uppercase tracking-wider shrink-0">
          <span className="text-zinc-500 border-b border-dashed border-zinc-700/60 pb-0.5 cursor-help">Available Balance</span>
          <span className="text-zinc-300 flex items-center gap-1">
            {orderSide === "Buy" ? "******** USDT" : `******** ${baseName}`}
            <span className="text-orange-500 bg-orange-500/10 h-3.5 w-3.5 rounded-full flex items-center justify-center text-[9px] font-black cursor-pointer hover:bg-orange-500/20 leading-none">＋</span>
          </span>
        </div>

        {/* Form Fields Section */}
        <div className="space-y-3.5 flex-1 overflow-y-auto pr-0.5 scrollbar-hide">
          
          {/* Price Input box (Changes style based on Market order mode) */}
          <div className="space-y-1">
            <div className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all border duration-200 ${
              orderType === "Market" 
                ? "bg-[#141419]/40 border-white/[0.02] opacity-60" 
                : "bg-[#121217] border-white/5 hover:border-white/10 focus-within:border-orange-500/50"
            }`}>
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wide">Price</span>
              <input 
                type="text" 
                value={price}
                onChange={(e) => orderType !== "Market" && setPrice(e.target.value)}
                disabled={orderType === "Market"}
                className={`bg-transparent border-none text-right focus:outline-none text-xs font-bold w-full pr-3 font-orbitron ${
                  orderType === "Market" ? "text-zinc-500 cursor-not-allowed font-medium" : "text-white"
                }`}
                placeholder="0.00"
              />
              <span className="text-[10px] font-black text-zinc-400">USDT</span>
            </div>
          </div>

          {/* Quantity Input box */}
          <div className="space-y-1">
            <div className="flex items-center justify-between bg-[#121217] border border-white/5 hover:border-white/10 rounded-xl px-4 py-3 transition-all focus-within:border-orange-500/50">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wide">Quantity</span>
              <input 
                type="text" 
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  setSliderPct(0);
                }}
                className="bg-transparent border-none text-right focus:outline-none text-xs font-bold text-white w-full pr-3 font-orbitron placeholder:text-zinc-800"
              />
              <span className="text-[10px] font-black text-zinc-400">{baseName}</span>
            </div>
          </div>

          {/* Dynamic Percentage Slider (Sleek Orange glow) */}
          <div className="pt-2 pb-1.5 relative px-1">
            <div className="h-1 w-full bg-zinc-800/80 rounded-full relative">
              {/* Active filled line */}
              <div 
                className="absolute left-0 top-0 bottom-0 bg-orange-500 rounded-full transition-all duration-150" 
                style={{ width: `${sliderPct}%` }}
              />
              
              {/* Handle */}
              <div 
                className="absolute w-3 h-3 bg-[#0E0E12] border-2 border-orange-500 rounded-full -top-1 shadow-[0_0_10px_rgba(249,115,22,0.4)] transition-all duration-150 cursor-pointer z-20"
                style={{ left: `calc(${sliderPct}% - 6px)` }}
              />

              {/* Dots */}
              <div className="flex justify-between absolute -top-1 w-full z-10 px-0.5">
                {[0, 25, 50, 75, 100].map((pct) => (
                  <div 
                    key={pct} 
                    onClick={() => handleSliderClick(pct)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all border ${
                      sliderPct >= pct 
                        ? "bg-orange-500 border-orange-500 scale-110 shadow-[0_0_6px_rgba(249,115,22,0.4)]" 
                        : "bg-[#0E0E12] border-zinc-700 hover:border-zinc-500"
                    }`}
                    title={`${pct}%`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-[9px] font-bold text-zinc-600 tracking-wider">
               <span>0</span>
               <span>100%</span>
            </div>
          </div>

          {/* Order Value Box (Dynamic update) */}
          <div className="space-y-1">
            <div className="flex flex-col justify-center bg-[#121217]/40 border border-white/[0.04] rounded-xl px-4 py-2.5 transition-colors gap-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wide">Order Value</span>
                <span className="text-xs font-bold text-zinc-300 font-orbitron">
                  {orderValue > 0 ? orderValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}
                </span>
                <span className="text-[10px] font-black text-zinc-500 ml-1.5">USDT</span>
              </div>
              <span className="text-[9px] text-zinc-700 font-extrabold self-end pr-8">
                {orderValue > 0 ? `≈ $${orderValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "-- USD"}
              </span>
            </div>
          </div>

          {/* Max selling amount row */}
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider py-0.5">
            <span className="text-zinc-500">
              {orderSide === "Buy" ? "Max. buying amount" : "Max. selling amount"}
            </span>
            <span className="text-zinc-300 font-orbitron">
              {orderSide === "Buy" ? "******** USDT" : `******** ${baseName}`}
            </span>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2.5 pt-2">
            <label className="flex items-center gap-2 cursor-pointer group text-[10px] font-black uppercase tracking-wider text-zinc-500">
               <input type="checkbox" className="accent-orange-500 bg-transparent rounded border-white/10" />
               <span className="border-b border-dashed border-zinc-800 pb-0.5 cursor-help hover:text-zinc-300 transition-colors">TP/SL</span>
            </label>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-zinc-500">
              <label className="flex items-center gap-2 cursor-pointer group">
                 <input type="checkbox" className="accent-orange-500 bg-transparent rounded border-white/10" />
                 <span className="border-b border-dashed border-zinc-800 pb-0.5 cursor-help hover:text-zinc-300 transition-colors">Post-Only</span>
              </label>
              <span className="text-[9.5px] font-extrabold text-zinc-400 flex items-center gap-0.5 cursor-pointer hover:text-white transition-colors">
                Good-Till-Canceled <ChevronDown className="w-3 h-3 text-zinc-600" />
              </span>
            </div>
          </div>

        </div>

        {/* Primary Placement Action Button (Pressed scale animations) */}
        <div className="pt-2 shrink-0">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={handlePlaceOrderClick}
            className={`w-full py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-white transition-all hover:brightness-110 active:scale-[0.98] shadow-lg ${
              orderSide === "Buy" 
                ? "bg-[#22C55E] shadow-green-500/10" 
                : "bg-[#EF4444] shadow-red-500/10"
            }`}
          >
            {orderSide === "Buy" ? `Buy ${baseName}` : `Sell ${baseName}`}
          </motion.button>
        </div>

        {/* Fee rate disclosure */}
        <div className="flex items-center justify-center gap-1 text-[9.5px] font-extrabold text-zinc-500 uppercase tracking-widest py-0.5 shrink-0">
          <span>⚙ Fee Rate</span>
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
        </div>

        {/* Action pills row */}
        <div className="grid grid-cols-3 gap-2 shrink-0 pt-1">
          {["Borrow", "Deposit", "Transfer"].map((act) => (
            <button 
              key={act}
              className="py-2.5 rounded-xl bg-[#121217] border border-white/5 text-[9px] font-black uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all"
            >
              {act}
            </button>
          ))}
        </div>

        {/* Collapsible Unified Trading Account info */}
        <div className="pt-4 border-t border-white/5 space-y-2.5 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold text-white tracking-wide uppercase">Unified Trading Account</span>
              <EyeOff className="w-3.5 h-3.5 text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors" />
              <HelpCircle className="w-3.5 h-3.5 text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors" />
            </div>
            <span className="text-[10px] font-bold text-orange-500 hover:text-orange-400 cursor-pointer transition-colors uppercase tracking-wider">Buy Crypto</span>
          </div>
          
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
            <span className="text-zinc-500">Margin Mode</span>
            <span className="text-zinc-300 hover:text-white cursor-pointer transition-colors flex items-center gap-0.5">
              Cross Margin <ChevronDown className="w-3.5 h-3.5 text-zinc-500 -rotate-90" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
