import React, { useRef } from "react";
import ButtonScroll from "./ButtonScroll";
import { motion } from "framer-motion";

const MainPage = ({ targetRef, section2Ref }) => {
  return (
    <section className="relative h-screen" ref={targetRef}>
      <div
        className="absolute inset-0 bg-[url('public/assets/bg.jpg')] bg-cover bg-center"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      >
        <div className="absolute h-screen w-screen backdrop-blur-sm"></div>
      </div>

      <div
        className="h-screen w-screen justify-center 
          flex items-center gap-4"
      >
        <motion.svg
          animate={{
            rotate: [20, 0, 20],
          }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="relative size-36 md:size-56 animate-pulse"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </motion.svg>
        <div className="flex flex-col justify-center items-center -translate-x-20 md:-translate-x-32">
          <h1
            className="text-4xl md:text-6xl z-10 text-zinc-200 flex 
              items-center tracking-wider"
          >
            Wiktoria Czuba
          </h1>
          <h2 className="text-1xl md:text-2xl z-10 text-zinc-300 tracking-wider">
            Portfolio overview
          </h2>
        </div>
        <h3
          className="absolute z-0 text-5xl md:text-8xl text-zinc-200/5 
            select-none font-bold tracking-widest"
        >
          Wiktoria<span className="pl-5">Czuba</span>
        </h3>
        <h4 className="absolute top-20 text-2xl">Works in progress</h4>
      </div>

      <ButtonScroll targetRef={section2Ref} />
    </section>
  );
};

export default MainPage;
