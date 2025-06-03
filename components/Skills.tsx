type Skill = {
  image: string;
  skill: string;
  link: string;
};

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <>
    <section class="skills-wrapper">
      <h2>Skills</h2>
      <section class="skills">
        {skills.map((skill: Skill, i: number) => (
          <a
            key={i}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`skills__link skills__link--${
              skill.skill.toLowerCase().replace(/[ .]/g, "")
            }`}
          >
            <span dangerouslySetInnerHTML={{ __html: skill?.image }} />
            {skill.skill}
          </a>
        ))}
      </section>
    </section>
      
    </>
  );
}
