import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stickers from "../components/Stickers";
import TopBar from "../components/TopBar";
import LeftSide from "../components/LeftSide";
import PlaceholderButton from "../components/PlaceholderButton";

const ProgrammingPage = () => {
  return (
    <>
      <section className="relative h-screen overflow-x-hidden font-Karla selection:bg-orange-700">
        <div className="lg:flex text-white text-shadow-sm ">
          {/* topbar */}
          <TopBar></TopBar>

          {/* left side */}
          <LeftSide></LeftSide>

          {/* RIGHT SIDE */}
          <div className="h-screen w-screen bg-[url(./assets/bg2.png)]  bg-amber-100">
            <div className="relative h-screen w-screen bg-amber-100  ">
              <div className="fixed h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover"></div>
              <div className="absolute right-0 h-100 w-full lg:h-screen lg:w-3/5 xl:w-4/6 2xl:w-3/4">
                {/* buttons / boxes */}
                <div
                  className="relative lg:top-20 mx-auto h-[50vh] lg:w-[80vh] lg:h-[90vh] xl:w-[110vh] 2xl:w-[140vh]
                   p-10 lg:text-2xl gap-y-26 items-center
                 flex flex-wrap justify-center gap-10 rounded-4xl "
                >
                  {/* finance tracker python */}
                  <Link to="/finance-tracker">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                      }}
                      className=" rounded-4xl xl:border-3 border-white xl:p-2 "
                    >
                      <div
                        className="w-30 h-30 xl:w-80 xl:h-60 justify-center 
                    flex items-center rounded-3xl cursor-pointer-paw
                    bg-[url(src/assets/programming/financetracker/version_2.jpg)] bg-cover"
                      >
                        <div className="h-14 w-full bg-white/50 flex justify-center items-center">
                          <p className="leading-4">
                            Finance Tracker <br />
                            <span className="font-light text-lg">
                              Python App
                            </span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                  {/* todo-notes electron app */}
                  <Link to="/todo-notes">
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
                    bg-[url(src/assets/programming/todonotes/todo1.jpg)] bg-cover"
                      >
                        <div className="h-14 w-full bg-white/50 flex justify-center items-center">
                          <p className="leading-4">
                            ToDo Notes <br />
                            <span className="font-light text-lg">
                              Electron App
                            </span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                  {/* notdiskord chatapp react*/}
                  <Link to="/notdiskord">
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
                    bg-[url(src/assets/programming/chattingapp/1.png)] bg-cover"
                      >
                        <div className="h-14 w-full bg-white/50 flex justify-center items-center">
                          <p className="leading-4">
                            Chatting App <br />
                            <span className="font-light text-lg">
                              React App
                            </span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
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

export default ProgrammingPage;
