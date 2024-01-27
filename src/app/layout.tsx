import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
const inter = Inter({ subsets: ['latin'] });
import { NavbarDemo } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Ashik Kabeer',
  description: 'Backend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <NavbarDemo />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
