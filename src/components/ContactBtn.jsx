import { div } from "framer-motion/client";
import React from "react";

const ContactBtn = ({ targetRef }) => {
  return (
    <div>
      <div className="fixed bottom-12 right-20 z-20">
        <button
          className="flex fixed animate-pulse cursor-pointer"
          onClick={() => {
            targetRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="text-xl">Contact</p>
        </button>
      </div>
    </div>
  );
};

export default ContactBtn;
