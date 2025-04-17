'use client';

import Image from "next/image";

interface EventsProps {
  id?: string;
}

export default function Events({ id = "events" }: EventsProps) {
  return (
    // Added scroll-mt-20 to create a top margin when scrolling into view.
    <section id={id} className="w-full py-12 bg-[#222222] scroll-mt-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-8">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event 1 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent">
            <div className="overflow-hidden aspect-video">
              <Image
                src="https://virtuart4d.com/IMG/DigitalConstructionWeek.jpeg"
                alt="Digital Construction Week"
                width={450}
                height={275}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-transparent">
              <h3 className="text-xl font-semibold mb-2">
                Digital Construction Week
              </h3>
              <p className="text-muted-foreground">
                Showcasing innovations in digital construction in London|UK.
              </p>
            </div>
          </div>
          {/* Event 2 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent">
            <div className="overflow-hidden aspect-video">
              <Image
                src="https://virtuart4d.com/IMG/infraBIMStronaGłowna.jpeg"
                alt="infraBIM"
                width={450}
                height={275}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-transparent">
              <h3 className="text-xl font-semibold mb-2">infraBIM</h3>
              <p className="text-muted-foreground">
                Most important BIM event in Central Europe.
              </p>
            </div>
          </div>
          {/* Event 3 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent">
            <div className="overflow-hidden aspect-video">
              <Image
                src="https://virtuart4d.com/IMG/Projektowanieprzyszłosci.jpeg"
                alt="Projektowanie przyszłości"
                width={450}
                height={275}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-transparent">
              <h3 className="text-xl font-semibold mb-2">
                Projektowanie Przyszłości
              </h3>
              <p className="text-muted-foreground">
                Conference dedicated to BIM held in Kraków|Poland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}