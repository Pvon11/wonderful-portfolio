import React from "react";
import picture from "../assets/image0.jpeg";

export default function About() {
  return (
    <section
      id="aboutMe"
      className="my-20 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="text-center">
        <img
          className="w-48 h-48 rounded-full mb-6 mx-auto"
          src={picture}
          alt="Profile"
        />
        <p className="max-w-xl text-lg leading-relaxed font-raleway">
          I am a passionate MERN full-stack web developer with expertise in
          creating robust and dynamic web applications. In my free time, I
          channel my creativity through music, performing as a freelance jazz
          trombonist. Combining my technical skills and artistic flair, I strive
          to craft seamless user experiences and harmonize technology with
          artistry.
        </p>
      </div>
    </section>
  );
}
