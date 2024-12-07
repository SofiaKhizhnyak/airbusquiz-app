"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AlertBox from "./AlertBox";

function SendEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (hasSubmitted) validateForm();
  }, [name, email, hasSubmitted]);

  const validateForm = () => {
    let formErrors = {};

    if (!name) {
      formErrors.name = "Name is required.";
    }

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!validateForm()) return;

    const templateParams = {
      from_name: "AirbusQuiz",
      from_email: "Airbus Quiz - new request",
      message: `There is a new request to signup to your Airbus Quiz App:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      )
      .then(
        (response) => {
          setMsg("Email sent successfully!");
          setStatus("success");
          setShowAlert(true);
        },
        (error) => {
          setMsg("Failed to send email! try again please." + error.text);
          setStatus("error");
          setShowAlert(true);
        }
      )
      .finally(() => {
        setName("");
        setEmail("");
        setMessage("");
        setHasSubmitted(false);
        setErrors({});
      });
  };

  return (
    <div className="flex flex-col items-center  lg:w-3/5 mt-3 lg:mt-0 p-3 sm:p-6 rounded-lg bg-white shadow-lg w-4/5 max-h-screen">
      <form onSubmit={sendEmail} className="w-full max-w-md space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          {hasSubmitted && errors.name && (
            <p className="text-red-400 text-xs">{errors.name}</p>
          )}
          <input
            className="custom-input  w-full rounded-lg border border-gray-200 p-2 text-xs md:text-sm"
            placeholder="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          {hasSubmitted && errors.email && (
            <p className="text-red-400 text-xs">{errors.email}</p>
          )}
          <input
            className="custom-input  w-full rounded-lg border border-gray-200 p-2 text-xs md:text-sm"
            placeholder="Email address"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            className="custom-input w-full rounded-lg border border-gray-200 p-2 text-xs md:text-sm"
            placeholder="Message"
            rows="2"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-2 flex justify-center">
          <button
            type="submit"
            disabled={!name || !email}
            className="inline-block w-3/5 rounded-lg bg-blue-950 px-3 py-2 cursor-pointer font-medium text-white hover:scale-110 disabled:opacity-50 disabled:bg-gray-400"
          >
            Send
          </button>
        </div>
      </form>

      {showAlert && status && (
        <div className="fixed flex items-center justify-center inset-0 z-50 bg-black bg-opacity-50 p-10">
          <div className="flex flex-col items-center justify-center bg-transparent rounded-lg p-6 w-150  h-150 shadow-lg relative">
            <AlertBox
              msg={msg}
              status={status}
              onClose={() => setShowAlert(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SendEmail;
