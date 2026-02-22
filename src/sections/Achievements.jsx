// src/sections/Achievements.jsx
import "../styles/achievements.css";

export default function Achievements() {
  const achievements = [
    

    {
      title: "Machine Learning Certification",
      issuer: "Informartics Institute of Technology",
      date: "Jan 2026",
      skills: ["Supervised Learning", "Modal Evalution", "Data Preprocessing"],
      link: "https://www.linkedin.com/in/ayora-fernando-73b40134b/overlay/Certifications/1944865101/treasury/?profileId=ACoAAFdyat8BL0mXBVovF-qob4JgHqZ6qOjwCDI"
    },
    {
      title: "Python GUI Development with Tkinter",
      issuer: "LinkedIn Learning ",
      date: "April 2025",
      skills:["Tkinter UI Design", "Event Handling", "Widget Customization"],
      link: "https://www.linkedin.com/learning/certificates/82002d1b693d01bfa56519cafd459230664177d200b0591106f48b4085f5d510?accountId=76664938&u=76664938&success=true&authUUID=bt%2BsbehGQfyCCWzXLhyVBA%3D%3D"
    },

    {
      title: "Python Data Analysis ",
      issuer: "LinkedIn Learning ",
      date: "April 2025",
      skills: ["Pandas", "Data Visualization", "Exploratory Data Analysis"],
      link: "https://www.linkedin.com/learning/certificates/e09904ee0fce6817afb310ade8abefe86be604869804ba2fb2d2e77f3371805f?u=76664938"
    },

    {
      title: "Advanced Python Programming ",
      issuer: "LinkedIn Learning ",
      date: "April 2025",
      skills: ["Error Handling", "Python modules & Libraries"],
      link: "https://www.linkedin.com/learning/certificates/4e13bbedbe4236715474e789c9e70768d325eb9c2e468fdf5c90d233ad031238?u=76664938"
    },

    {
      title: "Python Essential Training ",
      issuer: "LinkedIn Learning ",
      date: "March 2025",
      skills:["Python Basics", "Control Flow", "Functions & OOP"],
      link: "https://www.linkedin.com/learning/certificates/f3c251594b67f635c6f9d01f60a5d82be538328c673bade1543307dd4ee1db35?u=76664938"
    },

    {
      title: "Senior Prefect",
      issuer: "St.Bridget's Convent, Colombo 7",
      date: "2022-2023",
      skills: ["Leadership", "Teamwork", "Communication"],
      
    },




    
  ];

  return (
    <section id="achievements" className="achievementsSection">
      <div className="achievementsContainer">

        <div className="achievementsHeader">
          <span className="achievementsTag">ACHIEVEMENTS</span>

          <h2 className="achievementsTitle">
            Certifications & Recognition
            <span className="achievementsUnderline"></span>
          </h2>

          <p className="achievementsSubtitle">
            Certifications and leadership recognition that reflect my growth and commitment.
          </p>
        </div>

        <div className="achievementsGrid">
          {achievements.map((item, index) => (
            <div key={index} className="achievementCard">

              <h3 className="achievementTitle">{item.title}</h3>
              <p className="achievementIssuer">{item.issuer}</p>
              <p className="achievementDate">{item.date}</p>
              {item.skills && item.skills.length > 0 && (
                <div className="achievementSkills">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="skillPill">{skill}</span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="achievementBtn"
                >
                View Credential
                </a>
              )}

              <div className="cardAccent"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}