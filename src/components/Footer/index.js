import React from "react";
import LinkedInLink from "./LinkedInLink"; // Import the LinkedInLink component

export default function Footer() {
  return (
    <>
      <footer className="flex end-0 justify-between font-serif text-xl">
        <h3 className="text-4xl">Contact Information</h3>
        <a
          href="https://github.com/Pvon11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <LinkedInLink /> {/* Add the LinkedInLink component here */}
        <p>1-609-477-2944</p>
        <p>patrickvona11@gmail.com</p>
      </footer>
    </>
  );
}
