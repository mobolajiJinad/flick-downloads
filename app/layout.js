import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flick Downloads",
  description: "An app to download your favorite movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        <script
          type="text/javascript"
          src="//pl23535124.highrevenuenetwork.com/da/0d/28/da0d28a2f29984c6bfc234d160bb50f4.js"
        ></script>
      </body>
    </html>
  );
}
