import React from "react";
import { motion } from "framer-motion";

const ThirdPage = ({ targetRef }) => {
  return (
    <section className="relative min-h-full md:min-h-screen">
      <div
        ref={targetRef}
        className="absolute inset-0 bg-[url('portfolio/assets/bg2.png')] bg-contain rotate-180 "
      >
        <div className="absolute h-full w-screen bg-slate-800/50"></div>
      </div>

      <div
        className="absolute hidden md:flex justify-center pt-16
       left-20 lg:left-40 xl:left-72 z-20"
      >
        <div className="">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: -5,
              transition: {
                duration: 2,
                type: "spring",
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            className="relative left-5 top-2 lg:-left-20 lg:-top-20 w-44
            lg:w-60 xl:w-80 border border-black"
          >
            <img
              src="portfolio\src\assets\programming\chattingapp\pfpchange.gif"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: 5,
              transition: {
                duration: 2,
                type: "spring",
              },
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            className="relative left-5 lg:left-0 lg:-top-24 w-44
            lg:w-60 xl:w-80 border border-black"
          >
            <img
              src="portfolio\src\assets\programming\chattingapp\1.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: -5,
              transition: {
                duration: 2,
                type: "spring",
              },
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            className="relative left-5 z-10 -top-2 lg:-left-20 lg:-top-24 w-44
            lg:w-60 xl:w-80 border border-black"
          >
            <img
              src="portfolio\assets\programming\chattingapp\messages.gif"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <div className="relative flex justify-center pt-16 lg:pt-0 left-10 lg:left-20">
        <div
          className="relative top-10 border
         border-black"
        >
          <img
            src="portfolio\src\assets\programming\chattingapp\overview.gif"
            alt=""
          />
        </div>
      </div>

      <div className="relative lg:flex-1 lg:ml-auto lg:mr-auto xl:w-4/5 px-10 lg:px-20">
        <div
          className="relative flex flex-col justify-center 
      md:w-4/5 mx-auto"
        >
          <div className="md:ml-36 md:mt-5 lg:ml-10 z-30">
            <p className="text-3xl lg:text-5xl font-bold text-zinc-200">
              NotDiskord
            </p>

            <p className="text-xl lg:text-2xl pt-2 text-zinc-200 font-bold italic">
              Chatting App
            </p>
          </div>

          <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10 mb-10">
            This Mern stack chat app was created using React.js, Vite, Node.js,
            Socket.io, TailwindCSS, and DaisyUI. The authentication and
            authorization was dealed with JWT, and Zustand was employed for
            global state management. The app has various functions, like
            updating a profile picture, sending real-time messages and pictures
            utilised by Socket.io.
          </p>
        </div>

        {/* <div
          className="relative md:flex-row md:gap-10 flex flex-col justify-center 
        mt-10 md:w-4/5 mx-auto mb-10"
        >
          <div className="relative flex flex-col">
            <div
              className="carousel h-60 md:w-3/4 md:h-52 lg:w-1/2 lg:h-72 
        border-black border "
            >
              <div id="item1" className="carousel-item w-full">
                <img
                  src="src\assets\programming\chattingapp\1.png"
                  className="w-full"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img
                  src="src\assets\programming\chattingapp\options.gif"
                  className="w-full"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img
                  src="src\assets\programming\chattingapp\removefriend.gif"
                  className="w-full"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img
                  src="src\assets\programming\chattingapp\overview.gif"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-start w-60 md:w-72 lg:w-96 gap-4 py-3">
              <input
                type="radio"
                name="radio1"
                className="appearance-none w-4 h-4 cursor-pointer rounded-none bg-slate-500/40 checked:bg-amber-200"
                onClick={() =>
                  document.getElementById("item1")?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  })
                }
                defaultChecked
              />
              <input
                type="radio"
                name="radio1"
                className="appearance-none w-4 h-4 cursor-pointer rounded-none bg-slate-500/40 checked:bg-amber-200"
                onClick={() =>
                  document.getElementById("item2")?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  })
                }
              />
              <input
                type="radio"
                name="radio1"
                className="appearance-none w-4 h-4 cursor-pointer rounded-none bg-slate-500/40 checked:bg-amber-200"
                onClick={() =>
                  document.getElementById("item3")?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  })
                }
              />
              <input
                type="radio"
                name="radio1"
                className="appearance-none w-4 h-4 cursor-pointer rounded-none bg-slate-500/40 checked:bg-amber-200"
                onClick={() =>
                  document.getElementById("item4")?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  })
                }
              />
            </div>
          </div>
        </div> */}

        <div className="flex flex-col gap-10">
          <div
            className="relative flex  justify-center 
      md:w-4/5 mx-auto gap-10 items-center"
          >
            <div className="bg-cover ">
              <img
                className="border border-black
          rounded-xl"
                src="portfolio/src/assets/programming/chattingapp/online.gif"
                alt=""
              />
            </div>

            <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
              The Online function allows users to see whether other users are
              online or offline, which updates accordingly:
            </p>
          </div>

          <div
            className="relative flex  justify-center 
      md:w-4/5 mx-auto gap-10 items-center"
          >
            <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
              The search function allows the users to search and add a new
              friend. The username must be the exact one of the user otherwise
              the message will be shown with no user found!
            </p>
            <div className="bg-cover ">
              <img
                className="border border-black
          rounded-xl"
                src="portfolio/src/assets/programming/chattingapp/search.gif"
                alt=""
              />
            </div>
          </div>

          <div
            className="relative flex  justify-center 
      md:w-4/5 mx-auto gap-10 items-center"
          >
            <div className="bg-cover ">
              <img
                className="border border-black
          rounded-xl"
                src="portfolio/src/assets/programming/chattingapp/requests.gif"
                alt=""
              />
            </div>
            <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
              Users are able to send friend requests to each other, where they
              can either accept or refuse the friend request:
            </p>
          </div>

          <div
            className="relative flex  justify-center 
      md:w-4/5 mx-auto gap-10 items-center"
          >
            <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
              If a user wants to delete someone from their friendlist, there is
              a function that lets the user to remove friend without them
              knowing:
            </p>
            <div className="bg-cover ">
              <img
                className="border border-black
          rounded-xl"
                src="portfolio/src/assets/programming/chattingapp/removefriend.gif"
                alt=""
              />
            </div>
          </div>

          <div
            className="relative flex  justify-center 
      md:w-4/5 mx-auto gap-10 items-center"
          >
            <div className="bg-cover ">
              <img
                className="border border-black
          rounded-xl"
                src="portfolio/src/assets/programming/chattingapp/pfpchange.gif"
                alt=""
              />
            </div>
            <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
              There is an advanced profile picture change, which lets the user
              to zoom in or center the picture:
            </p>
          </div>

          <div
            className="relative flex  justify-center 
      md:w-4/5 mx-auto gap-10 items-center"
          >
            <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
              Additionally, there are many different themes the users can change
              to match their preferences.
            </p>
            <div className="bg-cover ">
              <img
                className="border border-black
          rounded-xl"
                src="portfolio/src/assets/programming/chattingapp/options.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
