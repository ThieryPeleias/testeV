'use client';
import { Roboto } from 'next/font/google';
import './globals.css';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children, locale }: {
  children: React.ReactNode;
  locale: string;
}) {



  const [showScroll, setShowScroll] = useState(false);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  
 useEffect(() => {
    const handleScroll = () => {
      // Show the button if the user has scrolled past the Hero section
      setShowScroll(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <Header />
          {children}
          {showScroll && <ScrollToTopButton />}
        <Footer />
        </body>
     
    </html>
  );
}

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-10 right-10">
      <Button onClick={scrollToTop} className="rounded-full p-4 shadow-md bg-[#007586] hover:bg-[#00EDEB]" size="icon">
        <ArrowUp className="h-6 w-6 text-white" />
      </Button>
    </div>   
  );
}
