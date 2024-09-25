'use client'

import Icon from "./icon";

export default function DownloadCV () {

  return (
    <a href="/CV-Gustavo.pdf" download className="inline-flex flex-row justify-center items-center gap-1 pl-4 pr-3 py-3 border-2 border-indigo-300 bg-stone-950">
      <span className="text-xl text-indigo-300 font-medium uppercase"><span className="hidden sm:inline">Download</span> CV</span>
      <Icon type="solid" name="download" size="24px" color="#A5B4FC" />
    </a>
  )
}