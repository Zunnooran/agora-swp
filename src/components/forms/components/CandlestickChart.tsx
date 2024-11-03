import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

import { useTheme } from 'theme/theme-context';

import { ICandleData } from './_types';
import { candleStickOptions } from './constants';
import { formatStockData } from './utils';

interface IProps {
  data: ICandleData[];
}

const CandlestickChart = ({ data }: IProps) => {
  const { theme } = useTheme();
  const seriesData = useMemo(() => formatStockData(data), [data]);

  const themeBasedOptions = {
    ...candleStickOptions,
    chart: {
      ...candleStickOptions.chart,
      background: theme === 'dark' ? '#050808' : '#ffffff',
      height: '100%' as string,
    },
    grid: {
      ...candleStickOptions.grid,
      borderColor: theme === 'dark' ? '#333' : '#2929290F',
    },
    tooltip: {
      ...candleStickOptions.tooltip,
      background: theme === 'dark' ? '#333333' : '#ffffff',
      style: {
        ...candleStickOptions.tooltip.style,
        color: theme === 'dark' ? '#aaa' : '#333',
      },
    },
    yaxis: {
      ...candleStickOptions.yaxis,
      labels: {
        ...candleStickOptions.yaxis.labels,
        style: {
          colors: theme === 'dark' ? '#aaa' : '#555',
        },
      },
    },
    xaxis: {
      ...candleStickOptions.xaxis,
      labels: {
        ...candleStickOptions.xaxis.labels,
        style: {
          colors: theme === 'dark' ? '#aaa' : '#555',
        },
      },
    },
  };

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <ReactApexChart series={[{ data: seriesData }]} options={themeBasedOptions} type='candlestick' height='100%' />
    </div>
  );
};

export default CandlestickChart;
