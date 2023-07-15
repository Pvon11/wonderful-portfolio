// Contact/index.js
import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="my-20 flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <ContactForm />
    </section>
  );
}
