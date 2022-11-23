export interface BalanceList {
  code: number;
  message: string;
  balances: Balance[];
}

export interface Balance {
  assetCode: string;
  availableAmount: number;
  availableAmountTRYValue: number;
}

export interface OpenOrderList {
  code: number;
  message: string;
  openOrders: OpenOrder[];
}

export interface OpenOrder {
  marketCode:string;
  orderSide: string;
  orderDate: string;
  price: number;
  orderAmount: number;
  fillAmount: number;
  fillPercent: number;
}
