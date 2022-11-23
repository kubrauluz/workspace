export interface MarketList {
  marketCode: string;
  currentQuote?: string;
  change24h?: string;
  change24hPercent: string;
  highestQuote24h?: string;
  lowestQuote24h?: string;
  weightedAverage24h?: string;
  volume24h?: string;
}
