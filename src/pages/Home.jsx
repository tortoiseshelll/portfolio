import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stickers from "../components/Stickers";
import TopBar from "../components/TopBar";
import LeftSide from "../components/LeftSide";

const Home = () => {
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
            <div className="relative h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover">
              <div className="absolute right-0 h-100 w-full lg:h-screen lg:w-3/5 xl:w-4/6 2xl:w-3/4 ">
                {/* buttons / boxes */}
                <div
                  className="relative lg:top-20 mx-auto h-[50vh] lg:w-[80vh] lg:h-[90vh] xl:w-[110vh] 2xl:w-[140vh]
                  text-white p-10 lg:text-2xl
                 flex flex-col justify-center gap-10 rounded-4xl "
                >
                  {/* first row */}
                  {/* programming page */}
                  <div className="flex gap-5 xl:gap-10 justify-center ">
                    <Link to="/programming">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        className=" rounded-4xl xl:border-3 border-white xl:p-2"
                      >
                        <div
                          className="w-30 h-30 xl:w-80 xl:h-60 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/programming.jpg)] bg-cover"
                        >
                          <div className="h-10 w-full bg-white/50 flex justify-center items-center">
                            Programming
                          </div>
                        </div>
                      </motion.div>
                    </Link>

                    {/* websites page */}
                    <Link to="/websites">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        className=" rounded-4xl xl:border-3  border-white xl:p-2"
                      >
                        <div
                          className="w-30 h-30 xl:w-80 xl:h-60 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/website.jpg)] bg-cover"
                        >
                          <div className="h-10 w-full bg-black/50 flex justify-center items-center">
                            Websites
                          </div>
                        </div>
                      </motion.div>
                    </Link>

                    {/* 3D Design */}
                    <Link to="/3ddesign">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        className=" rounded-4xl xl:border-3  border-white xl:p-2"
                      >
                        <div
                          className="w-30 h-30 xl:w-80 xl:h-60 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/blender.jpg)] bg-cover"
                        >
                          <div className=" h-10 w-full bg-black/50 flex justify-center items-center">
                            3D Design
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>

                  {/* second row */}
                  <div className="flex gap-10 justify-center">
                    {/* about me page */}
                    <Link to="/aboutme">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        className=" rounded-4xl xl:border-3  border-white xl:p-2"
                      >
                        <div
                          className="w-40 h-30 xl:w-80 xl:h-60 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/kota.jpg)] bg-cover"
                        >
                          <div className="h-10 w-full bg-white/50 flex justify-center items-center">
                            About me
                          </div>
                        </div>
                      </motion.div>
                    </Link>

                    {/* contact page */}
                    <Link to="/contact">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        className=" rounded-4xl xl:border-3  border-white xl:p-2"
                      >
                        <div
                          className="w-40 h-30 xl:w-80 xl:h-60 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/contact.jpg)] bg-cover"
                        >
                          <div className="h-10 w-full bg-white/50 flex justify-center items-center">
                            Contact
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
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

export default Home;
