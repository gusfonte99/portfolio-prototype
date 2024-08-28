import Link from "next/link";
import DownloadCV from "./downloadCV";

export default function Header () {
  
  return (
    <header id="header" className="grow flex flex-row justify-start h-screen pt-52 ml-52">
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
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="w-56 h-56 rounded-full bg-white">
            <div className="flex justify-center items-center w-full h-full scale-90 rounded-full bg-slate-900/95">
              <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
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