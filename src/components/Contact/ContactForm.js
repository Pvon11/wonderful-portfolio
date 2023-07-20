import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqoqgwv");

  if (state.succeeded) {
    return <p className="text-green-500">Thanks for joining!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-80 mx-auto space-y-4"
    >
      <label htmlFor="email" className="text-lg font-semibold">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border border-gray-300 px-3 py-2 rounded-md"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />
      <label htmlFor="message" className="text-lg font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="border border-gray-300 px-3 py-2 rounded-md"
      ></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-notindigo hover:bg-notslate text-white px-4 py-2 rounded-md font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
