import { motion } from "framer-motion";
import ChattingAppBtn from "./ChattingAppBtn";
import TodoApp from "./TodoApp";
import Windows98 from "./Windows98";
import FinanceAppBtn from "./FinanceAppBtn";

const SecondPage = ({ targetRef, section3Ref, section4Ref, section5Ref, section7Ref }) => {
  return (
    <section className="relative min-h-full  md:min-h-screen">
      <div
        ref={targetRef}
        className="absolute inset-0 bg-[url('./assets/bg2.png')] bg-contain "
        style={{
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      >
        <div className="absolute h-full w-screen bg-slate-800/50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0.8, x: -150 }}
        whileInView={{
          opacity: 0,
          x: 50,
          transition: {
            duration: 1.5,
            type: "spring",
          },
        }}
        className="relative left-60 top-72"
      >
        <div className="bg-white h-[1px]"></div>
        <div className="mt-2 bg-white h-[1px]"></div>
        <div className="mt-2 bg-white h-1"></div>
      </motion.div>

      <div
        className="relative flex flex-col lg:flex-row xl:mt-36 xl:pt-20 
        md:flex-wrap lg:justify-end w-full "
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              type: "spring",
            },
          }}
          className="flex flex-col items-start lg:pr-10
           text-zinc-200 max-w-96 p-5"
        >
          <div className="italic text-4xl">Projects</div>
          <div className="text-md leading-9">
            The following projects were developed during my free time using
            Javascript, Python, React, Node.js, Tailwindcss, Electron, and more!
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              duration: 1.5,
              type: "spring",
              bounce: 0.4,
            },
          }}
          className="flex flex-col xl:flex-row gap-5 lg:gap-10 lg:pb-60 px-10"
        >

          <FinanceAppBtn  />

          <ChattingAppBtn targetRef={section3Ref} />

          <TodoApp targetRef={section4Ref} />

          <Windows98 targetRef={section5Ref} />

          {/* <button className="flex flex-row lg:flex-col">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="h-28 w-48 lg:h-40 lg:w-64 bg-[url('./assets/x')] 
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
                  <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
                  <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
                  <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
                  <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
                  <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
                  <path d="M12 8v4" />
                  <path d="M12 16v.01" />
                </svg>
                Works in progress
              </p>
              <p className="flex items-end text-lg">...</p>
            </div>
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SecondPage;
