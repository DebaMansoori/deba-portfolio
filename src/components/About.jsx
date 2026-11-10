import portrait from "../assets/portrait.jpg";

const stats = [
  ["1+", "Years of experience"],
  ["10+", "Projects completed"],
  ["2+", "Happy clients"],
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div>
          <span className="about-label">About DEBA</span>
          <h2>
            A thoughtful approach <em>to every detail.</em>
          </h2>
          <div className="about-line"></div>
          <p>
            I'm Deba, a UI/UX designer and frontend developer who cares about
            the small things that make a product feel considered — clear
            hierarchy, calm typography, and interfaces that simply make sense.
          </p>
          <p>
            My background in teaching mathematics and computer skills sharpened
            the way I communicate, reason through problems, and break complex
            ideas into simple, human steps.
          </p>
          <div className="about-stats">
            {stats.map(([number, label]) => (
              <div className="stat" key={label}>
                <span className="stat-num">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="photo">
          <img src={portrait} alt="Portrait of Deba Mansoori" />
        </div>
      </div>
    </section>
  );
}
