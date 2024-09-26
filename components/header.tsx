import Link from "next/link";
import Image from "next/image";

import photo from "../public/profile.jpg"
import DownloadCV from "./downloadCV";

export default function Header () {
  
  return (
    <header id="home" className="grow flex flex-row h-screen pt-48 ml-52">
      <div className="ml-20 pt-12">
        <div className="flex flex-col font-semibold">
          <h1 className="text-9xl">Hi,</h1>
          <h1 className="text-8xl mt-4">I'm Gustavo,</h1>
          <h1 className="text-6xl mt-4">a Web Developer based in Portugal</h1>
        </div>

        <p className="text-xl text-neutral-500 font-normal mt-6">Fullstack Developer <span className="px-2">/</span> Frontend and Backend proficient</p>
        
        <div className="flex flex-row gap-4 mt-10">
          <Link href="/contact" className="flex justify-center items-center px-8 bg-indigo-700">
            <span className="text-xl font-medium uppercase">Contact me</span>
          </Link>

          <DownloadCV />
        </div>
      </div>

      <div className="grow flex flex-col justify-start items-start pl-40">
        <div className="flex flex-col justify-start items-center h-full gap-6">
          <div className="w-56 h-56 rounded-full bg-white">
            <div className="w-full h-full rounded-full scale-90 overflow-hidden">
              <Image src={photo} className="scale-110" width={undefined} height={undefined} placeholder="blur" alt="Profile photo" />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex justify-center items-center relative w-4 h-4">
              <span className="animate-ping absolute inline-flex w-full h-full rounded-full opacity-75 bg-lime-600"></span>
              <span className="inline-flex w-full h-full rounded-full bg-lime-600"></span>
            </div>
            
            <span className="text-xl font-medium">Available</span>
          </div>
        </div>
      </div>
    </header>
  );
}