import React from "react";
import { motion } from "framer-motion";

const ChattingAppBtn = ({ targetRef }) => {
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
        className="h-28 w-48 lg:h-40 lg:w-64 bg-[url(./assets/programming/chattingapp/1.png')] 
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
            <path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z" />
            <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
          </svg>
          NotDiskord
        </p>
        <p className="flex items-end text-lg">Chatting App</p>
      </div>
    </button>
  );
};

export default ChattingAppBtn;
