import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EmailFailed, EmailSuccessful } from "./Utilities/Alerts";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const ContactForm = () => {
  const [emailAlert, setEmailAlert] = useState({ show: false, type: null });
  const form = useRef();
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleCloseAlert = () => {
    setEmailAlert({ ...emailAlert, show: false, type: null });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f5bz51k", "template_xt10eod", form.current, {
        publicKey: "VYh5yXM1DXQDmUeev",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailAlert({ ...emailAlert, show: true, type: "success" });
          setContactFormData((currData) => {
            const resetFormData = { ...currData };
            Object.keys(resetFormData).map((key) => {
              resetFormData[key] = "";
            });
            return resetFormData;
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailAlert({ ...emailAlert, show: true, type: "error" });
        }
      );
  };

  return (
    <div className="w-full lg:w-1/2 text-primary-100 shadow-lg rounded-lg">
      <motion.form
        variants={container(1)}
        initial="hidden"
        animate="visible"
        ref={form}
        onSubmit={sendEmail}
        action="/submit"
        method="POST"
      >
        <div className="form-control mb-4">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            value={contactFormData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            value={contactFormData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="subject" className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="input input-bordered w-full"
            value={contactFormData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="message" className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
            value={contactFormData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-primary-600 text-primary-900 hover:bg-primary-900 hover:text-primary-100 w-full"
          >
            Send Message
          </button>
        </div>
      </motion.form>
      {emailAlert.show &&
        (emailAlert.type === "success" ? (
          <EmailSuccessful handleClose={handleCloseAlert} />
        ) : (
          <EmailFailed handleClose={handleCloseAlert} />
        ))}
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Contact <span className="text-primary-600">Me</span>
            </motion.h1>
            <div className="lg:flex lg:flex-row-reverse lg:gap-20 lg:w-full lg:items-start lg:justify-between">
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="my-2 max-w-xl py-6 font-light text-justify lg:w-1/2"
              >
                I’m always excited to connect with new people and explore
                opportunities in the world of software development. Whether
                you're interested in discussing innovative tech solutions,
                collaborating on a project, or seeking expert advice on web
                development services, I’m here to help. Feel free to reach out
                if you're passionate about technology or if you have a vision
                you'd like to bring to life. Let’s connect and make great things
                happen together!
              </motion.p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
