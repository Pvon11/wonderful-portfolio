import React from "react";
import picture from "../assets/Docdocs.png";
import picture1 from "../assets/MovieBattle.png";
import picture2 from "../assets/WeatherApp.png";
import picture3 from "../assets/NoteTaker.png";
import picture4 from "../assets/PASSWORD.png";
import picture5 from "../assets/WorkPlanner.png";

const projects = [
  {
    name: "Docdocs",
    image: picture,
    description: "A Medical Database for Doctors.",
    technologies: "Handlebars, JavaScript, Express, bcrypt, nodemailer, node.",
    deployed: "https://obscure-falls-81911.herokuapp.com/",
    repo: "https://github.com/JSR5404/DocDocs",
  },
  {
    name: "Movie Battle",
    image: picture1,
    description: "A fun quiz app that after gives you a movie watch.",
    technologies: "API key, HTML, JavaScript, Bulma.",
    deployed: "https://kelseyra.github.io/movie-battle/",
    repo: "https://github.com/KelseyRA/movie-battle",
  },
  {
    name: "Weather App",
    image: picture2,
    description: "A 5 day weather forecast using open weathers API.",
    technologies: "API, JavaScript, HTML, CSS.",
    deployed: "https://pvon11.github.io/Weather-App/",
    repo: "https://github.com/Pvon11/Weather-App",
  },
  {
    name: "Note Taker",
    image: picture3,
    description: "A Note Taking app that saves notes.",
    technologies: "HTML, CSS, JavaScript, Node.js, Heroku.",
    deployed: "https://murmuring-badlands-33690.herokuapp.com/",
    repo: "https://github.com/Pvon11/Note-Taker",
  },
  {
    name: "Password Generator",
    image: picture4,
    description: "A Note Taking app that saves notes.",
    technologies: "Placeholder",
    deployed: "https://pvon11.github.io/Password-Generator/",
    repo: "https://github.com/Pvon11/Password-Generator",
  },
  {
    name: "Work Day Scheduler",
    image: picture5,
    description: "A Note Taking app that saves notes.",
    technologies: "HTML, CSS, JavaScript",
    deployed: "https://pvon11.github.io/Work-Planner/",
    repo: "https://github.com/Pvon11/Work-Planner",
  },
];

export default function Projects() {
  return (
    <div id="project">
      <h1 className="text-4xl text-center py-5">Projects</h1>
      <div className="flex flex-wrap justify-center mx-auto max-w-4xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-100 border-2 border-blue-600 rounded-md p-5 m-5 max-w-sm"
          >
            <h2 className="text-2xl mb-3">{project.name}</h2>
            <img className="w-1/2 mx-auto mb-3" src={project.image} alt="" />
            <p className="mb-3">{project.description}</p>
            <p className="mb-3">{project.technologies}</p>
            <div className="flex justify-center space-x-4">
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-300 border-2 border-black-600 hover:bg-red-600 py-2 px-4 rounded"
              >
                Deployed Link
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-300 border-2 border-black-600 hover:bg-red-600 py-2 px-4 rounded"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
