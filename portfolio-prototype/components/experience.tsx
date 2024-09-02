import Image from "next/image";
import { experiencesData } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center w-full pl-52 mt-20 my-20">
      <h2 className="text-2xl font-semibold sm:text-5xl">My Experience</h2>

      <div className="relative flex flex-col items-center w-full mt-16">
        <div className="absolute w-1 h-full bg-indigo-400"></div>
        {experiencesData.map((experience) => {
          return (
            <div className="group relative grid grid-cols-2 gap-x-32 w-full mb-16 last:mb-0">
              <div className="place-self-end w-[28rem] pt-4 pb-6 px-6 rounded-lg border-4 border-indigo-400 bg-zinc-900 group-odd:order-last group-odd:place-self-start">
                <h3 className="text-xl font-semibold">{experience.title}</h3>

                <p className="text-base font-medium">{experience.location}</p>

                <p className="text-base text-neutral-200 text-pretty font-normal mt-2">
                  {experience.description}
                </p>
              </div>

              <div className="absolute place-self-center h-full">
                <div className="flex justify-center items-center size-16 rounded-full border-4 border-indigo-400 bg-zinc-950">
                  <Image className="scale-75" src={experience.iconPath} width={42} height={42} alt="Experience type icon" />
                </div>
              </div>

              <span className="text-base leading-7 font-medium w-fit h-full pt-4 group-odd:place-self-end">
                {experience.date}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
