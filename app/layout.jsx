import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import "swiper/css";
import "swiper/css/effect-fade";
import 'leaflet/dist/leaflet.css';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
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
        <StoreProvider>{children}</StoreProvider>
      </body>
      
    </html>
  );
}
