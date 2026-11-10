const skills = [
  {
    number: "01",
    icon: "devicon-html5-plain colored",
    name: "HTML",
    note: "Structure & semantics",
  },
  {
    number: "02",
    icon: "devicon-css3-plain colored",
    name: "CSS",
    note: "Responsive & visual design",
  },
  {
    number: "03",
    icon: "devicon-javascript-plain colored",
    name: "JavaScript",
    note: "Interaction & logic",
  },
  {
    number: "04",
    icon: "devicon-git-plain colored",
    name: "Git",
    note: "Version control",
  },
  {
    number: "05",
    icon: "devicon-figma-plain colored",
    name: "Figma",
    note: "UI & visual planning",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="label">
        <i></i>
        <em>Skills & Tools</em>
      </div>
      <div className="heading">
        <h2>
          What I <em>work with.</em>
        </h2>
        <p>
          A growing toolkit for designing interfaces, building them in code, and
          connecting them to real data.
        </p>
      </div>
      <div className="skill-list">
        {skills.map((skill) => (
          <a href="#projects" key={skill.name}>
            <span>{skill.number}</span>
            <i className={skill.icon} aria-hidden="true"></i>
            <strong>{skill.name}</strong>
            <small>{skill.note}</small>
            <b>↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
