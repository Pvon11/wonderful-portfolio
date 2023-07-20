import React from "react";
import picture from "../assets/Docdocs.png";
import picture1 from "../assets/MovieBattle.png";
import picture2 from "../assets/WeatherApp.png";
import picture3 from "../assets/Pokemon.png";

//List of projects
const projects = [
  {
    name: "Docdocs",
    image: picture,
    description: "A Medical Database for Doctors.",
    technologies: "Handlebars, JavaScript, Express, bcrypt, nodemailer, node.",
    deployed: "https://intelligent-bastille-94774-2d7aa4f639d1.herokuapp.com/",
    repo: "https://github.com/Pvon11/DocDocs",
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
    name: "Pokémon",
    image: picture3,
    description: "My first project, Guess the Pokémon!",
    technologies: "HTML, CSS, JavaScript, PokéAPI.",
    deployed: "https://pvon11.github.io/Pokemon-Quiz/",
    repo: "https://github.com/Pvon11/Pokemon-Quiz",
  },
];

export default function Projects() {
  return (
    <div
      id="project"
      className="flex flex-wrap justify-center mx-auto max-w-4xl mt-20 mb-40 text-center"
    >
      <div className="flex flex-wrap justify-center mx-auto max-w-4xl mt-10 md:mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-notsilver border-2 border-notslate rounded-md p-5 m-5 max-w-sm"
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
                className="bg-zinc-300 border-2 border-black-600 hover:bg-notslate py-2 px-4 rounded"
              >
                Deployed Link
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-300 border-2 border-black-600 hover:bg-notslate py-2 px-4 rounded"
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
