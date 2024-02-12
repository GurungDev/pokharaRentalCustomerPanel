
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import 'swiper/css';
import "swiper/css/effect-fade";
 
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokhara rentals",
  description: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
      <body className={inter.className}>
   
          <StoreProvider>
            { children }
          </StoreProvider>
        
      </body>
    </html>
  );
}
