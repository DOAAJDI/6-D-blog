import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import ForInvestors from "./components/landing/ForInvestors";
import ForStartups from "./components/landing/ForStartups";
import Testimonials from "./components/landing/Testimonials";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Features />
      <ForInvestors />
      <ForStartups />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
