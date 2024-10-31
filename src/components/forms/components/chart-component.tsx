/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';

import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import BarGraphIcon from 'assets/icons/bar-graph.svg?react';
import LineGraphIcon from 'assets/icons/line-graph.svg?react';
import SwitchIcon from 'assets/icons/opArrow.svg?react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, annotationPlugin);

const ChartComponent = () => {
  const chartRef = useRef(null);

  // Sample data for the chart
  const data = {
    labels: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'],
    datasets: [
      {
        label: 'WETH/DAI',
        data: [3170, 3180, 3165, 3175, 3190, 3185, 3210],
        fill: true,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#2ecc71',
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'y',
            value: 3180, // Set to the y-axis value for the center line
            borderColor: '#2ecc71',
            borderWidth: 1,
            borderDash: [5, 5],
            label: {
              display: true,
              content: '3180',
              enabled: true,
              position: 'start',
              color: '#2ecc71',
              font: {
                size: 12,
              },
            },
          },
        ],
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#aaa',
        },
      },
      y: {
        grid: {
          color: '#333',
        },
        ticks: {
          color: '#aaa',
          beginAtZero: false,
        },
      },
    },
  } as any; // Type assertion

  return (
    <div>
      <div className='p-6 bg-[#050808] rounded-xl border border-[#444] w-full max-w-3xl mx-auto text-white'>
        {/* Header */}
        <div className='flex justify-between items-center mb-4'>
          <div className='flex flex-col justify-center items-start gap-2'>
            <select className='bg-[#050808] rounded-lg text-white focus:outline-none text-xxs font-medium'>
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
              <button className='bg-[#061F11] px-6 py-2 text-xxs font-medium border border-[#868686] rounded-lg hover:bg-gray-600 transition'>
                Add to Watch List
              </button>
              <select className='bg-[#061F11] px-3 py-2 border border-[#868686] rounded-lg text-white text-xxs focus:outline-none'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
              </select>
            </div>

            {/* Timeframe Buttons */}
            <div className='flex-centered gap-8'>
              <div className='flex justify-center space-x-1'>
                {['5M', '15M', '1H', '4H', '1D', '1W', '1M'].map((interval) => (
                  <button
                    key={interval}
                    className='text-xxs p-1 bg-[#18442F] dark:text-white text-black rounded hover:bg-gray-600 hover:text-white transition'
                  >
                    {interval}
                  </button>
                ))}
              </div>
              <div className='flex-centered gap-3'>
                <div className='p-1 bg-[#18442F] rounded'>
                  <BarGraphIcon />
                </div>
                <div>
                  <LineGraphIcon />
                </div>
                <div>
                  <SwitchIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className='h-64'>
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>
      {/* Limit Orders and Active Orders Buttons */}
      <div className='mt-6 px-3'>
        <div className='flex justify-between'>
          <span className='text-sm'>Limit Orders</span>
          <div className='space-x-2'>
            <button className='px-4 py-2 border border-[#868686] text-xxs bg-[#061F11] rounded-lg hover:bg-gray-700 hover:text-white transition'>
              Active Orders
            </button>
            <button className='px-4 py-2 border border-[#868686] text-xxs bg-[#061F11] rounded-lg hover:bg-gray-700 hover:text-white transition'>
              Order History
            </button>
          </div>
        </div>
        <div className=' border-t border-white flex items-center justify-between mt-8 py-6'>
          <div className='max-w-screen-sm'>
            <h2 className='text-xs'>Can't find any active orders</h2>
            <p className='text-xs text-[#7D7D7D]'>
              Lorem ipsum dolor sit amet consectetur. Cursus mauris libero imperdiet urna neque habitasse duis.{' '}
            </p>
          </div>
          <button className='px-8 py-3 border border-white text-sm font-medium bg-[#711F1F] rounded-lg hover:bg-gray-700 hover:text-white transition'>
            Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
