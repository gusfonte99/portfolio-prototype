'use client'

import styles from "@/app/skills.module.css"

import { skillsData } from "../lib/data";
import { useEffect } from "react";
import Icon from "./icon";
import Image from "next/image";

export default function Skills () {
  
  const addAnimation = () : void => {
    const scroller = document.querySelector(".scroller") as HTMLElement
    scroller?.setAttribute("data-animated", "")

    const scrollerInner = document.querySelector(".skill_list") as HTMLElement
    const scrollerContent : Element[] = Array.from(scrollerInner.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement
      duplicatedItem.setAttribute("aria-hidden", "true")
      scrollerInner.appendChild(duplicatedItem)
    })
  }
  
  useEffect(() => {    
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation()
    }
  }, [])

  return (
    <section id="skills" className="flex flex-col items-center w-full pl-52 mt-20 my-20">
      <h2 className="text-2xl font-semibold sm:text-5xl">My Skills</h2>

      <div className={`${styles.scroller} scroller`}>
        <ul className={`${styles.skill_list} skill_list`}>
          {skillsData.map((skill, index) => {
            return (
              <li key={index} className="flex flex-col justify-between items-center gap-1 min-w-max px-2 py-3 rounded-xl bg-zinc-900">
                {"logo" in skill
                  ? (
                    <Icon type="logo" name={skill.logo} color="#a5b4fc" />
                  )
                  : (
                    <Image src={skill.logoPath} width={128} height={128} alt={`${skill.name} logo`} />
                  )
                }

                <h3 className="text-2xl font-medium text-indigo-300">{skill.name}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}