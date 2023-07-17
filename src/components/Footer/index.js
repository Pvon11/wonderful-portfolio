import React from "react";
import LinkedInLink from "./LinkedInLink";
import GitHubLogo from "../assets/githublogo.png";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-notindigo text-notpeach flex justify-between items-center p-4 font-raleway text-xl">
      <h3 className="text-4xl">Contact Me!</h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Pvon11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub" className="w-12 h-12" />
        </a>
        <LinkedInLink />
      </div>
      <div>
        <p>patrickvona11@gmail.com</p>
      </div>
    </footer>
  );
}
