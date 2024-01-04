"use client";

import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";

const WalletProvider = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="c25bd91a700b8355d2d932a6e8d00366"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        walletConnect(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default WalletProvider;
