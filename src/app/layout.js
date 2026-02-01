import './globals.css';

export const metadata = {
  title: 'Jaya Kiran - Developer Portfolio',
  description: 'Modern developer portfolio showcasing projects, skills, and experience with Next.js, Three.js, and GSAP',
  keywords: 'developer, portfolio, react, nextjs, threejs, full-stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
