export default function DownloadCV () {
  return (
    <a href="/CV-Gustavo.pdf" download className="inline-flex flex-row justify-center items-center gap-1 pl-4 pr-3 py-3 border-2 border-indigo-300 bg-stone-950">
      <span className="text-xl text-indigo-300 font-medium uppercase"><span className="hidden sm:inline">Download</span> CV</span>
      <svg className="fill-indigo-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg>
    </a>
  )
}