'use client'

import styles from "@/app/styles/logo.module.css"
import { Chakra_Petch } from "next/font/google";

import Link from "next/link";
import { links } from "../lib/data";
import Icon from "./icon";

export default function Navbar () {

  const scrollIntoViewWithOffset = (section: string, offset: number = 60) : void => {
    const selectedSection = document.querySelector(section) as HTMLElement

    window.scrollTo({
      top:
        selectedSection.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top - offset
    })
  }

  return(
    <nav className="z-[999] fixed left-0 w-52 h-full bg-neutral-950 border-r border-neutral-600/60">
      <div className="flex flex-col justify-start items-center w-full pt-10 pb-6 select-none">
        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <span className="text-8xl font-semibold">g</span>
          <div className="w-10 h-28 bg-white"></div>
        </div>
        
        <h3 className="text-2xl font-semibold mt-3">Gustavo</h3>
        <span className="text-base text-neutral-400 mt-3">Fullstack Developer</span>
      </div>
      
      <ul className="mt-12 text-center text-neutral-400 text-lg font-light border-t-[1px] border-neutral-600/60 *:border-b-[1px] *:border-neutral-600/60">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <button onClick={() => scrollIntoViewWithOffset(link.hash)} className="w-full h-full py-3">
                {link.name}
              </button>
            </li>
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