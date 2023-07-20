import React from "react";
import LinkedInLink from "./LinkedInLink";
import GitHubLogo from "../assets/githublogo.png";
import PdfIcon from "../assets/resumeIcon.png";

export default function Footer() {
  const openResumePDF = () => {
    const resumePDFPath = process.env.PUBLIC_URL + "/Resume.pdf";
    const newWindow = window.open(resumePDFPath, "_blank");
    if (!newWindow) {
      // error
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-notindigo text-notpeach flex flex-col md:flex-row justify-between items-center p-4 font-raleway text-xl">
      <h3 className="text-4xl mb-4 md:mb-0">Contact Me!</h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Pvon11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub" className="w-12 h-12" />
        </a>
        <LinkedInLink />
        <button onClick={openResumePDF}>
          <img src={PdfIcon} alt="Resume PDF" className="w-12 h-12" />
        </button>
      </div>
      <div className="text-center md:text-left">
        <p>patrickvona11@gmail.com</p>
      </div>
    </footer>
  );
}
