import { useState } from "react";
import "../styles/projects.css";
import { a, details } from "framer-motion/client";

const projects = [
  {
    id: "procurax",
    title: "ProcuraX",
    desc: "A procurement tracking application developed for ICC company  to streamline internal request management and communication (Group Project).",
    tech: ["Flutter", "Node.js", "UI/UX", "Firebase"],
    image: "/images/projects/ProcuraX.png",
    github: "https://github.com/Aakashwije/ICC_ProcuraX",
    deploySoon: true,
    details: {
      overview:
      "A group project developed for International Construction Consortium (Pvt) Ltd to manage procurement tracking and improve internal coordination.",
      core: [
      "Procurement request tracking",
      "Status monitoring and workflow updates",
    ],
    additional: [
      "Internal communication module",
      "Document & media file management",
      "Supporting pages for request handling",
    ],
    contributions: [
      "Built the internal communication module",
      "Implemented document and media file handling",
      "Integrated Firebase for real-time updates",
    ],
  }
    
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    desc: "A modern developer portfolio designed to showcase projects, skills, and experience with a structured UI",
    tech: ["React", "CSS", "Vite"],
    image: "/images/projects/Portfolio.png",
    github: "https://github.com/Ayoraaaa/ayora-portfolio",
    details: {
  overview:
    "A responsive dark-themed portfolio built with React to showcase projects, skills, and academic journey.",
  features: [
    "Scroll-based section navigation",
    "Modal project previews",
    "Responsive layout",
    "Glass-style UI and micro-interactions",
  ],
},
  },
  {
    id: "ticketflow",
    title: "Ticket Flow System",
    desc: "A role-based ticket management system with user and admin dashboards, status tracking, and secure authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/ticket-system/Admin-Dashboard.png",
    github: "https://github.com/Ayoraaaa/ticketflow-support-system",
    details: {
  overview:
    "A full-stack solo project where users create and track tickets while admins update status and manage comments.",
  features: [
    "JWT authentication",
    "Role-based access (User / Admin)",
    "CRUD operations for tickets",
    "Status filtering and tracking",
    "Separate dashboards for users and admins",
  ],
},
    screenshots: [
      "/images/projects/ticket-system/login.png",
      "/images/projects/ticket-system/userdashboard.png",
      "/images/projects/ticket-system/create-ticket.png",
    ],
  },
  {
    id: "lifeonland",
    title: "Life on Land",
    desc: "A group project focused on SDG environmental awareness and education through a simple web experience.",
    tech: ["Html", "CSS", "JavaScript"],
    image: "/images/projects/life-on-land/LOL.png",
    github: "https://github.com/Ayoraaaa/Life-on-land-",
    screenshots: ["/images/projects/life-on-land/Life-on-land-01.png"],
    details: {
  overview:
    "A group project focused on SDG environmental awareness and education through a simple web experience.",
  contribution: [
    "Built the feedback form",
    "Designed the team page",
    "Implemented the footer component",
  ],
},
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modalOverlay open"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modalBox">
        {/* Close */}
        <button className="modalClose" onClick={onClose}>✕</button>

        {/* Image */}
        <div className="modalThumb">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Title + Desc */}
        <div className="modalTitle">{project.title}</div>
        <div className="modalDesc">{project.desc}</div>

        {/* Tech pills */}
        <div className="modalTechRow">
          {project.tech.map((t, i) => (
            <span key={i} className="techPill">{t}</span>
          ))}
        </div>

        {/* Modal Details */}
{project.details && (
  <div className="modalDetails">
    {project.details.overview && (
      <div className="detailBlock">
        <div className="detailTitle">OVERVIEW</div>
        <p className="detailText">{project.details.overview}</p>
      </div>
    )}

    {project.details.core?.length > 0 && (
      <div className="detailBlock">
        <div className="detailTitle">CORE FEATURE</div>
        <ul className="detailList">
          {project.details.core.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    )}

    {project.details.extras?.length > 0 && (
      <div className="detailBlock">
        <div className="detailTitle">ADDITIONAL MODULES</div>
        <ul className="detailList">
          {project.details.extras.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    )}

    {project.details.features?.length > 0 && (
      <div className="detailBlock">
        <div className="detailTitle">KEY FEATURES</div>
        <ul className="detailList">
          {project.details.features.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    )}

    {project.details.contribution?.length > 0 && (
      <div className="detailBlock">
        <div className="detailTitle">MY CONTRIBUTION</div>
        <ul className="detailList">
          {project.details.contribution.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}

        {/* Deploying Soon badge */}
        {project.deploySoon && (
          <div className="modalDeployRow">
            <span className="deployBadge">
              <span className="deployDot"></span>
              Deploying Soon
            </span>
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots?.length > 0 && (
          <>
            <span className="screenshotsLabel">SCREENSHOTS</span>
            <div className="screenshotsGrid">
              {project.screenshots.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="screenshotLink"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="screenshotImg"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </>
        )}

        {/* GitHub button */}
        <div className="modalActions">
          <a
            className="githubBtn"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>

        <div className="modalAccent"></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const activeProject = projects.find((p) => p.id === activeModal) || null;

  return (
    <>
      <section id="projects" className="projectsSection">
        <div className="projectsContainer">
          <div className="projectsHeader">
            <span className="projectsTag">PROJECTS</span>
            <h2 className="projectsTitle">
              Things I've Built
              <span className="projectsUnderline"></span>
            </h2>
            <p className="projectsSubtitle">
              A few projects that reflect my skills in frontend, backend, and
              building clean UI.
            </p>
          </div>

          <div className="projectsGrid">
            {projects.map((p) => (
              <article
                key={p.id}
                className="projectCard"
                onClick={() => setActiveModal(p.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveModal(p.id)}
              >
                <div className="projectThumb">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>

                <h3 className="projectTitle">{p.title}</h3>
                <p className="projectDesc">{p.desc}</p>

                <div className="techRow">
                  {p.tech.map((t, i) => (
                    <span key={i} className="techPill">{t}</span>
                  ))}
                </div>

                {p.deploySoon && (
                  <span
                    className="deployBadge"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="deployDot"></span>
                    Deploying Soon
                  </span>
                )}

                {/* Buttons */}
                <div className="cardActions" onClick={(e) => e.stopPropagation()}>
                  {/* GitHub Button */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="cardBtn"
                   
                  >
                    <GitHubIcon />
                      View on GitHub
                  </a>

                  {/* Screenshots Button */}
                  {p.screenshots?.length > 0 && (
                    <button
                      type="button"
                      className="cardBtn primary"
                      onClick={() => setActiveModal(p.id)}
                    >
                      <ImageIcon />
                      View Screenshots
                    </button>
                  )}
                </div>

                <div className="projectAccent"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeModal && (
        <Modal project={activeProject} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}