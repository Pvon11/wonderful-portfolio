import React from "react";
import picture from "../assets/image0.jpeg";

export default function About() {
  return (
    <>
      {" "}
      <section class="projects" id="aboutMe" className="my-20">
        <h2 className="flex text-5xl p-5 font-serif text-center">About Me</h2>
        <div>
          <img className="p-5" src={picture} alt="Whoops"></img>
          <p className="flex justify-between p-5 text-xl font-mono border-black border-2">
            I am a passionate MERN full-stack web developer with expertise in
            creating robust and dynamic web applications. In my free time, I
            channel my creativity through music, performing as a freelance jazz
            trombonist. Combining my technical skills and artistic flair, I
            strive to craft seamless user experiences and harmonize technology
            with artistry.
          </p>
        </div>
      </section>
    </>
  );
}
