import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { CloseOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import { useTheme } from 'theme/theme-context';

import WhiteArrow from 'assets/icons/bArrowRight.svg?react';
import Ethereum from 'assets/icons/ethirium.svg?react';
import LogoIcon from 'assets/icons/logo-header.svg?react';
import LogoutIcon from 'assets/icons/logout.svg?react';
import MetamaskIcon from 'assets/icons/metamask.svg?react';
import BlackArrow from 'assets/icons/wArrowRight.svg?react';

// import BgImage from 'assets/images/bg-side.png';
import { links } from './components/data';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setDarkMode] = useState(theme === 'dark');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    toggleTheme();
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isDrawerOpen]);

  const LogoHeader = () => {
    return (
      <div className='flex-centered'>
        <LogoIcon className='text-primary max-w-[70px]' />
        <div className='lg:text-2xl text-xl font-bold'>Agora Swap</div>
      </div>
    );
  };

  return (
    <header className='flex justify-between items-center md:py-4 py-0 gap-2 border-b dark:border-[#797979] border-[#D7D7D7]'>
      {LogoHeader()}

      {/* Desktop Navigation */}
      <div className='hidden md:flex-centered lg:gap-10 gap-4'>
        <nav className='flex lg:space-x-7 space-x-2'>
          {links?.map((d) => (
            <a href={d.ref} className='hover:underline font-primary'>
              {d.label}
            </a>
          ))}
        </nav>
        <div className='flex-centered lg:gap-2 gap-1'>
          <button className='flex-centered gap-2  bg-[#1594D6] text-white lg:px-4 px-3 lg:py-3 py-2 rounded-full font-medium lg:text-base text-sm'>
            <Ethereum className='inline-block' />
            Ethereum
            <DownOutlined />
          </button>
          <button className='lg:px-4 px-3 lg:py-3 py-2 rounded-full font-medium lg:text-base text-sm border-2 border-[#50CDF5] flex-centered gap-1'>
            <LogoIcon className='inline-block w-8 h-5' /> 0
          </button>
          <button className='dark:bg-[##50d7f521]  lg:px-4 px-3 lg:py-3 py-2 rounded-full font-medium lg:text-base text-sm border-2 dark:border-white border-black flex-centered gap-1'>
            <MetamaskIcon className='inline-block max-w-10' /> xxxxasdf...sdfa
          </button>
          <LogoutIcon />
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30} />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className='md:hidden flex-centered gap-2'>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30} />

        <button onClick={toggleDrawer} aria-label='Open menu'>
          {/* {theme === 'dark' ? <MenuDarkIcon className='w-10 h-10' /> : <MenuLightIcon className='w-10 h-10' />} */}
          <MenuOutlined className='w-10 h-10' />
        </button>
      </div>

      {isDrawerOpen && (
        <div className='fixed inset-0 z-50 dark:bg-[#000] bg-white transition-opacity ease-in-out '>
          {/* {theme === 'dark' && (
              <img src={BgImage} style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: -[10] }} />
            )} */}
          <div className='fixed top-0 left-0 w-full h-full  shadow-md transition-transform ease-in-out transform translate-x-0 px-5'>
            {/* Close button */}
            <div className='flex items-center justify-between'>
              {LogoHeader()}
              {/* <div className='flex-centered lg:gap-2 gap-1'> */}
              <button onClick={toggleDrawer} aria-label='Close menu'>
                {/* {theme === 'dark' ? (
                    <CloseDarkIcon className='w-10 h-10' />
                  ) : (
                    <CloseLightIcon className='w-10 h-10' />
                  )} */}
                <CloseOutlined className='w-10 h-10' />
              </button>
              {/* </div> */}
            </div>
            {/* Navigation Links */}
            <nav className='flex flex-col space-y-6 pr-6 mt-4'>
              {links?.map((d) => (
                <a href={d.ref} className='flex justify-between items-center'>
                  {d.label}
                  {theme === 'dark' ? <WhiteArrow /> : <BlackArrow />}
                </a>
              ))}
            </nav>
            {/* Launch dAPP button */}
            <div className='flex items-start justify-start mt-8 flex-col lg:gap-2 gap-6'>
              <div className='flex-centered gap-4'>
                <button className='flex-centered gap-2  bg-[#1594D6] text-white lg:px-4 px-3 lg:py-3 py-2 rounded-full font-medium lg:text-base text-sm'>
                  <Ethereum className='inline-block' />
                  Ethereum
                  <DownOutlined />
                </button>
                <button className='lg:px-4 px-3 lg:py-3 py-2 rounded-full font-medium lg:text-base text-sm border-2 border-[#50CDF5] flex-centered gap-1'>
                  <LogoIcon className='inline-block w-5 h-5' /> 0
                </button>
              </div>
              <div className='flex items-start justify-start gap-4'>
                <button className='dark:bg-[##50d7f521]  lg:px-4 px-3 lg:py-3 py-2 rounded-full font-medium lg:text-base text-sm border-2 dark:border-white border-black'>
                  <MetamaskIcon className='inline-block max-w-10' /> xxxxasdf...sdfa
                </button>
                <LogoutIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
