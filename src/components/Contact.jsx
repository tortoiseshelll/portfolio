import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wrkh5q",
        "template_cp6orma",
        form.current,
        "k0aQ_On8QwR3ieYZf",
      )
      .then(() => {
        alert("Thank you for contact!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send:(", error.text);
      });
  };

  return (
    <section className="relative flex-col">
      <div className="flex justify-center pt-80 md:pt-96 ">
        <h2 className="text-3xl lg:text-5xl pb-20 font-bold text-zinc-300">
          Contact
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="relative  form-wrapper bg-black/40 p-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form flex flex-col gap-5"
          >
            <div>
              <label>Name</label>
              <br />
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="p-2 w-96"
              />
            </div>

            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="from"
                required
                placeholder="Your Email"
                className="p-2 w-96"
              />
            </div>

            <div>
              <label>Message</label>
              <br />
              <textarea
                name="message"
                required
                rows="10"
                placeholder="Your Message"
                className="w-96 p-3"
              ></textarea>
            </div>

            <input className="btn" type="submit" name="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
