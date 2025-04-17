'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Services({ id }: { id: string }) {
  const services = [
    {
      title: "BIM 4D Planning",
      description: "Boost technical proposals and bids with 4D planning that clarifies projects and optimizes time and resources.",
      imageUrl: "https://virtuart4d.com/IMG/Services1.jpg",
      youtubeUrl: "https://youtu.be/_fN0TMDRjFo",
    },
    {
      title: "Unreal Engine Experiences",
      description: "Visualize logistics and BIM 4D in stunning photorealism, enhancing clarity and impact in project planning.",
      imageUrl: "https://virtuart4d.com/IMG/Services2.jpg",
      youtubeUrl: "https://youtu.be/NqdFArBRI68",
    },
    {
      title: "Immersive Visualization",
      description: "Bring projects to life with immersive visuals that offer insights and support informed decisions at every stage.",
      imageUrl: "https://virtuart4d.com/IMG/Services3.jpg",
      youtubeUrl: "https://youtu.be/lYBkvJfsaKU",
    },
  ];

  return (
    <section id={id} className="w-full py-16 bg-[#222222]">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  service: {
    title: string;
    description: string;
    imageUrl: string;
    youtubeUrl: string;
  };
}

function ServiceItem({ service }: ServiceItemProps) {
  const [showPreview, setShowPreview] = useState(false);
	const isMobile = useIsMobile();

  const handleMouseEnter = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <div
      className="rounded-lg shadow-md overflow-hidden bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={service.imageUrl}
          alt={service.title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {!isMobile && showPreview && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
            <iframe
              width="80%"
              height="80%"
              src={`${service.youtubeUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${service.youtubeUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="p-4 bg-transparent">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
				<a
          href={service.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#007586] hover:text-[#00EDEB] transition-colors duration-300 block mt-4"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

