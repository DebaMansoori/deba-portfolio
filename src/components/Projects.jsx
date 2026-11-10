import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="label">
        <i></i>
        <em>Selected Projects</em>
      </div>
      <div className="heading">
        <h2>
          Things I've <em>built.</em>
        </h2>
        <p>
          A selection of recent projects across web design and frontend
          development. Click any card to step inside and explore the live
          preview.
        </p>
      </div>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setActiveProject}
          />
        ))}
      </div>
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
