import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bhfz8dx", "template_wcobx7s", form.current, {
        publicKey: "HciDIYJrrcqHZX6mt",
        email: formData.email,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulärdata:", formData);
    sendEmail(e);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto mt-8 rounded-3xl shadow-lg shadow-gray p-5 ">
      <h2 className="text-3xl font-poppins mb-4">Kontakta oss</h2>
      <div className="font-poppins mb-6">
        <p>
          Välkommen till vår kontaktsida! Vi är här för att hjälpa dig. Fyll i
          formuläret nedan för att nå oss, och vi kommer att svara så snart som
          möjligt.
        </p>
      </div>
      <div>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-poppins text-gray-600"
            >
              Namn:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-poppins text-gray-600"
            >
              E-postadress:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-poppins text-gray-600"
            >
              Meddelande:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-poppins bg-blue hover:bg-cyan text-white p-2 rounded-md"
          >
            Skicka meddelande
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
