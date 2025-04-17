'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Header(): JSX.Element {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Desktop: logo fully to the left and navigation links fully to the right */}
      {!isMobile && <DesktopHeader />}
      {/* MobileHeader remains unchanged */}
      {isMobile && <MobileHeader />}
    </>
  );
}

function DesktopHeader(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollThreshold = 200;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 w-full z-50 text-white transition-colors duration-300 ${
    isScrolled ? "bg-[#222222]" : "bg-transparent"
  }`;

  const scrollToSection = (id: string): void => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Se não estiver na página principal, navega para "/" com o hash da seção
      window.location.href = "/#" + id;
    }
  };

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between w-full h-16">
        {/* Logo on the far left */}
        <div className="flex items-center pl-4">
          <Link href="/">
            <VirtuartLogo
              className={`origin-left h-10 transition-transform duration-300 ${
                isScrolled ? "scale-[0.7]" : "scale-100"
              } text-white`}
            />
          </Link>
        </div>
        {/* Navigation on the far right */}
        <nav>
          <ul className="flex items-center space-x-1">
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="group relative rounded px-3 py-2 transition-colors text-white"
              >
                <span className="relative inline-block">
                  Services
                  <span className="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-left transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('events')}
                className="group relative rounded px-3 py-2 transition-colors text-white"
              >
                <span className="relative inline-block">
                  Events
                  <span className="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-left transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('clients')}
                className="group relative rounded px-3 py-2 transition-colors text-white"
              >
                <span className="relative inline-block">
                  Clients
                  <span className="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-left transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </span>
              </button>
            </li>
            <li>
              <Link
                href="/contact"
                className="group relative rounded px-3 py-2 transition-colors text-white"
              >
                <span className="relative inline-block">
                  Contact
                  <span className="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-left transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function MobileHeader(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id: string): void => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "/#" + id;
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent text-white">
      <div className="flex items-center justify-between h-16 px-4">
        <Link href="/">
          <VirtuartLogo
            className={`h-6 transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
        <button onClick={toggleMenu} className="focus:outline-none">
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <nav className="bg-transparent">
          <ul className="flex flex-col items-end space-y-2 px-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-white hover:text-[#007586]"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('events')}
                className="text-sm text-white hover:text-[#007586]"
              >
                Events
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-sm text-white hover:text-[#007586]"
              >
                Clients
              </button>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-white hover:text-[#007586]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

interface LogoProps {
  className?: string;
}

const VirtuartLogo = ({ className = '' }: LogoProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1890.3199 428.82001"
    width="auto"
    height="40" // Adjust this value to control the logo's height
    className={className}
  >
    <defs>
      {/* The SVG uses currentColor so the color is controlled by the class applied */}
      <style>{`.cls-1 { fill: currentColor; }`}</style>
    </defs>
    <g transform="translate(-78.84,-809.59)">
      <path
        className="cls-1"
        d="M78.84,809.59 V1238.41 H507.67 V809.59 Z M114.58,845.32 H339.7 L114.58,1070.45 Z M471.93,1202.68 H247.23 L318.7,1131.21 H471.93 Z M471.93,1024 V1095.47 H354.44 L471.93,978 Z M471.93,927.44 196.69,1202.68 H114.58 V1121 L390.24,845.32 H471.93 Z"
      />
      <path
        className="cls-1"
        d="M725.38,1168.05 631.48,931.58 H678.86 L740.75,1100.58 H741.6 L802.21,931.58 H849.59 L756.54,1168.05 Z"
      />
      <path className="cls-1" d="M874.58,904.27 V852.19 H919 V904.27 ZM874.58,1168.05 V931.58 H919 V1168.05 Z" />
      <path
        className="cls-1"
        d="M947,1168.73 V932.27 H988.4 V953.61 H989.25 C999.92,937.81 1018.25,927.61 1049.44,925.86 V971.53 C1011.02,972.81 991.39,996.29 991.39,1035.98 V1168.73 Z"
      />
      <path
        className="cls-1"
        d="M1105.16,1168.05 V972.13 H1073.16 V931.58 H1105.16 V852.19 H1149.55 V931.58 H1188.39 V972.13 H1149.55 V1168.05 Z"
      />
      <path
        className="cls-1"
        d="M1381.08,1168.05 V1142.44 H1380.23 C1368.7,1162.5 1341.81,1174.02 1310.65,1174.02 1259.86,1174.02 1212.06,1146.71 1212.06,1063.47 V931.58 H1256.45 V1060.06 C1256.45,1109.57 1274.8,1133.48 1315.35,1133.48 1356.35,1133.48 1377.24,1104.88 1377.24,1059.21 V931.58 H1421.63 V1168.05 Z"
      />
      <path
        className="cls-1"
        d="M1651.9,1168.05 V1131.34 H1651.05 C1634.4,1159.51 1604.52,1174.02 1570.8,1174.02 1501.66,1174.02 1445.31,1121.95 1445.31,1053.66 1445.31,978.11 1499.52,925.18 1569.1,925.18 1603.67,925.18 1632.69,937.99 1651.1,964.88 H1651.95 V931.58 H1696.34 V1168.05 Z M1652.75,1050.24 C1652.75,1004.15 1619.46,965.73 1570.38,965.73 1525.99,965.73 1489.7,1003.73 1489.7,1050.24 1489.7,1094.63 1525.99,1133.48 1570.38,1133.48 1616.47,1133.48 1652.75,1095.06 1652.75,1050.24 Z"
      />
      <path
        className="cls-1"
        d="M1723.85,1168.05 V931.58 H1765.26 V952.93 H1766.11 C1776.78,937.13 1795.11,926.93 1826.29,925.18 V970.85 C1787.88,972.13 1768.29,995.61 1768.29,1035.3 V1168.05 Z"
      />
      <path
        className="cls-1"
        d="M1885.93,1168.05 V972.13 H1853.93 V931.58 H1885.93 V852.19 H1930.32 V931.58 H1969.16 V972.13 H1930.32 V1168.05 Z"
      />
    </g>
  </svg>
);

