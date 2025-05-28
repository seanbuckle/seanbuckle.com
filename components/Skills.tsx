import { useContext } from "preact/hooks";
import { ContentContext } from "../context/ContentContext.tsx";

type Skill = {
  image: string;
  skill: string;
  link: string;
};

export function Skills() {
  const context = useContext(ContentContext);

  const skills: Skill[] = context.content.skills || [];

  console.log("Skills:", skills);

  return (
    <section class="skills">
      <h2>Skills</h2>
      {skills.map((skill: Skill, i: number) => (
        <a
          key={i}
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`skill__link--${
            skill.skill.toLowerCase().replace(/[ .]/g, "")
          }`}
        >
          <span dangerouslySetInnerHTML={{ __html: skill?.image }} />
          {skill.skill}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 -960 960 960"
            width="1.5rem"
            fill="currentcolor"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
      ))}
    </section>
  );
}
