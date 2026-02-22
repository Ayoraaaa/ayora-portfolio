
import { useEffect } from "react";
import "../styles/education.css";

export default function Education() {

  useEffect(() => {
    const items = document.querySelectorAll(".timelineItem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate once, then stay
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="educationSection">
      <div className="educationContainer">
        <div className="educationHeader">
          <span className="educationTag">EDUCATION</span>
          <h2 className="educationTitle">
            Academic Journey
            <span className="educationUnderline"></span>
          </h2>
        </div>
        <div className="timeline">
          <div className="timelineItem left" style={{ "--delay": "0ms" }}>
            <div className="timelineContent">
              <h3>BSc (Hons) Computer Science</h3>
              <span className="timelineDate">2025 - 2028</span>
              <div className="eduMeta">
                <div className="eduLabel">UNIVERSITY</div>
                <div className="eduText">
                  University of Westminster <span className="eduMuted">(Affiliated with Informatics Institute of Technology)</span>
                </div>
              </div>
              <div className="eduMeta">
                <div className="eduLabel">FOCUS AREAS</div>
                <ul className="eduList">
                  <li>Software Engineering</li>
                  <li>Database Systems</li>
                  <li>Full-Stack Application Development</li>
                </ul>
              </div>
              <div className="eduMeta">
                <div className="eduLabel">ACADEMIC PROJECT</div>
                <div className="eduText">Software Development Group Project — ProcuraX</div>
              </div>
            </div>
          </div>
          <div className="timelineItem right" style={{ "--delay": "200ms" }}>
            <div className="timelineContent">
              <h3> GCE Advanced Level</h3>
              <span className="timelineDate">2021-2023</span>
              <div className="eduMeta">
                <div className="eduLabel">SCHOOL</div>
                <div className="eduText">
                  St. Bridget's Convent, Colombo 7 
                </div>
              </div>
              <div className="eduMeta">
                <div className="eduLabel">STREAM</div>
                <div className="eduText">Bio Stream - Biology, Chemistry, Physics</div>
              </div>
              <div className="eduMeta">
                <div className="eduLabel">ROLE</div>
                <div className="eduText">Senior Prefect (2022-2023) <br /> Leadership, Teamwork, Communication</div>
              </div>
            </div>
          </div>
          <div className="timelineItem left" style={{ "--delay": "400ms" }}>
            <div className="timelineContent">
              <h3> GCE Ordinary Level</h3>
              <span className="timelineDate">2020</span>
              <div className="eduMeta">
                
                <div className="eduText">Completed secondary education with a strong academic foundation </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 