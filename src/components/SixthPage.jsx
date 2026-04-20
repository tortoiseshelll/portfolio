import React from "react";
import Contact from "./Contact";

const SixthPage = ({ targetRef }) => {
  return (
    <section className="relative min-h-full md:min-h-screen lg:pt-80">
      <div
        ref={targetRef}
        className="absolute inset-0 bg-[url('./assets/bg2.png')] bg-contain rotate-180 "
      >
        <div className="absolute h-full w-screen bg-slate-800/50"></div>
      </div>
      <div className="relative lg:mx-40 2xl:mx-80  flex-1 justify-center bg-black/50">
        <div className="relative  md:pt-0 mt-[-640px] pb-96">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default SixthPage;
