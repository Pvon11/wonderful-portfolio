import React from "react";
import LinkedInLink from "./LinkedInLink"; // Import the LinkedInLink component

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-700 text-amber-700 flex justify-between items-center p-4 font-serif text-xl">
      <h3 className="text-4xl">Contact Information</h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Pvon11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <LinkedInLink /> {/* Add the LinkedInLink component here */}
      </div>
      <div>
        <p>1-609-477-2944</p>
        <p>patrickvona11@gmail.com</p>
      </div>
    </footer>
  );
}
