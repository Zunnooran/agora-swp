/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

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
    <div className='relative bg-gray-900 rounded-lg p-4 flex items-center justify-between space-x-4 text-white'>
      <div className='flex flex-col'>
        <label className='text-xs text-gray-400 absolute top-0'>{label}</label>
        <div className='relative w-full'>
          <button
            className='appearance-none bg-gray-900 text-white px-2 py-1 rounded-lg w-full focus:outline-none flex '
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
            <div className='absolute mt-1 w-full bg-gray-800 rounded-lg shadow-lg z-10'>
              {coins.map((coin) => (
                <div
                  key={coin.id}
                  className='flex items-center p-2 cursor-pointer hover:bg-gray-700'
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
      <div className='flex flex-col items-end'>
        <input
          type='text'
          className='bg-gray-900 text-right text-2xl font-semibold focus:outline-none'
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <span className='text-xs text-gray-400'>Estimated price ${estimatedPrice}</span>
      </div>
    </div>
  );
};

export default CryptoInput;
