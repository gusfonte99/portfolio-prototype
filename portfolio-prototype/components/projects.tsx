export default function Projects () {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">My Projects</h2>

      <ul className="flex flex-col justify-center items-center gap-6 w-full mt-8">
        <li className="grid grid-cols-1 grid-rows-1 w-full pt-4 px-5 pb-7 rounded-lg bg-slate-400">
          <div className="">
            <h3 className="text-2xl font-semibold">Aniki</h3>

            <p className="mt-2">An anime forum Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error obcaecati.</p>

            <div className="mt-4">
              <ul className="flex flex-row flex-wrap gap-2">
                <li className="text-sm font-medium px-3 rounded-full bg-slate-900">React</li>
                <li className="text-sm font-medium px-3 rounded-full bg-slate-900">React</li>
                <li className="text-sm font-medium px-3 rounded-full bg-slate-900">React</li>
                <li className="text-sm font-medium px-3 rounded-full bg-slate-900">React</li>
                <li className="text-sm font-medium px-3 rounded-full bg-slate-900">React</li>
              </ul>
            </div>
          </div>

          <div className="hidden relative overflow-hidden">
            <div className="w-[28rem] h-56 bg-slate-50"></div>
          </div>
        </li>
      </ul>
    </section>
  )
}