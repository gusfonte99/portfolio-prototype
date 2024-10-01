'use client'

import React from "react";

import { links } from "../lib/data";
import { SectionHash, SectionName } from "../lib/types";

import { useActiveSectionContext } from "../context/active-section.context";

import Icon from "./icon";
import Link from "./link";

export default function Navbar () {
  
  const { activeSection, setActiveSection } = useActiveSectionContext()

  // Scroll to selected section with an offset
  // Edit offset value as needed
  const scrollIntoViewWithOffset = (sectionName: SectionName, sectionHash: SectionHash, offset: number = 160) : void => {
    const selectedSection = document.querySelector(sectionHash)
    
    if (!selectedSection) {
      throw new Error ("Selected section not found.")
    }

    setActiveSection(sectionName)

    window.scrollTo({
      top:
        selectedSection.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top - offset
    })
  }

  return(
    <nav className="z-[999] fixed left-0 w-52 h-full bg-neutral-950 border-r border-neutral-600/60">
      <div className="flex flex-col justify-start items-center w-full py-10 select-none">
        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <span className="text-8xl font-semibold">g</span>
          <div className="w-10 h-28 bg-white"></div>
        </div>
        
        <h3 className="text-2xl font-semibold mt-3">Gustavo</h3>
        <span className="text-base text-neutral-400 mt-3">Fullstack Developer</span>
      </div>
      
      <ul className="text-center text-neutral-400 text-lg font-light border-t-[1px] border-neutral-600/60 *:border-b-[1px] *:border-neutral-600/60">
        {links.map((link, index) => {
          return (
            <React.Fragment key={index}>
              <Link {...link} isActive={link.name === activeSection ? true : false} onClick={scrollIntoViewWithOffset} />
            </React.Fragment>
          )
        })}
      </ul>

      <div className="flex flex-row justify-center items-center gap-4 mt-8">
        <a href="https://www.linkedin.com/in/gusfonte99" target="_blank">
          <Icon type="logo" name="linkedin-square" size="30px" color="#a5b4fc" />
        </a>
        <a href="https://github.com/gusfonte99" target="_blank">
          <Icon type="logo" name="github" size="30px" color="#a5b4fc" />
        </a>
      </div>
    </nav>
  )
}