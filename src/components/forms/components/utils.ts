import { ICandleData } from './_types';

export const formatStockData = (data: ICandleData[]) => {
  return data.map((item) => ({
    x: item.date.getTime(), // Convert date to timestamp
    y: [item.open, item.high, item.low, item.close],
  }));
};
