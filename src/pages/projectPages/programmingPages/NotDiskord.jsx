import React from "react";
import Stickers from "../../../components/Stickers";
import TopBar from "../../../components/TopBar";
import LeftSide from "../../../components/LeftSide";

const NotDiskord = () => {
  return (
    <section className="relative h-screen bg-amber-100 overflow-x-hidden font-Karla selection:bg-orange-700">
      <div className="lg:flex text-white text-shadow-sm ">
        {/* topbar */}
        <TopBar></TopBar>

        {/* left side */}
        <LeftSide></LeftSide>

        {/* RIGHT SIDE */}
        <div>
          <div className="relative h-screen w-screen ">
            <div className="fixed h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover"></div>{" "}
            <div className="absolute right-0  w-full  lg:w-3/5 xl:w-4/6 2xl:w-3/4 ">
              {/* buttons / boxes */}
              <div
                className="relative mt-5 lg:m-20 lg:mb-10 mx-auto  
                   p-10 lg:text-2xl bg-amber-200/30 text-slate-600
                 flex flex-wrap justify-center gap-10 rounded-4xl "
              >
                <div className="font-light text-xs mx-20 md:base 2xl:text-xl flex flex-col gap-10">
                  <div className="relative -mx-20">
                    <h1 className="text-4xl font-bold">
                      NotDiskord Chatting App
                    </h1>
                    <h2 className="relative ">React App</h2>
                  </div>
                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      This Mern stack chat app was created using React.js, Vite,
                      Node.js, Socket.io, TailwindCSS, and DaisyUI. The
                      authentication and authorization was dealed with JWT, and
                      Zustand was employed for global state management. The app
                      has various functions, like updating a profile picture,
                      sending real-time messages and pictures utilised by
                      Socket.io:
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/overview.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-5">
                    <img
                      src="./src/assets/programming/chattingapp/messages.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      There is a function to see whether users are online or
                      offline, which updates accordingly:
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/online.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed"
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5  "
                  >
                    <p className="xl:mx-20">
                      The search function allows the users to search and add a
                      new friend. The username must be the exact one of the user
                      otherwise the message will be shown with no user found!
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/search.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed"
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5  "
                  >
                    <p className="xl:mx-20">
                      Users are able to send friend requests to each other,
                      where they can either accept or refuse the friend request:
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/requests.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed"
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      If a user wants to delete someone from their friendlist,
                      there is a function that lets the user to remove friend
                      without them knowing:
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/removefriend.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed 2xl:h-90"
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      There is an advanced profile picture change, which lets
                      the user to zoom in or center the picture:
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/pfpchange.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed 2xl:h-90"
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      There are many different themes the users can change to
                      match their preferences.
                    </p>
                    <img
                      src="./src/assets/programming/chattingapp/options.gif"
                      alt=""
                      className="rounded-3xl border-2 border-dashed 2xl:h-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stickers */}
        <Stickers></Stickers>
      </div>
    </section>
  );
};

export default NotDiskord;
