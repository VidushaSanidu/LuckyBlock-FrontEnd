"use client";

import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

export default function Header() {
  return (
    <header
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-violet-100"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Lucky Block</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
          />
        </a>
        <h1 className="p-1 font-sans md:text-xl">Lucky Block Lottery</h1>
      </div>

      <div className="lg:flex lg:flex-1 lg:justify-end">
        <ConnectWallet
          theme={lightTheme({
            colors: {
              accentText: "#9b5add",
              accentButtonBg: "#9b5add",
              primaryButtonBg: "#7645a4",
              primaryButtonText: "#feffff",
            },
          })}
          modalSize={"compact"}
        />
      </div>
    </header>
  );
}
