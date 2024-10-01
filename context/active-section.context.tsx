'use client'

import React, { createContext, useContext, useState } from "react";
import { SectionName } from "../lib/types";

type ActiveSectionWrapperProps = { children: React.ReactNode }

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export function ActiveSectionProviderWrapper ({children}: ActiveSectionWrapperProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home")

  return(
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext () {
  const context = useContext(ActiveSectionContext)

  if (!context) {
    throw new Error ("useActiveSectionContext must be used with a Provider.")
  }

  return context
}