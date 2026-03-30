import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vibelabs.dev'),
  title: 'VibeLabs — Building Digital Experiences That Matter',
  description: 'VibeLabs creates innovative apps and tools that empower users. We build products that solve real problems with a focus on quality and autonomy.',
  openGraph: {
    title: 'VibeLabs — Building Digital Experiences That Matter',
    description: 'VibeLabs creates innovative apps and tools that empower users. We build products that solve real problems with a focus on quality and autonomy.',
    type: 'website',
    siteName: 'VibeLabs',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeLabs — Building Digital Experiences That Matter',
    description: 'VibeLabs creates innovative apps and tools that empower users. We build products that solve real problems with a focus on quality and autonomy.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-[#1A1A2E] antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
