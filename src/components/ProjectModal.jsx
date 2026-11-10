import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const openFullPreview = () => {
    const blob = new Blob([project.preview], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  };

  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          ref={closeRef}
          className="modal-close"
          aria-label="Close project preview"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-info">
          <div className="label">
            <i></i>
            <em>Project {project.number}</em>
          </div>
          <h2 className="modal-title" id="project-modal-title">
            {project.title}
          </h2>
          <p className="modal-category">{project.category}</p>
          <p className="modal-desc">{project.description}</p>
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="modal-actions">
            <button className="button dark" onClick={openFullPreview}>
              Open full preview <b>↗</b>
            </button>
            <button className="modal-back" onClick={onClose}>
              Back to projects
            </button>
          </div>
        </div>

        <div className="modal-preview">
          <div className="browser-frame">
            <div className="browser-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="browser-url">{project.domain}</span>
            </div>
            <iframe srcDoc={project.preview} title={`${project.title} live preview`} />
          </div>
          <p className="preview-hint">Live preview — scroll inside the window</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
