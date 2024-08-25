export default function About() {
  return (
    <section className="flex flex-col justify-center items-center max-w-4xl mt-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">About me</h2>

      <ul className="flex flex-col gap-3 mt-6">
        <li>
          <p className="text-base text-center font-normal sm:text-lg">
            After over 2 years of working in retail, looking for a way to break
            into the <strong>Tech</strong> field, I embarked on a new adventure.
          </p>
        </li>
        <li>
          <p className="text-base text-center font-normal sm:text-lg">
            My fascination with programming led me to shift gears and pursue web
            development. <strong>Problem-solving</strong> and continuous <strong>learning</strong> have always
            been my passions, and they drive me to excel in this dynamic field.
          </p>
        </li>
        <li>
          <p className="text-base text-center font-normal sm:text-lg">
            My core stack <strong>{"(MERN)"}</strong> includes{" "}
            <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
            <strong>React</strong>, and <strong>Node.js</strong>. I'm also
            proficient with <strong>TypeScript</strong> and have a passion for
            exploring new technologies and frameworks. I'm actively seeking a
            full-time role as a <strong>Full Stack Developer</strong>, but I'm
            open to flexible opportunities that align with my{" "}
            <strong>skills</strong> and <strong>enthusiasm</strong> for growth.
          </p>
        </li>
        <li>
          <p className="text-base text-center font-normal sm:text-lg">
            When I'm not in front of my computer, I love to{" "}
            <strong>play games</strong>, <strong>volleyball</strong>,{" "}
            <strong>guitar</strong>, and learn new <strong>languages</strong> or{" "}
            <strong>cook</strong> new recipes. My <strong>passion</strong> for
            learning extends beyond the digital world.
          </p>
        </li>
      </ul>
    </section>
  );
}
