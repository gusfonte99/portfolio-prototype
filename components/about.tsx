"use client";

import Icon from "./icon";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center w-full pl-52 my-20">
      <h2 className="text-2xl font-semibold sm:text-5xl">A little bit about me..</h2>

      <ul className="flex flex-col gap-10 mt-16">
        <li className="place-self-start flex flex-row justify-center items-center gap-8 w-2/3 px-8 py-6 rounded-r-full bg-zinc-900">
          <p className="text-base text-pretty font-normal sm:text-lg">
            After over 2 years of working in retail, looking for a way to break
            into the <strong className="font-semibold text-indigo-300">Tech</strong> field, I embarked on a new adventure.
            My fascination with programming led me to shift gears and pursue web
            development. <strong className="font-semibold text-indigo-300">Problem-solving</strong> and continuous{" "}
            <strong className="font-semibold text-indigo-300">learning</strong> have always been my passions, and they
            drive me to excel in this dynamic field.
          </p>

          <div className="basis-24 shrink-0">
            <Icon name="help-circle" size="92px" color="#818cf8" />
          </div>
        </li>
        
        <li className="place-self-end flex flex-row justify-center items-center gap-8 w-2/3 px-8 py-6 rounded-l-full bg-zinc-900">
          <div className="basis-24 shrink-0">
            <Icon name="code-block" size="92px" color="#818cf8" />
          </div>

          <p className="text-base text-pretty font-normal sm:text-lg">
            My core stack {"( "}<strong className="font-semibold text-indigo-300">{"MERN"}</strong>{" )"} includes{" "}
            <strong className="font-semibold text-indigo-300">MongoDB</strong>, <strong className="font-semibold text-indigo-300">Express.js</strong>,{" "}
            <strong className="font-semibold text-indigo-300">React</strong>, and <strong className="font-semibold text-indigo-300">Node.js</strong>. I'm also
            proficient with <strong className="font-semibold text-indigo-300">TypeScript</strong> and have a passion for
            exploring new technologies and frameworks. I'm actively seeking a
            full-time role as a <strong className="font-semibold text-indigo-300">Full Stack Developer</strong>, but I'm
            open to flexible opportunities that align with my{" "}
            <strong className="font-semibold text-indigo-300">skills</strong> and <strong className="font-semibold text-indigo-300">enthusiasm</strong> for growth.
          </p>
        </li>
        
        <li className="place-self-start flex flex-row justify-center items-center gap-8 w-2/3 px-8 py-6 rounded-r-full bg-zinc-900">
          <p className="text-base text-pretty font-normal sm:text-lg">
            When I'm not in front of my computer, I love to play{" "}
            <strong className="font-semibold text-indigo-300">games</strong>, <strong className="font-semibold text-indigo-300">volleyball</strong>,{" "}
            <strong className="font-semibold text-indigo-300">guitar</strong>, and learn new <strong className="font-semibold text-indigo-300">languages</strong> or{" "}
            <strong className="font-semibold text-indigo-300">cook</strong> new recipes. My <strong className="font-semibold text-indigo-300">passion</strong> for
            learning extends beyond the digital world.
          </p>

          <div className="basis-24 shrink-0">
            <Icon name="heart" size="92px" color="#818cf8" />
          </div>
        </li>
      </ul>
    </section>
  );
}
