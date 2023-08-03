"use client";
import { blackBtnStyle, h2style } from "@/Styles/Tailwind-Styles";
import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-bgColour1 p-6 w-5/6 md:w-1/2">
      <form className="flex flex-col gap-4">
        <h1 className={"text-center " + h2style}>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input
          className="p-2"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          className="p-2"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <button className={blackBtnStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
