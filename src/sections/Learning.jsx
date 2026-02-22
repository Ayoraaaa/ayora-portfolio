import "../styles/learning.css";

import {
  FaLayerGroup,
  FaCode,
  FaBrain,
  FaFeatherAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { TbMath, TbChartDots } from "react-icons/tb";

const courses = [
  {
    title: "Software Engineering Fundamentals",
    desc: "Strong understanding of core development principles and system lifecycle.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Full-Stack Web Development",
    desc: "Building responsive frontend interfaces and dynamic backend systems.",
    icon: <FaCode />,
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Strengthening logical thinking and efficient problem solving.",
    icon: <FaBrain />,
  },
  {
    title: "Clean Code & Best Practices",
    desc: "Writing readable, maintainable, and modular code.",
    icon: <FaFeatherAlt />,
  },
  {
    title: "Python for Data Analysis",
    desc: "Using Python to explore and analyze structured datasets.",
    icon: <SiPython />,
  },
  {
    title: "Statistics & Probability",
    desc: "Building foundations in statistical reasoning and data interpretation.",
    icon: <TbMath />,
  },
  {
    title: "Machine Learning Fundamentals",
    desc: "Understanding core ML concepts and model basics.",
    icon: <TbChartDots />,
  },
  {
    title: "Project Management",
    desc: "Applying structured planning, coordination, and teamwork practices.",
    icon: <FaProjectDiagram />,
  },
];

export default function Learning() {
  return (
    <section id="learning" className="learningSection">
      <div className="learningContainer">

        <div className="learningHeader">
          <span className="learningTag">LEARNING</span>

          <h2 className="learningTitle">
            What I&apos;m Studying
            <span className="learningUnderline"></span>
          </h2>

          <p className="learningSubtitle">
            Areas I am actively developing as part of my undergraduate journey.
          </p>
        </div>

        <div className="cardsGrid">
          {courses.map((course) => (
            <div className="courseCard" key={course.title}>
              <div className="cardIcon">{course.icon}</div>
              <h4 className="cardTitle">{course.title}</h4>
              <p className="cardDesc">{course.desc}</p>
              <div className="cardAccent"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}