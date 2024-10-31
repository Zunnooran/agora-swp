/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { useTheme } from 'theme/theme-context';

import Button from 'components/core-ui/button/button';

import PusIconLight from 'assets/icons/plus-light.svg?react';
import PusIcon from 'assets/icons/plus.svg?react';
import ReloadIconLight from 'assets/icons/reload-light.svg?react';
import ReloadIcon from 'assets/icons/reload.svg?react';
import ShiftIconLight from 'assets/icons/shift-light.svg?react';
import ShiftIcon from 'assets/icons/shift.svg?react';

import CryptoInput from './components/crypto-input';

const SwapForm = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

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
    <div className='p-8 w-full max-w-xl mx-auto text-white'>
      <h2 className='text-center md:text-[40px] sm:text-2xl text-xl font-semibold mb-1'>Swap Today!</h2>
      <p className='text-center text-xs font-light mb-6'>across multiple Coins on Agora Dex</p>

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

        {/* "You Pay" Section */}
        <CryptoInput
          label='You Pay'
          currency={payCurrency}
          amount={payAmount}
          onAmountChange={(value: any) => setPayAmount(value)}
          onCurrencyChange={(currency: any) => setPayCurrency(currency)}
          estimatedPrice='132,155,561'
        />

        {/* Swap Icon */}
        <div className='bg-gray-700 rounded-full p-2 flex items-center justify-center'>
          <span className='text-2xl text-white'>↕️</span>
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

        {/* Exchange Rate */}
        <p className='text-sm text-gray-400 text-center mt-2'>1 WETH = 3332.025 DAI (~$3,3351.6)</p>

        {/* Fee Section */}
        <p className='text-sm text-gray-400 text-center'>
          Free <span className='text-white'>$13.76</span>
        </p>

        {/* Submit Button */}
        <button
          className='w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold'
          onClick={handleSubmit}
        >
          Give permission to use DAI
        </button>
      </div>
    </div>
  );
};

export default SwapForm;
