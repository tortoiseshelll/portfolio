import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stickers from "../components/Stickers";
import TopBar from "../components/TopBar";
import LeftSide from "../components/LeftSide";

const AboutMePage = () => {
  return (
    <>
      <section className="relative h-screen overflow-x-hidden font-Karla selection:bg-orange-700">
        <div className="lg:flex text-white text-shadow-sm ">
          {/* topbar */}
          <TopBar></TopBar>

          {/* left side */}
          <LeftSide></LeftSide>

          {/* RIGHT SIDE */}
          <div>
            <div className="relative h-screen w-screen bg-amber-100">
              <div className="fixed h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover"></div>
              <div className="absolute right-0 h-100 w-full lg:h-screen lg:w-3/5 xl:w-4/6 2xl:w-3/4 ">
                {/* buttons / boxes */}
                <div
                  className="relative lg:top-20 mx-auto h-[50vh] lg:w-[80vh] lg:h-[90vh] xl:w-[110vh] 2xl:w-[140vh]
                   p-10 lg:text-2xl bg-black
                 flex flex-wrap justify-center gap-10 rounded-4xl "
                >
                  <p className="font-light text-xl">
                   Works in progress
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* stickers */}
          <Stickers></Stickers>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
