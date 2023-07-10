import React from "react";
import linkedinLogo from "./LI-In-Bug.png"; // Import the LinkedIn logo image

const LinkedInLink = () => {
  const linkedinUrl = "https://www.linkedin.com/in/patrick-vona-246986273"; // Replace with your LinkedIn profile URL

  return (
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={linkedinLogo}
        alt="LinkedIn"
        style={{ width: "50px", height: "50px" }}
      />
    </a>
  );
};

export default LinkedInLink;
