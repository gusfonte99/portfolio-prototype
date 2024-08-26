import DownloadCV from "./downloadCV";

export default function Header () {
  
  return (
    <header id="top" className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-32 h-32 rounded-full bg-white">
          <div className="w-full h-full scale-90 rounded-full bg-slate-900"></div>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-lime-600"></div>
          <span className="text-lg font-medium">Available</span>
        </div>
      </div>

      <h1 className="text-2xl text-center mx-2 md:text-4xl">Hi, I'm Gustavo, a <strong>Fullstack Developer</strong> based in Portugal 🇵🇹</h1>

      <div className="flex flex-row justify-center items-center gap-4">
        <DownloadCV />

        <a href="https://www.linkedin.com/in/gusfonte99" target="_blank" className="p-4 rounded-full bg-neutral-500/30">
          <svg className="fill-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
        </a>
  
        <a href="https://github.com/gusfonte99" target="_blank" className="p-4 rounded-full bg-neutral-500/30">
          <svg className="fill-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>
        </a>
      </div>
    </header>
  )
}