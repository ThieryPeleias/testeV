import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import VisualEngagement from "@/components/VisualEngagement";
import Events from "@/components/Events";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <Services id="services"/>
        <VisualEngagement />
        <Events id="events"/>
        <Clients id="clients"/>
        <CTA />
      </main>
    </>
  );
}
