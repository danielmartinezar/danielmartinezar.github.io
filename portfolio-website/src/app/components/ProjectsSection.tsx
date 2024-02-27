import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      title: "Online Payment System for an Educational Institution",
      description: "React, MaterialUI, Express, MySQL, Git, API REST, SOA.",
      image: "/images/photoDaniel.png",
      tag: ["All", "Full Stack"],
    },
    {
      id: 2,
      title: "Habit Tracker",
      description:
        "Flutter, Getx, Firebase, Clean architecture, Collaborative working",
      image: "/images/photoDaniel.png",
      tag: ["All", "Mobile"],
    },
  ];
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-blue-500 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
          />
        ))}
      </div>
    </div>
  );
}
