import React from "react";
import { motion } from "framer-motion";

const Stickers = () => {
  return (
    <div className="fixed w-screen h-screen pointer-events-none z-90">
      {/* stickers */}
      <div className="">
        {/* left side stickers */}
        <div className="">
          <img
            src="./src/assets/star.png"
            className="relative size-10 rotate-12"
          />
          <img
            src="./src/assets/star.png"
            className="relative size-5 rotate-12"
          />
          <img
            src="./src/assets/star.png"
            className="relative size-12 rotate-45 top-36 left-10"
          />

          <img
            src="./src/assets/star2.png"
            className="relative size-8 rotate-45 top-36 left-10"
          />

          <motion.div
            animate={{
              scale: [1.2, 0.9, 1.2],
              rotate: [90, 60, 90],
              transition: { ease: "linear", duration: 6, repeat: Infinity },
            }}
            className="absolute top-56 left-36"
          >
            <img
              src="./src/assets/star3.png"
              className="relative size-6 rotate-12"
            />
          </motion.div>
          <motion.div
            animate={{
              scale: [1.2, 0.9, 1.2],
              rotate: [90, 60, 90],
              transition: { ease: "linear", duration: 6, repeat: Infinity },
            }}
            className="absolute bottom-16 left-80 z-100"
          >
            <img src="./src/assets/star2.png" className="relative size-8 " />
          </motion.div>
          <div className="absolute bottom-19 left-72 z-100">
            <img src="./src/assets/star.png" className="relative size-5 " />
          </div>
        </div>

        {/* right side stickers */}
        <div>
          <div className="absolute bottom-19 right-72 z-100">
            <img
              src="./src/assets/star.png"
              className="relative size-10 rotate-20"
            />
          </div>
          <div className="absolute bottom-15 right-68 z-100">
            <img
              src="./src/assets/star3.png"
              className="relative size-6 rotate-90"
            />
          </div>
          <div className="absolute top-8 right-10 rotate-12 z-100">
            <img src="./src/assets/star.png" className="relative size-10" />
          </div>
          <div className="absolute top-9 right-22 z-100">
            <img
              src="./src/assets/star3.png"
              className="relative size-6 rotate-90"
            />
          </div>
          <motion.div
            animate={{
              scale: [1.2, 0.9, 1.2],
              rotate: [90, 20, 90],
              transition: {
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              },
            }}
            className="absolute top-5 right-32 z-100"
          >
            <img src="./src/assets/star.png" className="relative size-18 " />
          </motion.div>
          <div className="absolute top-3 right-28 z-100">
            <img
              src="./src/assets/star2.png"
              className="relative size-6 rotate-20"
            />
          </div>

          <motion.div
            animate={{
              scale: [1.2, 0.9, 1.2],
              rotate: [120, 60, 120],
              transition: {
                ease: "linear",
                duration: 10,
                repeat: Infinity,
              },
            }}
            className="absolute bottom-10 right-82"
          >
            <img src="./src/assets/star2.png" className="relative size-18 " />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stickers;
