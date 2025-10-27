import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectGrid";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen antialiased">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <ProjectsGrid />
         <About />
        <ContactForm /> 
      </main>
      <Footer /> 
    </div>
  );
}

/* To Dos

1. hamburger icon
2. A link to my project to make it clickable
3. Deployment
3. i should be able to get message from the contact

*/