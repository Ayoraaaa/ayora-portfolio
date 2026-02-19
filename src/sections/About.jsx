import "../styles/about.css";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPython,
  
  SiFlutter,
  SiHtml5,
  SiCss3,
  
  SiVisualstudiocode,
  SiFigma,
  SiPostman,
  SiGit,
  SiGithub
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

const tech = [
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SQL", icon: <FiDatabase /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutLeft">
          <span className="aboutTag">ABOUT</span>

          <h2 className="aboutTitle">
            Who I Am 
            <span className="headingUnderline"></span>
          </h2>

          <p className="aboutPara">
            I enjoy building full-stack web applications that combine clean design
            with efficient backend logic. I focus on creating structured,
            user-friendly systems with modern UI practices.
          </p>

          <p className="aboutPara">
            I have developed projects including role-based authentication systems and
            dashboard interfaces. I am continuously improving my skills and looking for
            opportunities to grow as a developer.
          </p>
        </div>

        <div className="aboutRight">
          <div className="skillsCard">
            <h3>Technical Skills</h3>

            <div className="techGrid">
              {tech.map((t) => (
                <div className="techItem" key={t.name}>
                  <div className="techIcon">{t.icon}</div>
                  <div className="techName">{t.name}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
