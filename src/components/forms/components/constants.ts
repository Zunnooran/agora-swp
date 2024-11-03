import BarGraphIcon from 'assets/icons/bar-graph.svg?react';
import LineGraphIcon from 'assets/icons/line-graph.svg?react';
import SwitchIcon from 'assets/icons/opArrow.svg?react';

import { ICandleStick, IntervalKey } from './_types';

export const candleStickOptions = {
  chart: {
    type: 'candlestick' as const,
    background: '#050808',
  },
  title: {
    text: '',
    align: 'left' as const,
    style: {
      color: '#2ecc71',
    },
  },
  xaxis: {
    type: 'datetime' as const,
    labels: {
      style: {
        colors: '#aaa',
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
    labels: {
      style: {
        colors: '#aaa',
      },
    },
  },
  grid: {
    borderColor: '#333',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif',
      color: '#aaa',
    },
    onDatasetHover: {
      highlightDataSeries: true,
    },
    background: '#333333',
  },
};

export const chartTypeOptions = [
  { type: 'candleStick', key: 1, Icon: BarGraphIcon },
  { type: 'linear', key: 2, Icon: LineGraphIcon },
  { type: 'switch', key: 3, Icon: SwitchIcon },
];

export const intervalOptions: IntervalKey[] = ['5M', '15M', '1H', '4H', '1D', '1W', '1M'];

// Sample data for different intervals
export const intervalData: Record<IntervalKey, number[]> = {
  '5M': [3170, 3180, 3165, 3175, 3190, 3185, 3210],
  '15M': [3150, 3170, 3185, 3170, 3195, 3210, 3205],
  '1H': [3160, 3175, 3180, 3175, 3185, 3195, 3200],
  '4H': [3175, 3185, 3190, 3180, 3200, 3195, 3215],
  '1D': [3170, 3180, 3165, 3175, 3190, 3185, 3210], // Default
  '1W': [3140, 3150, 3175, 3190, 3210, 3180, 3165],
  '1M': [3100, 3120, 3145, 3160, 3195, 3175, 3185],
};

export const intervalDataCandlestick: ICandleStick = {
  '5M': [
    { date: new Date(2023, 10, 1, 10, 0), open: 3170, high: 3180, low: 3165, close: 3175 },
    { date: new Date(2023, 10, 1, 10, 5), open: 3175, high: 3185, low: 3170, close: 3180 },
    { date: new Date(2023, 10, 1, 10, 10), open: 3175, high: 3185, low: 3175, close: 3180 },
    { date: new Date(2023, 10, 1, 10, 15), open: 3175, high: 3185, low: 3170, close: 3180 },
  ],
  '15M': [],
  '1H': [],
  '4H': [],
  '1D': [
    { date: new Date(2023, 10, 1), open: 3170, high: 3185, low: 3160, close: 3180 },
    { date: new Date(2023, 10, 2), open: 3180, high: 3190, low: 3170, close: 3175 },
    { date: new Date(2023, 10, 3), open: 3180, high: 3190, low: 3170, close: 3175 },
    { date: new Date(2023, 10, 4), open: 3180, high: 3190, low: 3170, close: 3175 },
    { date: new Date(2023, 10, 5), open: 3170, high: 3185, low: 3160, close: 3165 },
  ],
  '1W': [],
  '1M': [],
};
