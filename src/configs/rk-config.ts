/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chain, connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

import '@rainbow-me/rainbowkit/styles.css';

export const chains: readonly [Chain, ...Chain[]] = [mainnet, polygon, optimism, arbitrum, base];

export const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, walletConnectWallet, trustWallet, metaMaskWallet, coinbaseWallet],
    },
  ],
  {
    appName: 'Agora Dex',
    projectId: 'AGORA_ID',
  }
);

export const config = createConfig({ connectors, chains } as any);
