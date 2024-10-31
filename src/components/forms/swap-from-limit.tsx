/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';

import { useTheme } from 'theme/theme-context';

import Button from 'components/core-ui/button/button';

import PusIconLight from 'assets/icons/plus-light.svg?react';
import PusIcon from 'assets/icons/plus.svg?react';
import ReloadIconLight from 'assets/icons/reload-light.svg?react';
import ReloadIcon from 'assets/icons/reload.svg?react';
import ShiftIconLight from 'assets/icons/shift-light.svg?react';
import ShiftIcon from 'assets/icons/shift.svg?react';
import SwapEthIcon from 'assets/icons/swap-eth.svg?react';
import SwapIcon from 'assets/icons/swap.svg?react';

import ChartComponent from './components/chart-component';
import CryptoInput from './components/crypto-input';

interface IProps {
  setSelectedTab: Dispatch<SetStateAction<number>>;
  selectedTab: number;
}

const SwapFormLimit = ({ setSelectedTab, selectedTab }: IProps) => {
  const { theme } = useTheme();

  // State for currency and amount for each input
  const [payCurrency, setPayCurrency] = useState('DAI');
  const [payAmount, setPayAmount] = useState('16546518910.156180');
  const [receiveCurrency, setReceiveCurrency] = useState('WETH');
  const [receiveAmount, setReceiveAmount] = useState('53816518910.156180');

  const handleSubmit = () => {
    console.log('You pay:', payAmount, payCurrency);
    console.log('You receive:', receiveAmount, receiveCurrency);
    // Add your submit logic here
  };

  return (
    <section className='pt-10'>
      <h2 className='text-center md:text-[40px] sm:text-2xl text-xl font-semibold mb-1'>Swap Today!</h2>
      <p className='text-center text-xs font-light mb-6'>across multiple Coins on Agora Dex</p>
      <div className='flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center gap-4'>
        <div className='md:w-1/2 w-full'>
          <ChartComponent />
        </div>
        <div className='w-full max-w-xl mx-auto text-white'>
          {/* Swap Form */}
          <div className='dark:bg-[#1C2225] rounded-xl shadow-lg p-6 space-y-4 border dark:border-[#3D3D3D] border-[#D1D1D1]'>
            <div className='flex items-center justify-between'>
              <div className='flex-centered gap-2'>
                <Button
                  variant='text'
                  onClick={() => setSelectedTab(0)}
                  className={`${selectedTab === 0 ? 'dark:text-white text-black' : 'text-[#646464]'}`}
                >
                  Swap
                </Button>
                <Button
                  variant='text'
                  onClick={() => setSelectedTab(1)}
                  className={`${selectedTab === 1 ? 'dark:text-white text-black' : 'text-[#646464]'}`}
                >
                  Limit
                </Button>
              </div>
              <div className='flex-centered gap-2'>
                {theme === 'dark' ? (
                  <>
                    <ReloadIcon />
                    <PusIcon />
                    <ShiftIcon />
                  </>
                ) : (
                  <>
                    <ReloadIconLight />
                    <PusIconLight />
                    <ShiftIconLight />
                  </>
                )}
              </div>
            </div>

            {/* Container for Fields with Swap Icon */}
            <div className='relative space-y-4'>
              {/* "You Pay" Section */}
              <CryptoInput
                label='You Pay'
                currency={payCurrency}
                amount={payAmount}
                onAmountChange={(value: any) => setPayAmount(value)}
                onCurrencyChange={(currency: any) => setPayCurrency(currency)}
                estimatedPrice='132,155,561'
              />

              {/* Swap Icon Positioned Between the Fields */}
              <div className='absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20'>
                <SwapIcon />
              </div>

              {/* "You Receive" Section */}
              <CryptoInput
                label='You Receive'
                currency={receiveCurrency}
                amount={receiveAmount}
                onAmountChange={(value: any) => setReceiveAmount(value)}
                onCurrencyChange={(currency: any) => setReceiveCurrency(currency)}
                estimatedPrice='54,530'
              />
            </div>

            <div className='flex-centered gap-8'>
              <div className='w-[70%] border border-[#424242] dark:text-white text-black rounded-lg p-4 flex items-center justify-between'>
                <div>
                  <p className='text-xxs '>Pay DAI at rate (-0.91%)</p>
                  <p className='text-xl font-medium'>0.051568918818</p>
                </div>

                {/* Fee Section */}
                <div>
                  <p className='text-[#50E89F] text-xxs'>Set to market</p>
                  <div className='text-xxs text-[#aaa] p-1 bg-[#2D2D2D] flex-centered gap-1 mt-1'>
                    <p>ETH</p>
                    <SwapEthIcon />
                  </div>
                </div>
              </div>

              <div className='w-[7\30%] border border-[#424242] dark:text-white text-black rounded-lg p-4 flex items-end justify-center flex-col'>
                <p className='text-xxs'>Expires in</p>
                <select className='bg-[#1C2225] rounded-lg text-white focus:outline-none text-xl font-medium'>
                  <option value='1'>7 days</option>
                  <option value='2'>8 days</option>
                  <option value='3'>9 days</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className='w-full mt-6 btnGreen text-white py-3 rounded-lg hover:bg-green-700 transition font-medium text-sm'
              onClick={handleSubmit}
            >
              Give permission to use DAI
            </button>
            <button
              className='w-full mt-6 bg-[#313131] text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium text-sm'
              onClick={handleSubmit}
            >
              Review Limit Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapFormLimit;
