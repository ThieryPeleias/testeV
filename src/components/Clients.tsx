'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const ClientLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center p-2">
    <img src={src} alt={alt} className="h-32 w-64 object-contain" />
  </div>
);

export default function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // Set an id and add scroll margin top (scroll-mt-20) to offset the fixed header.
    <section id="clients" className="w-full py-12 scroll-mt-24 bg-[#222222]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-white">Our Esteemed Clients</h2>
        <Slider {...settings}>
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (1).jpg" alt="Client 1" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (2).jpg" alt="Client 2" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (3).jpg" alt="Client 3" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (4).jpg" alt="Client 4" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (5).jpg" alt="Client 5" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (6).jpg" alt="Client 6" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (7).jpg" alt="Client 7" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (8).jpg" alt="Client 8" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (9).jpg" alt="Client 9" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (10).jpg" alt="Client 10" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (11).jpg" alt="Client 11" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (12).jpg" alt="Client 12" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (13).jpg" alt="Client 13" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (14).jpg" alt="Client 14" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (15).jpg" alt="Client 15" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (16).jpg" alt="Client 16" />
          <ClientLogo src="https://virtuart4d.com/IMG/Clients/Clients (17).jpg" alt="Client 17" />                
        </Slider>
      </div>
    </section>
  );
}