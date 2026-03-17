import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PlaceholderButton = () => {
  return (
    <div>
      {/* Works in progress */}
      <Link to="">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          className="rounded-4xl xl:border-3 border-white xl:p-2"
        >
          <div
            className="w-30 h-30 xl:w-60 xl:h-40 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/kota.jpg)] opacity-60 bg-cover grayscale"
          >
            <div className="h-14 w-full bg-white/50 flex justify-center items-center">
              <p className="leading-4">
                Works in progress <br />
                <span className="font-light text-lg">////////////</span>
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default PlaceholderButton;
