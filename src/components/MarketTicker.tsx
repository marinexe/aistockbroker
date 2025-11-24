import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketData {
  symbol: string;
  name: string;
  price: string;
  change: number;
}

const initialMarketData: MarketData[] = [
  { symbol: "AAPL", name: "Apple", price: "$178.45", change: 2.3 },
  { symbol: "MSFT", name: "Microsoft", price: "$384.12", change: 1.8 },
  { symbol: "BTC", name: "Bitcoin", price: "$43,250", change: -0.5 },
  { symbol: "ETH", name: "Ethereum", price: "$2,380", change: 3.2 },
  { symbol: "GOOGL", name: "Google", price: "$141.80", change: 1.2 },
  { symbol: "TSLA", name: "Tesla", price: "$242.84", change: -1.4 },
  { symbol: "AMZN", name: "Amazon", price: "$151.94", change: 0.8 },
  { symbol: "NVDA", name: "NVIDIA", price: "$495.22", change: 4.5 },
];

const MarketTicker = () => {
  const [marketData, setMarketData] = useState(initialMarketData);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((item) => ({
          ...item,
          change: Number((item.change + (Math.random() - 0.5) * 0.5).toFixed(2)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border-y border-border py-3 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
      
      <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Double the items for seamless loop */}
        {[...marketData, ...marketData].map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-3 px-8 border-r border-border/50 min-w-fit"
          >
            <span className="font-bold text-foreground">{item.symbol}</span>
            <span className="text-sm text-muted-foreground">{item.name}</span>
            <span className="font-semibold text-foreground">{item.price}</span>
            <span
              className={`flex items-center gap-1 text-sm font-semibold ${
                item.change >= 0 ? "text-success" : "text-danger"
              }`}
            >
              {item.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {item.change >= 0 ? "+" : ""}
              {item.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
