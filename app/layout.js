import "@styles/globals.css";
import NavBar from "@components/Nav";

export const metadata = {
  title: "luckyBlock",
  description: "Create ViduzX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-violet-100 h-dvh">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
