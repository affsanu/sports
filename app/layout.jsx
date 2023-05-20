import "./globals.css";
import { ThemeProvider } from "./components/Materials/Material";
import Header from "./components/Header";

export const metadata = {
  title: "Sanu Islam",
  description: "Next Js Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <ThemeProvider>
          <Header />
          {children}

          </ThemeProvider>
      </body>
    </html>
  );
}
