import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stickers from "../components/Stickers";
import TopBar from "../components/TopBar";
import LeftSide from "../components/LeftSide";

const ContactPage = () => {
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
    <>
      <section className="relative h-screen overflow-x-hidden font-Karla">
        <div className="lg:flex text-white text-shadow-sm ">
          {/* topbar */}
          <TopBar></TopBar>

          {/* left side */}
          <LeftSide></LeftSide>

          {/* RIGHT SIDE */}
          <div>
            <div className="relative h-screen w-screen bg-amber-100">
              <div className="fixed h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover"></div>
              <div className="absolute right-0 h-100 w-full lg:h-screen lg:w-3/5 xl:w-4/6 2xl:w-3/4 ">
                {/* buttons / boxes */}
                <div
                  className="relative lg:top-20 mx-auto h-[50vh] lg:w-[80vh] lg:h-[90vh] xl:w-[110vh] 2xl:w-[140vh]
                  text-white p-10 lg:text-2xl
                 flex flex-col justify-center gap-10 rounded-4xl "
                >
                  {/* contact form */}
                  <div className="flex justify-center">
                    <h2 className="text-3xl lg:text-5xl font-bold ">Contact</h2>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative  form-wrapper bg-black/40 p-10 rounded-3xl">
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
                            className="p-2 w-96 border rounded-xl focus:outline-none"
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
                            className="p-2 w-96 border rounded-xl focus:outline-none"
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
                            className="p-3 w-96 border rounded-xl focus:outline-none"
                          ></textarea>
                        </div>

                        <input
                          className="btn"
                          type="submit"
                          name="submit"
                          value="Send"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* stickers */}
          <Stickers></Stickers>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
