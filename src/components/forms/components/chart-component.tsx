/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useTheme } from 'theme/theme-context';

import Button from 'components/core-ui/button/button';

import CandlestickChart from './CandlestickChart';
import { IntervalKey } from './_types';
import { chartTypeOptions, intervalData, intervalDataCandlestick, intervalOptions } from './constants';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, annotationPlugin);

const ChartComponent = () => {
  const chartRef = useRef(null);
  const { theme } = useTheme();
  const [selectedChart, setIsSelectedChart] = useState(2);
  const [selectedInterval, setSelectedInterval] = useState<IntervalKey>('1D');

  const lineChartData = {
    labels: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'],
    datasets: [
      {
        label: 'WETH/DAI',
        data: intervalData[selectedInterval],
        fill: true,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, '#17886E');
          gradient.addColorStop(1, '#000');
          return gradient;
        },
        borderColor: '#2ecc71',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true, backgroundColor: '#2ecc71' },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'y',
            value: 3180,
            borderColor: '#2ecc71',
            borderWidth: 1,
            borderDash: [5, 5],
            label: {
              display: true,
              content: '3180',
              enabled: true,
              position: 'start',
              color: theme === 'dark' ? '#2ecc71' : '#fff',
              font: { size: 12 },
            },
          },
        ],
      },
    },
    scales: {
      x: { grid: { color: theme === 'dark' ? '#333' : '#C4C4C40F' }, ticks: { color: '#aaa' } },
      y: { grid: { color: theme === 'dark' ? '#333' : '#C4C4C40F' }, ticks: { color: '#aaa', beginAtZero: false } },
    },
  } as any;

  const handleSelectedChartChange = (value: number) => {
    setIsSelectedChart(value);
  };

  const handleIntervalChange = (interval: IntervalKey) => {
    setSelectedInterval(interval);
  };

  return (
    <div>
      <div className='p-6 dark:bg-[#050808] rounded-xl border dark:border-[#444] border-[#D1D1D1] w-full max-w-3xl mx-auto dark:text-white text-black'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex flex-col justify-center items-start gap-2'>
            <select className='dark:bg-[#050808] bg-white rounded-lg focus:outline-none text-sm font-medium'>
              <option value='wethDai'>WETH/DAI</option>
              <option value='Agora'>DAI/Agora</option>
            </select>
            <div>
              <span className='text-lg font-semibold'>3,030.31505 </span>
              <span className='text-[#E2250E] text-xxs'> -0.84%</span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-end gap-2'>
            <div className='flex space-x-2'>
              <button className='dark:bg-[#061F11] px-6 py-2 text-xxs font-medium border  transition'>
                Add to Watch List
              </button>
              <select className='dark:bg-[#061F11] bg-white px-3 py-2 border border-[#868686] rounded-lg text-xxs focus:outline-none'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
              </select>
            </div>

            <div className='flex-centered gap-8'>
              <div className='flex justify-center space-x-1'>
                {intervalOptions.map((interval) => (
                  <button
                    key={interval}
                    className={`text-xxs p-1 ${
                      interval === selectedInterval ? 'dark:bg-[#18442F] bg-black text-white' : ''
                    } rounded hover:bg-gray-600 hover:text-white transition`}
                    onClick={() => handleIntervalChange(interval)}
                  >
                    {interval}
                  </button>
                ))}
              </div>
              <div className='flex-centered gap-3'>
                {chartTypeOptions?.map((chart) => (
                  <Button
                    key={chart?.key}
                    variant='text'
                    className={`p-1 ${chart?.key === selectedChart ? 'dark:bg-[#18442F] bg-black text-white' : ''} rounded`}
                    onClick={() => handleSelectedChartChange(chart?.key)}
                  >
                    <chart.Icon />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='h-64 chart-container' style={{ overflow: 'hidden' }}>
          {selectedChart === 1 && intervalDataCandlestick[selectedInterval] ? (
            <CandlestickChart data={intervalDataCandlestick[selectedInterval]} />
          ) : (
            <div style={{ width: '100%', height: '100%' }}>
              <Line ref={chartRef} data={lineChartData} options={lineChartOptions} />
            </div>
          )}
        </div>
      </div>

      <div className='mt-6 px-3'>
        <div className='flex justify-between'>
          <span className='text-sm'>Limit Orders</span>
          <div className='space-x-2'>
            <button className='px-4 py-2 border border-[#868686] text-xxs bg-[#061F11] text-white rounded-lg hover:bg-gray-700 hover:text-white transition'>
              Active Orders
            </button>
            <button className='px-4 py-2 border border-[#868686] text-xxs bg-[#061F11] text-white rounded-lg hover:bg-gray-700 hover:text-white transition'>
              Order History
            </button>
          </div>
        </div>
        <div className=' border-t dark:border-white border-black flex items-center justify-between mt-8 py-6'>
          <div className='max-w-screen-sm'>
            <h2 className='text-xs'>Can't find any active orders</h2>
            <p className='text-xs text-[#7D7D7D]'>
              Lorem ipsum dolor sit amet consectetur. Cursus mauris libero imperdiet urna neque habitasse duis.
            </p>
          </div>
          <button className='px-8 py-3 border text-white dark:border-white border-black text-sm font-medium bg-[#711F1F] rounded-lg hover:bg-[#5c2626] hover:text-white transition'>
            Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
