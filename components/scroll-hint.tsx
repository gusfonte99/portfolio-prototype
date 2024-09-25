export default function ScrollHint () {

  return (
    <div id="scroll-hint-container" className="animate-bounce -z-10 fixed bottom-0 flex flex-row justify-between w-full pl-56 pr-4 mb-6 select-none">
      <div className="flex flex-col justify-center items-center gap-2">
        <span id="scroll-hint-text" className="text-sm">scroll down</span>
        <svg className="fill-neutral-200" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px"><path d="M480-97q-8 0-15-2.5t-13-8.5L228-332q-11-11-11-28t11-28q12-12 28.5-11.5T284-388l156 155v-607q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v607l155-155q12-12 28.5-12t28.5 12q11 12 11 28.5T732-332L508-108q-6 6-13 8.5T480-97Z"/></svg>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <span id="scroll-hint-text" className="text-sm">scroll down</span>
        <svg className="fill-neutral-200" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px"><path d="M480-97q-8 0-15-2.5t-13-8.5L228-332q-11-11-11-28t11-28q12-12 28.5-11.5T284-388l156 155v-607q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v607l155-155q12-12 28.5-12t28.5 12q11 12 11 28.5T732-332L508-108q-6 6-13 8.5T480-97Z"/></svg>
      </div>
    </div>
  )
}