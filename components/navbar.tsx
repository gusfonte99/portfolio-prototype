export default function Navbar () {
  // const blink = document.getElementById("console")


  return(
    <nav className="z-[999] fixed left-0 w-52 h-full bg-neutral-950 border-r border-neutral-600/60">
      <div className="flex flex-col justify-start items-center w-full pt-10 pb-6 select-none">
        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <span className="text-8xl font-semibold">g</span>
          <div id="console" className="w-10 h-28 bg-white"></div>
        </div>
        
        <h3 className="text-2xl font-semibold mt-3">Gustavo</h3>
        <span className="text-base text-neutral-400 mt-3">Fullstack Developer</span>
      </div>

      <ul className="mt-12 text-center text-neutral-400 text-lg font-light border-t-[1px] border-neutral-600/60 *:py-3 *:border-b-[1px] *:border-neutral-600/60">
        <li className="">Home</li>
        <li className="">About</li>
        <li className="">Projects</li>
        <li className="">Skills</li>
        <li className="">Experience</li>
        <li className="">Contact</li>
      </ul>

      <div className="flex flex-row justify-center items-center gap-4 mt-8">
        <a href="https://www.linkedin.com/in/gusfonte99" target="_blank">
          <svg className="fill-indigo-300" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>
        </a>
        <a href="https://github.com/gusfonte99" target="_blank">
          <svg className="fill-indigo-300" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
        </a>
      </div>
    </nav>
  )
}