'use client';
import Image from "next/image";

interface ProjectsProps {
  id?: string;
}

export default function Projects({ id = "projects" }: ProjectsProps) {
  return (
    // Add an id and a scroll margin (scroll-mt-20) for a top offset.
    <section id={id} className="w-full py-12 bg-[#222222] scroll-mt-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent">
            <div className="overflow-hidden aspect-square">
              <Image
                src="https://picsum.photos/500/500"
                alt="Project 1"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-transparent">
              <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
              <p className="text-muted-foreground">
                Short description of project 1.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent">
            <div className="overflow-hidden aspect-square">
              <Image
                src="https://picsum.photos/500/500"
                alt="Project 2"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
              <p className="text-muted-foreground">
                Short description of project 2.
              </p>
            </div>
          </div>
          {/* Project 3 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-transparent">
            <div className="overflow-hidden aspect-square">
              <Image
                src="https://picsum.photos/500/500"
                alt="Project 3"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
              <p className="text-muted-foreground">
                Short description of project 3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
