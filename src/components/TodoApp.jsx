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
        className="h-28 w-48 lg:h-40 lg:w-64 bg-[url('./assets/noteapp/1.png')] 
              bg-cover border rounded-xl border-black hover:border-white hover:cursor-pointer"
      ></motion.div>
      <div className="flex flex-col pl-10 self-center lg:self-auto lg:pl-0 hover:cursor-pointer">
        <p className="flex items-center text-xl font-bold pt-2 lg:self-center w-40 lg:w-full hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-10"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
            <path d="M9 7l6 0" />
            <path d="M9 11l6 0" />
            <path d="M9 15l4 0" />
          </svg>
          CatNotes
        </p>
        <p className="flex items-end text-lg">Todo/Notes App</p>
      </div>
    </button>
  );
};

export default TodoApp;
