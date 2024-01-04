import "@styles/globals.css";
import Header from "@components/Header";
import WalletProvider from "@providers/WalletProvider";
import ToastProvider from "@providers/ToastProvider";

export const metadata = {
  title: "luckyBlock",
  description: "Create ViduzX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <ToastProvider />
          <main className="bg-violet-100 h-dvh">
            <Header />
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
