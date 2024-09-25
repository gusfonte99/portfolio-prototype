'use client'

import Icon from "./icon";
import { experiencesData } from "../lib/data";

export default function Experience() {

  return (
    <section id="experience" className="flex flex-col items-center w-full pl-52 mt-20 my-20">
      <h2 className="text-2xl font-semibold sm:text-5xl">My Experience</h2>

      <div className="relative flex flex-col items-center w-full mt-16">
        <div className="absolute w-1 h-full bg-indigo-400"></div>
        {experiencesData.map((experience, index) => {
          return (
            <div key={index} className="group relative grid grid-cols-2 gap-x-32 w-full mb-16 last:mb-0">
              <div className="place-self-end w-[28rem] pt-4 pb-6 px-6 rounded-lg bg-zinc-900 group-odd:order-last group-odd:place-self-start">
                <h3 className="text-xl text-indigo-300 font-semibold">{experience.title}</h3>

                <p className="text-base font-medium">{experience.location}</p>

                <p className="text-base text-neutral-200 text-pretty font-normal mt-2">
                  {experience.description}
                </p>
              </div>

              <div className="absolute place-self-center h-full">
                <div className="flex justify-center items-center size-16 rounded-full border-4 border-indigo-400 bg-zinc-950">
                  <Icon type="solid" name={experience.iconName} size={"iconSize" in experience ? experience.iconSize : "34px"} color="#818cf8" />
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
