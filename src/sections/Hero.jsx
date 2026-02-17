import "../styles/hero.css";
import profileImage from "../assets/profile3.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-left">
          <p className="intro-text">HELLO, I'M</p>

          <h1 className="hero-title">
            AYORA <br /> FERNANDO<span className="name-dot">.</span>
          </h1>

          <h2 className="role">
            UNDERGRADUATE <br /> 
            <span>COMPUTER SCIENCE STUDENT</span>
          </h2>

          

          <div className="buttons">
            <a href="#projects" className="btn projects">View My CV</a>
            <a href="#contact" className="btn contact">Contact Me</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="img-card">
            <img src={profileImage} alt="Ayora Cassandra" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
