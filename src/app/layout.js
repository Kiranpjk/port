import './globals.css';
import { Anton, Hanken_Grotesk, Instrument_Serif } from 'next/font/google';

const display = Anton({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });
const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Jaya Kiran Pybogula · UI/UX Designer',
  description:
    'UI/UX designer and Computer Science master’s student who takes products from user research to hi-fi screens in Figma and builds them in React.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
