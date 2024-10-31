/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import DaiIcon from 'assets/icons/dai-icon.svg?react';
import WethIcon from 'assets/icons/weth-icon.svg?react';

const coins = [
  { id: 1, name: 'DAI', icon: <DaiIcon />, subtitle: 'Dai Stablecoin' },
  { id: 2, name: 'WETH', icon: <WethIcon />, subtitle: 'Wrapped Ether' },
];

const CryptoInput = ({ label, currency, amount, estimatedPrice, onAmountChange, onCurrencyChange }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectCoin = (coin: any) => {
    onCurrencyChange(coin.name); // Pass selected currency name to parent
    setDropdownOpen(false);
  };

  return (
    <div className='relative dark:bg-[#0F0F0F] bg-[#FCFAFA] border dark:border-black border-[#BEBEBE] rounded-lg px-3 py-4 flex items-center justify-between space-x-0 text-white'>
      <div className='flex flex-col'>
        <label
          className='text-xs text-[#707070] border border-[#707070] absolute top-0 left-0 px-2 py-[2px] z-10'
          style={{ borderRadius: '5.758px 0px 5.039px 0px' }}
        >
          {label}
        </label>
        <div className='relative w-full'>
          <button
            className='appearance-none dark:bg-[#0F0F0F] dark:text-white text-black px-2 py-1 rounded-lg w-full focus:outline-none flex '
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {coins.find((coin) => coin.name === currency)?.icon}
            <div className='text-start ml-2 w-full'>
              <div className='text-xl font-medium flex items-center'>
                {currency} <span className='ml-2 text-gray-500 pointer-events-none'>▼</span>
              </div>
              <div className='text-[8px]'>{coins.find((coin) => coin.name === currency)?.subtitle}</div>
            </div>
          </button>

          {dropdownOpen && (
            <div className='absolute mt-1 w-full dark:bg-[#0F0F0F] bg-[#FCFAFA] dark:text-white text-black rounded-lg shadow-lg z-20'>
              {coins.map((coin) => (
                <div
                  key={coin.id}
                  className='flex items-center p-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-slate-100'
                  onClick={() => handleSelectCoin(coin)}
                >
                  {coin.icon}
                  <span className='ml-2'>{coin.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col items-end mt-2'>
        <input
          type='text'
          className='dark:bg-[#0f0f0f] bg-[#FCFAFA] dark:text-white text-black focus:outline-none text-right font-medium '
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <span className='text-xxs text-[#8A8A8A]'>
          Estimated price <span className='text-[#aaa] text-sm font-medium'>${estimatedPrice}</span>
        </span>
      </div>
    </div>
  );
};

export default CryptoInput;
