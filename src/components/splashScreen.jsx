import { useEffect, useState } from "react";
import "../styles/splash.css";

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1800); // show for 1.8 sec

    const timer2 = setTimeout(() => {
      onFinish();
    }, 2500); // remove splash

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`splash ${fadeOut ? "fade" : ""}`}>
      <h1 className="splashName">Ayora Fernando</h1>
      <div className="splashLine"></div>
      <p className="splashSub">Computer Science Undergraduate</p>
    </div>
  );
}