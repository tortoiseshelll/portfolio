import React from "react";
import { motion } from "framer-motion";

const TodoApp = ({ targetRef }) => {
  return (
    <button
      className="flex flex-row lg:flex-col"
      onClick={() => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="h-28 w-48 lg:h-40 lg:w-64 bg-[url('./assets/websites/windows98/1.png')]  
            bg-cover border border-black rounded-xl
            hover:border-white hover:cursor-pointer"
            ></motion.div>
            <div className="flex flex-col pl-10 self-center lg:self-auto lg:pl-0 hover:cursor-pointer">
              <p className="flex items-center text-xl font-bold pt-2 lg:self-center w-40 lg:w-full hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-10"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z" />
                  <path d="M12 5l0 14" />
                  <path d="M4 12l16 0" />
                </svg>
                Windows 98
              </p>
              <p className="flex items-end text-lg">Simulator website</p>
            </div>
          </button>
  );
};

export default TodoApp;
