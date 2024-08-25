export default function Projects() {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">My Projects</h2>

      <ul className="flex flex-col justify-center items-center gap-6 w-full mt-8 sm:max-w-2xl">
        <li className="group grid grid-cols-1 grid-rows-1 w-full rounded-lg bg-slate-800/70 overflow-hidden sm:grid-cols-2 hover:bg-slate-800">
          <div className="pt-4 pl-5 pr-5 pb-7 sm:pl-10 sm:pt-10 sm:pr-2">
            <h3 className="text-2xl font-semibold">Aniki</h3>

            <p className="font-medium mt-2">
              An anime forum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officiis error obcaecati.
            </p>

            <div className="mt-4">
              <ul className="flex flex-row flex-wrap gap-2">
                <li className="text-sm text-neutral-300 leading-6 font-medium px-3 rounded-full bg-zinc-950">React</li>
                <li className="text-sm text-neutral-300 leading-6 font-medium px-3 rounded-full bg-zinc-950">React</li>
                <li className="text-sm text-neutral-300 leading-6 font-medium px-3 rounded-full bg-zinc-950">React</li>
                <li className="text-sm text-neutral-300 leading-6 font-medium px-3 rounded-full bg-zinc-950">React</li>
                <li className="text-sm text-neutral-300 leading-6 font-medium px-3 rounded-full bg-zinc-950">React</li>
              </ul>
            </div>
          </div>

          <div className="hidden relative sm:inline">
            <div className="image absolute -right-12 top-8 w-80 h-40 rounded-t-lg shadow-2xl bg-slate-50 transition group-hover:scale-x-105 group-hover:-translate-x-5 group-hover:translate-y-2 group-hover:-rotate-2"></div>
          </div>
        </li>
      </ul>
    </section>
  );
}
