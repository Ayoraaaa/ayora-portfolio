import { useState } from "react";
import SplashScreen from "./components/splashScreen.jsx";

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Learning from './sections/Learning.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import Achievements from './sections/Achievements.jsx';
import Projects from './sections/Projects.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <Navbar />
            <Hero />
            <About />
            <Learning />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}