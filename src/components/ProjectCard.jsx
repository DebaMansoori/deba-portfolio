export default function ProjectCard({ project, onOpen }) {
  const open = () => onOpen(project);

  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Open the ${project.title} live preview`}
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      }}
    >
      <div className={`project-image ${project.theme}`}>
        <span>{project.number}</span>
        <div className={`mock-window${project.lightMock ? " light" : ""}`}>
          <b>{project.mock.brand}</b>
          <strong>{project.mock.title}</strong>
          <small>{project.mock.subtitle}</small>
        </div>
      </div>
      <div className="project-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-link">Open preview ↗</span>
      </div>
    </article>
  );
}
