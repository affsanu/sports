import "./globals.css";
import { ThemeProvider } from "./components/Materials/Material";
import Header from "./components/Header";

export const metadata = {
  title: "GLOWIN",
  description: "glowin betting website. this is betfair api interrogation exchange software.",
  keywords: "betfair, exchange, bet, betting, gambling, casino, glo, glowin, number one betting site"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ThemeProvider>
          <Header />
          {children}

          </ThemeProvider>
      </body>
    </html>
  );
}
