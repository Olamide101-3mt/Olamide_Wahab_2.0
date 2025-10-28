import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import gridImage from "/src/assets/image.png";
import gridImage2 from "/src/assets/moodbot.png";
import gridImage3 from "/src/assets/todo.png";

const sampleProjects = [
  { id: 1, title: "NextGen Academy", tags: ["branding","web"], image: gridImage, desc: "NextGen academy is a responsive student dashboard using React.js and Tailwind CSS. The dashboard featured enrolled courses progress tracking, upcoming deadlines, and profile management.",link: "https://nextgenacademy-three.vercel.app/"},
  { id: 2, title: "MoodBot", tags: ["design","ux"], image: gridImage2, desc: "Short description of project three.",   link: "https://olamide101-3mt.github.io/MoodBot/", },
  { id: 3, title: "A To-Do List", tags: ["app","ui"], image: gridImage3, desc: "A clean and interactive task manager built with JavaScript.    Allows users to add, complete, and delete tasks with real-time updates for a seamless productivity experience.", link:"https://my-to-do-list-seven-blush.vercel.app/" },
];

export default function ProjectsGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Selected projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}