import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerTop">
          {/* LEFT */}
          <div className="footerLeft">
            <h3>Ayora Fernando</h3>
            <p>Computer Science Undergraduate</p>
            <span>Sri Lanka | Open to Remote Opportunities</span>
          </div>

          {/* MIDDLE */}
          <div className="footerMiddle">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* RIGHT */}
          <div className="footerRight">
            <a href="https://github.com/Ayoraaaa" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayora-fernando-73b40134b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:ayorafernando26@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footerBottom">
          © {new Date().getFullYear()} Ayora Cassandra · Designed & Built by Ayora
        </div>
      </div>
    </footer>
  );
}