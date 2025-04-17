'use client';
 
 import { useIsMobile } from "@/hooks/use-mobile";
 
 export default function Hero() {
   const isMobile = useIsMobile();
   return (
     <section className="relative w-full h-screen overflow-hidden pt-[1px]">
       {/* Video Background */}
       <video
         src="https://virtuart4d.com/wp-content/uploads/2025/04/Page_omx.mp4"
         autoPlay
         loop
         playsInline
         muted
         className="absolute top-0 left-0 z-10 w-full h-full object-cover object-center opacity-50"
       />
       <div className="relative z-20 flex items-center justify-center h-full w-full">
         <div className="absolute top-0 left-0 w-full h-full bg-black/0" />
         <div className="relative z-30 flex flex-col items-center justify-center text-center text-white h-full w-full">
             {/* Text to change in different languages */}
             <h1 className={`font-bold mb-4 ${isMobile ? 'text-4xl' : 'text-6xl'}`}>
               BIM 4D Planning with Unreal Engine Experiences
             </h1>
             <p className={`text-lg ${isMobile ? 'text-md' : ''}`}>
             Visualize your projects like never before.
             </p>
         </div>
       </div>
     </section>
   );
 };
 
 
