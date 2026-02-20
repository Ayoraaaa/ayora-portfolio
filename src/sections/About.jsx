// Importing the about section css style 
import "../styles/about.css";

// Importing simple icons from react-icons
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
  
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

// Java icon from Font Awesome Package
import { FaJava } from "react-icons/fa";

// Database icon from Lucide pack
import { LuDatabase } from "react-icons/lu";

// VS Code icon from Visual Studio Code package
import { VscVscode } from "react-icons/vsc";

//The tech stack array with name, icon and color for each technology used in the about section
// The color is used for the icon and also for the border and background of the icon container with some transparency
const tech = [
  { name: "React",      icon: <SiReact />,      color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />,  color: "#F7DF1E" },
  { name: "Node.js",    icon: <SiNodedotjs />,   color: "#68A063" },
  { name: "Express",    icon: <SiExpress />,     color: "#ffffff" },
  { name: "MongoDB",    icon: <SiMongodb />,     color: "#47A248" },
  { name: "Firebase",   icon: <SiFirebase />,    color: "#FFCA28" },
  { name: "Python",     icon: <SiPython />,      color: "#3776AB" },
  { name: "Java",       icon: <FaJava />,        color: "#f89820" },
  { name: "Flutter",    icon: <SiFlutter />,     color: "#54C5F8" },
  { name: "HTML",       icon: <SiHtml5 />,       color: "#E34F26" },
  { name: "CSS",        icon: <SiCss3 />,        color: "#1572B6" },
  { name: "SQL",        icon: <LuDatabase />,    color: "#00758F" },
  { name: "VS Code",    icon: <VscVscode />,     color: "#007ACC" },
  
  { name: "Postman",    icon: <SiPostman />,     color: "#FF6C37" },
  { name: "Git",        icon: <SiGit />,         color: "#F05032" },
  { name: "GitHub",     icon: <SiGithub />,      color: "#c9d1d9" },
];

export default function About() {
  return (
    // Main about section
    <section id="about" className="aboutSection">

      {/* The container with 2 columns */}
      <div className="aboutContainer">

        {/* Left column about me */}
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

        {/* Right column technical skills */}
        <div className="aboutRight">
          <div className="skillsCard">
            <h3>Technical Skills</h3>

            {/* The grid of technologies with icons and names */}
            <div className="techGrid">
              {tech.map((t) => (
                <div className="techItem" key={t.name}>
                  <div className="techIcon" style={{ color: t.color, borderColor: `${t.color}40`, background: `${t.color}18` }}>
                    {t.icon}
                  </div>
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