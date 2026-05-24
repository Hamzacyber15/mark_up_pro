"use client";

import { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import MarketTicker from "./components/MarketTicker";
import TradingChart from "./components/TradingChart";
import OrderBookPanel from "./components/OrderBookPanel";
import TradeControl from "./components/TradeControl";
import DashboardBottomPanel from "./components/DashboardBottomPanel";
import { tickersData } from "./components/tickersData";

export default function DashboardClient() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [openOrders, setOpenOrders] = useState<any[]>([]);

  // Initialize open orders when symbol changes
  useEffect(() => {
    const activeTicker = tickersData[symbol] || tickersData.BTCUSDT;
    const basePrice = activeTicker.priceNum;
    
    setOpenOrders([
      { 
        id: "order-1",
        symbol: symbol, 
        type: "Limit", 
        side: "Buy", 
        price: (basePrice * 0.95).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), 
        qty: "0.500", 
        filled: "0.00%", 
        time: new Date(Date.now() - 3600000).toISOString().replace("T", " ").slice(0, 19) 
      },
      { 
        id: "order-2",
        symbol: symbol === "ETHUSDT" ? "BTCUSDT" : "ETHUSDT", 
        type: "Limit", 
        side: "Sell", 
        price: symbol === "ETHUSDT" ? "76,000.00" : "2,150.00", 
        qty: "1.250", 
        filled: "50.00%", 
        time: new Date(Date.now() - 7200000).toISOString().replace("T", " ").slice(0, 19) 
      },
    ]);
  }, [symbol]);

  const handlePlaceOrder = (side: "Buy" | "Sell", price: string, qty: string, type: string = "Limit") => {
    const activeTicker = tickersData[symbol] || tickersData.BTCUSDT;
    const cleanPrice = price === "Market Price" ? activeTicker.price.replace(/,/g, "") : price;
    const numPrice = parseFloat(cleanPrice.replace(/,/g, ""));
    const numQty = parseFloat(qty);
    
    if (isNaN(numPrice) || isNaN(numQty) || numQty <= 0) return;

    const newOrder = {
      id: `order-${Date.now()}`,
      symbol: symbol,
      type: type,
      side: side,
      price: type === "Market" ? "Market" : numPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      qty: numQty.toFixed(3),
      filled: "0.00%",
      time: new Date().toISOString().replace("T", " ").slice(0, 19)
    };

    setOpenOrders((prev) => [newOrder, ...prev]);
  };

  const handleCancelOrder = (id: string) => {
    setOpenOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-white overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Left Section: Market, Chart, Bottom Panel */}
          <div className="flex-1 flex flex-col min-w-0">
            <MarketTicker symbol={symbol} onSymbolChange={setSymbol} />
            
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex flex-[3] min-h-0">
                <TradingChart symbol={symbol} />
                <OrderBookPanel symbol={symbol} />
              </div>
              
              <div className="flex-1 min-h-0">
                <DashboardBottomPanel 
                  symbol={symbol} 
                  openOrders={openOrders} 
                  onCancelOrder={handleCancelOrder} 
                />
              </div>
            </div>
          </div>

          {/* Right Section: Trade Panel */}
          <TradeControl symbol={symbol} onPlaceOrder={handlePlaceOrder} />
        </div>
      </div>
    </div>
  );
}
