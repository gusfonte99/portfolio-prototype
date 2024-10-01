'use client'

import Image from "next/image";
import { projectsData } from "../lib/data";
import { useActiveSectionContext } from "../context/active-section.context";
import { useInView } from "react-intersection-observer";

export default function Projects() {

  const { setActiveSection } = useActiveSectionContext()

  const { ref } = useInView({
    rootMargin: "-50% 0% -50% 0%",
    onChange: (inView) => {
      if (inView) {
        setActiveSection("Projects")
      }
    },
    
  })

  return (
    <section id="projects" ref={ref} className="flex flex-col items-center w-full pl-52 my-20">
      <h2 className="text-2xl font-semibold sm:text-5xl">My Projects</h2>

      <ul className="flex flex-row gap-6 w-full px-12 mt-16">
        {projectsData.map((project, index) => {
          return (
            <li key={index} className="relative group grid grid-cols-1 grid-rows-1 w-full rounded-md bg-zinc-900 overflow-hidden sm:grid-cols-3 transition-all duration-300 ease-in-out hover:bg-indigo-600">
              <div className="col-span-2 pt-6 px-5 pb-8">
                <h3 className="text-3xl font-semibold">{project.title}</h3>

                <p className="text-lg text-balance font-normal mt-6">
                  {project.description}
                </p>

                <div className="mt-4">
                  <ul className="flex flex-row flex-wrap gap-2">
                    {project.tags.map((tag, index) => {
                      return (
                        <li key={index} className="text-sm text-neutral-300 leading-6 font-medium px-3 rounded-full bg-zinc-950">
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <Image
                className="
                  absolute -right-36 top-14 object-contain w-72 rounded-t-lg shadow-2xl transition duration-300
                
                  group-hover:scale-x-105
                  group-hover:-translate-x-8
                  group-hover:translate-y-2
                  group-hover:-rotate-2"
                src={project.image}
                width={undefined}
                height={undefined}
                quality={90}
                priority
                alt="Project screenshot"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
