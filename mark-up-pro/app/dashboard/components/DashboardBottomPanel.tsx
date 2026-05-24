"use client";

import { useState } from "react";
import { ChevronRight, MoreVertical } from "lucide-react";
import { tickersData } from "./tickersData";

const subTabs = ["Limit & Market Orders", "Conditional", "TP/SL", "Trailing Stop", "MMR Close"];

export default function DashboardBottomPanel({ 
  symbol = "BTCUSDT",
  openOrders = [],
  onCancelOrder
}: { 
  symbol?: string;
  openOrders?: any[];
  onCancelOrder?: (id: string) => void;
}) {
  const tabs = [`Open Orders (${openOrders.length})`, "Positions (1)", "Order History", "Trade History", "Assets", "All Market"];
  const [activeTab, setActiveTab] = useState("Open Orders");
  const [activeSubTab, setActiveSubTab] = useState(subTabs[0]);

  const activeTicker = tickersData[symbol] || tickersData.BTCUSDT;
  const basePrice = activeTicker.priceNum;

  // Mock Data
  const positions = [
    { 
      symbol: symbol, 
      side: "Long", 
      size: "1.2", 
      entryPrice: (basePrice * 0.98).toFixed(2), 
      markPrice: activeTicker.price, 
      liqPrice: (basePrice * 0.82).toFixed(2), 
      margin: "1,500.00", 
      pnl: activeTicker.isPositive ? "+1,979.76" : "-350.20", 
      pnlPct: activeTicker.isPositive ? "+131.98%" : "-23.35%" 
    },
  ];

  const orderHistory = [
    { symbol: "SOLUSDT", type: "Market", side: "Buy", price: "145.20", qty: "50.000", status: "Filled", time: "2026-05-16 14:20:00" },
    { symbol: "BTCUSDT", type: "Limit", side: "Buy", price: "62,000.00", qty: "0.200", status: "Canceled", time: "2026-05-15 08:10:00" },
  ];

  const tradeHistory = [
    { symbol: "SOLUSDT", side: "Buy", price: "145.20", qty: "50.000", fee: "0.72 USDT", realizedPnl: "0.00", time: "2026-05-16 14:20:00" },
  ];

  const assets = [
    { asset: "USDT", total: "25,450.00", available: "12,000.00", inOrder: "13,450.00", value: "$25,450.00" },
    { asset: "BTC", total: "2.5000", available: "2.5000", inOrder: "0.0000", value: "$167,124.50" },
  ];

  const allMarket = [
    { symbol: "BTCUSDT", price: tickersData.BTCUSDT.price, change: tickersData.BTCUSDT.change, volume: "45.2K BTC" },
    { symbol: "ETHUSDT", price: tickersData.ETHUSDT.price, change: tickersData.ETHUSDT.change, volume: "320.5K ETH" },
    { symbol: "SOLUSDT", price: tickersData.SOLUSDT.price, change: tickersData.SOLUSDT.change, volume: "1.2M SOL" },
  ];

  const renderContent = () => {
    if (activeTab === "Open Orders") {
      return (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5">
              <th className="pb-3 px-6 font-medium">Time</th>
              <th className="pb-3 px-6 font-medium">Symbol</th>
              <th className="pb-3 px-6 font-medium">Type</th>
              <th className="pb-3 px-6 font-medium">Side</th>
              <th className="pb-3 px-6 font-medium">Price</th>
              <th className="pb-3 px-6 font-medium">Qty</th>
              <th className="pb-3 px-6 font-medium">Filled</th>
              <th className="pb-3 px-6 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {openOrders.length > 0 ? (
              openOrders.map((order, i) => (
                <tr key={order.id || i} className="text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-6 text-zinc-400">{order.time}</td>
                  <td className="py-3 px-6 font-bold text-white">{order.symbol}</td>
                  <td className="py-3 px-6 text-zinc-300">{order.type}</td>
                  <td className={`py-3 px-6 font-bold ${order.side === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>{order.side}</td>
                  <td className="py-3 px-6 font-orbitron">{order.price}</td>
                  <td className="py-3 px-6 font-orbitron">{order.qty}</td>
                  <td className="py-3 px-6 text-zinc-300">{order.filled}</td>
                  <td className="py-3 px-6 text-right">
                    <button 
                      onClick={() => onCancelOrder && onCancelOrder(order.id)}
                      className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-8 text-center text-zinc-600 text-xs">
                  No active open orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }
    
    if (activeTab === "Positions") {
      return (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5">
              <th className="pb-3 px-6 font-medium">Symbol</th>
              <th className="pb-3 px-6 font-medium">Size</th>
              <th className="pb-3 px-6 font-medium">Entry Price</th>
              <th className="pb-3 px-6 font-medium">Mark Price</th>
              <th className="pb-3 px-6 font-medium">Liq. Price</th>
              <th className="pb-3 px-6 font-medium">Margin</th>
              <th className="pb-3 px-6 text-right font-medium">PNL (ROE)</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, i) => (
              <tr key={i} className="text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-6">
                  <span className="font-bold text-white block">{pos.symbol}</span>
                  <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-white/10 mt-1 inline-block ${pos.side === 'Long' ? 'text-green-500' : 'text-red-500'}`}>{pos.side}</span>
                </td>
                <td className="py-3 px-6 font-orbitron">{pos.size}</td>
                <td className="py-3 px-6 font-orbitron text-zinc-300">{pos.entryPrice}</td>
                <td className="py-3 px-6 font-orbitron text-white">{pos.markPrice}</td>
                <td className="py-3 px-6 font-orbitron text-orange-400">{pos.liqPrice}</td>
                <td className="py-3 px-6 font-orbitron text-zinc-300">{pos.margin}</td>
                <td className="py-3 px-6 text-right font-orbitron text-green-500">
                  <div className="font-bold">{pos.pnl}</div>
                  <div className="text-[10px]">{pos.pnlPct}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === "Order History") {
      return (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5">
              <th className="pb-3 px-6 font-medium">Time</th>
              <th className="pb-3 px-6 font-medium">Symbol</th>
              <th className="pb-3 px-6 font-medium">Type</th>
              <th className="pb-3 px-6 font-medium">Side</th>
              <th className="pb-3 px-6 font-medium">Price</th>
              <th className="pb-3 px-6 font-medium">Qty</th>
              <th className="pb-3 px-6 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, i) => (
              <tr key={i} className="text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-6 text-zinc-400">{order.time}</td>
                <td className="py-3 px-6 font-bold text-white">{order.symbol}</td>
                <td className="py-3 px-6 text-zinc-300">{order.type}</td>
                <td className={`py-3 px-6 font-bold ${order.side === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>{order.side}</td>
                <td className="py-3 px-6 font-orbitron">{order.price}</td>
                <td className="py-3 px-6 font-orbitron">{order.qty}</td>
                <td className="py-3 px-6 text-right font-bold text-zinc-300">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === "Trade History") {
       return (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5">
              <th className="pb-3 px-6 font-medium">Time</th>
              <th className="pb-3 px-6 font-medium">Symbol</th>
              <th className="pb-3 px-6 font-medium">Side</th>
              <th className="pb-3 px-6 font-medium">Price</th>
              <th className="pb-3 px-6 font-medium">Qty</th>
              <th className="pb-3 px-6 font-medium">Fee</th>
              <th className="pb-3 px-6 text-right font-medium">Realized PNL</th>
            </tr>
          </thead>
          <tbody>
            {tradeHistory.map((trade, i) => (
              <tr key={i} className="text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-6 text-zinc-400">{trade.time}</td>
                <td className="py-3 px-6 font-bold text-white">{trade.symbol}</td>
                <td className={`py-3 px-6 font-bold ${trade.side === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>{trade.side}</td>
                <td className="py-3 px-6 font-orbitron">{trade.price}</td>
                <td className="py-3 px-6 font-orbitron">{trade.qty}</td>
                <td className="py-3 px-6 text-zinc-400">{trade.fee}</td>
                <td className="py-3 px-6 text-right font-orbitron text-zinc-300">{trade.realizedPnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === "Assets") {
       return (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5">
              <th className="pb-3 px-6 font-medium">Asset</th>
              <th className="pb-3 px-6 font-medium">Total Balance</th>
              <th className="pb-3 px-6 font-medium">Available Balance</th>
              <th className="pb-3 px-6 font-medium">In Order</th>
              <th className="pb-3 px-6 text-right font-medium">Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, i) => (
              <tr key={i} className="text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-6 font-bold text-white">{asset.asset}</td>
                <td className="py-3 px-6 font-orbitron">{asset.total}</td>
                <td className="py-3 px-6 font-orbitron text-zinc-300">{asset.available}</td>
                <td className="py-3 px-6 font-orbitron text-zinc-500">{asset.inOrder}</td>
                <td className="py-3 px-6 text-right font-orbitron text-brand-pink">{asset.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === "All Market") {
       return (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5">
              <th className="pb-3 px-6 font-medium">Symbol</th>
              <th className="pb-3 px-6 font-medium">Last Price</th>
              <th className="pb-3 px-6 font-medium">24h Change</th>
              <th className="pb-3 px-6 text-right font-medium">24h Volume</th>
            </tr>
          </thead>
          <tbody>
            {allMarket.map((market, i) => (
              <tr key={i} className="text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-6 font-bold text-white">{market.symbol}</td>
                <td className="py-3 px-6 font-orbitron">{market.price}</td>
                <td className={`py-3 px-6 font-bold ${market.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{market.change}</td>
                <td className="py-3 px-6 text-right font-orbitron text-zinc-400">{market.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return null;
  };

  return (
    <div className="flex-1 bg-[#0A0A0B] flex flex-col border-t border-white/5 min-h-0 h-full">
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-8 h-full overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isSelected = activeTab === "Open Orders" ? tab.startsWith("Open Orders") : activeTab === tab;
            return (
              <button 
                key={tab}
                onClick={() => {
                  if (tab.startsWith("Open Orders")) {
                    setActiveTab("Open Orders");
                  } else {
                    setActiveTab(tab);
                  }
                }}
                className={`text-[10px] font-bold uppercase tracking-widest h-full transition-all whitespace-nowrap ${isSelected ? 'text-white border-b-2 border-brand-pink' : 'text-zinc-500 hover:text-white'}`}
              >
                {tab}
              </button>
            );
          })}
          <ChevronRight className="w-4 h-4 text-zinc-600 flex-shrink-0" />
        </div>
        <MoreVertical className="w-3 h-3 text-zinc-600" />
      </div>

      {activeTab === "Open Orders" || activeTab === "Positions" || activeTab === "Order History" ? (
        <div className="h-12 border-b border-white/5 flex items-center gap-2 px-6 shrink-0 overflow-x-auto scrollbar-hide">
          {subTabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeSubTab === tab ? 'bg-white/10 text-white border border-white/10' : 'text-zinc-600 hover:text-zinc-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : null}

      <div className="flex-1 overflow-y-auto w-full pt-4">
        {renderContent()}
      </div>
    </div>
  );
}
