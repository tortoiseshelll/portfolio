import React from "react";
import Contact from "./Contact";

const SixthPage = ({ targetRef }) => {
  return (
    <section className="relative min-h-full md:min-h-screen lg:pt-80">
      <div
        ref={targetRef}
        className="absolute inset-0 bg-[url('portfolio/assets/bg2.png')] bg-contain rotate-180 "
      >
        <div className="absolute h-full w-screen bg-slate-800/50"></div>
      </div>

      <div className="relative pt-40 md:pt-0 md:-mt-48">
        <Contact />
      </div>
    </section>
  );
};

export default SixthPage;
