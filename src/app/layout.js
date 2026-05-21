import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata = {
  title: 'Jaya Kiran • Portfolio',
  description:
    'Full-stack developer portfolio featuring modern web experiences, polished UI/UX, and selected projects.',
  keywords: 'developer portfolio, next.js, react, framer motion, ui/ux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
