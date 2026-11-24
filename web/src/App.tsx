import { useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Works } from "./components/Works";
import { Services } from "./components/Services";
import { Masters } from "./components/Masters";
import { Kids } from "./components/Kids";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { useSiteMotion } from "./hooks/useMotion";
import "./App.css";

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSiteMotion(rootRef);

  return (
    <div className="app" ref={rootRef}>
      <a className="skip-link" href="#works">
        К содержанию
      </a>
      <Header />
      <main>
        <Hero />
        <Works />
        <Services />
        <Masters />
        <Kids />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
