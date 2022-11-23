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

export class Markets {
  public marketCode?: string;
  public currentQuote?: string;
  public change24h?: string;
  public change24hPercent?: string;
  public highestQuote24h?: string;
  public lowestQuote24h?: string;
  public weightedAverage24h?: string;
  public volume24h?: string;
}
