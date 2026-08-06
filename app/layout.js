import { Oswald, Work_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollGauge from '@/components/ScrollGauge';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap'
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap'
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap'
});

export const metadata = {
  title: 'High Power : Automobile | Force Motors Spare Parts Specialist',
  description:
    'High Power : Automobile — Chhatrapati Sambhajinagar (Aurangabad) based Force Motors genuine & compatible spare parts retailer. Also stocking TVS parts, Lumax & Menda lighting, and Castrol, Veedol, Shell oils. Ex-Force Motors trained mechanics for oil change, gearbox, timing chain, wiring and full workshop service.',
  keywords: [
    'Force Motors spare parts',
    'Force Motors mechanic',
    'Force Traveller parts',
    'Force Gurkha parts',
    'Force Trax parts',
    'Force Urbania parts',
    'auto parts Chhatrapati Sambhajinagar',
    'auto parts Aurangabad',
    'TVS spare parts',
    'Lumax headlight',
    'Menda mirror',
    'Castrol oil dealer'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${workSans.variable} ${spaceMono.variable}`}>
      <body className="font-body bg-asphalt text-paper antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
        <ScrollGauge />
      </body>
    </html>
  );
}
