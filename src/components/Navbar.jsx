import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navWrap" id="top">
      <div className="navInner">
        <a className="brand" href="#top">
          AYORA<span className="brandDot">.</span>
        </a>

        <nav className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#learning">Learning</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          
          <a href="#achievements">Achievements</a>
          <a href="#contact" >Contact</a>
        </nav>
      </div>
    </header>
  );
}
