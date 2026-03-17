import React from "react";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div>
      {/* LEFT SIDE */}
      <div
        className="lg:fixed h-100 w-full lg:h-screen lg:w-2/5 xl:w-2/6 2xl:w-1/4 
          lg:rounded-tr-3xl lg:rounded-br-3xl bg-amber-200 z-20"
      >
        {/* profile pic + name + careers */}
        <div className="relative top-20 left-5 lg:top-14 lg:left-2 flex gap-2 lg:gap-3">
          {/* pic border */}
          <motion.div
            animate={{
              rotate: [360, 0, 360],
            }}
            transition={{
              ease: "easeInOut",
              duration: 6,
              repeat: Infinity,
            }}
            className="relative -top-5 h-24 w-24 lg:h-36 lg:w-36 flex justify-center items-center
                 rounded-full border-white border-b-4 border-t-4 border-dashed"
          ></motion.div>

          {/* pfp pic */}
          <div
            className="absolute -top-3 left-2 lg:-top-2 lg:left-3 h-20 w-20 lg:h-30 lg:w-30 bg-cover 
              bg-[url(src/assets/kota.jpg)] rounded-full animate-none"
          ></div>

          {/* name + careerscd */}
          <h1 className="text-3xl xl:text-4xl font-light ">
            <span className="font-bold">Czuba</span> Wiktoria <br />
          </h1>
          <h2 className="absolute top-10 left-26 lg:left-40 font-light text-lg italic text-orange-400">
            Software Engineer / Web Developer
            <br />
            3D Designer / Artist
          </h2>
        </div>

        {/* info box */}
        <div
          className="relative top-32 lg:top-24 mx-auto w-4/5 
              lg:w-3/4 bg-orange-300 rounded-4xl rounded-tr-none pb-3 lg:pb-10"
        >
          <div
            className="absolute -top-7 lg:-top-12 right-0 h-8 lg:h-16 w-2/3
               bg-orange-300 rounded-t-4xl flex justify-center"
          >
            <h3 className="relative text-white text-3xl lg:text-4xl top-1 lg:top-2 -left-2 italic">
              Hello
            </h3>
          </div>
          <div className="text-white p-3 lg:p-5 text-xs xl:text-base 2xl:text-xl">
            <p id="page1" className="">
              I am a very passionate individual who takes on every opportunity
              life throws at and always try to make the most of it. I am excited
              about further advancing my knowledge and skills in programming and
              3D development as I feel it lets me grow both academically and
              personally.
            </p>
            <p id="page2" className="hidden md:block">
              Throughout my academic career, I expanded my Python programming
              skills, and as a hobby, I practiced 3D modelling and prototyping.
              A lot of my ideas received recognition for their originality and
              practical application, sparking in me a desire to create products
              that are not only aesthetically pleasing but also functional and
              easily accessible.
            </p>
          </div>

          {/* 3 dots */}
          <div>
            <button
              className="absolute rounded-full size-3 lg:size-5 right-5 
                bottom-5 bg-amber-100 focus:bg-amber-200
                "
            ></button>
            <button
              className="absolute rounded-full size-3 lg:size-5 right-12 
                bottom-5 bg-amber-100  focus:bg-amber-200
                "
            ></button>
            <button
              className="absolute rounded-full size-3 lg:size-5 
                 right-19 bottom-5 bg-amber-100 focus:bg-amber-200"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
