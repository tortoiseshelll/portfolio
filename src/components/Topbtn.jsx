import React from "react";

const Topbtn = ({ targetRef }) => {
  return (
    <div className=" fixed -bottom-14 md:-bottom-10 right-0 left-0 w-10 h-10 z-20">
      <button
        className="flex fixed animate-pulse cursor-pointer"
        onClick={() => {
          targetRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative -top-20 md:-top-16 size-14  text-zinc-200 rotate-180"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7l5 5l5 -5" />
          <path d="M7 13l5 5l5 -5" />
        </svg>
      </button>
    </div>
  );
};

export default Topbtn;
