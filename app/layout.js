
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Head from "next/head";
import 'swiper/css';
import "swiper/css/effect-fade";
 
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokhara rentals",
  description: "Store Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
      <body className={inter.className}>
   
          <StoreProvider>
            { children }
          </StoreProvider>
        
      </body>
    </html>
  );
}
