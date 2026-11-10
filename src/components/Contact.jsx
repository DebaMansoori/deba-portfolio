export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="footer-box">
        <div className="label">
          <i></i>
          <em>Let's Work Together</em>
        </div>
        <div className="contact-row">
          <div>
            <h2>
              Have an idea in <em>mind?</em>
            </h2>
            <p>
              Tell me a little about what you're building — I'd be glad to share
              honest thoughts and a clear next step.
            </p>
          </div>
          <a
            style={{ color: "black" }}
            className="button light"
            href="mailto:your-email@example.com"
          >
            Let's Talk <b>↗</b>
          </a>
        </div>
        <footer>
          <span>© 2026 Deba Mansoori</span>
          <div>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
