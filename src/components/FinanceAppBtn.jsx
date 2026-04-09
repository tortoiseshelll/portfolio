import React from "react";
import { motion } from "framer-motion";

const FinanceAppBtn = ({ targetRef }) => {
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
        className="h-28 w-48 lg:h-40 lg:w-64 bg-[url('portfolio/assets/programming/financetracker/1.jpg')] 
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
            class="size-10 icon icon-tabler icons-tabler-outline icon-tabler-report-money"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
            <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
            <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
            <path d="M12 17v1m0 -8v1" />
          </svg>
          Budgetting
        </p>
        <p className="flex items-end text-lg">Finance Tracker (COMING SOON)</p>
      </div>
    </button>
  );
};

export default FinanceAppBtn;
