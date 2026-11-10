import { useState } from "react";

const links = [
  ["#home", "Home"],
  ["#projects", "Projects"],
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <a className="brand" href="#home">
        Deba
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`nav${open ? " open" : ""}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
      </nav>
    </header>
  );
}
