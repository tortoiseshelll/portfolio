import React from "react";
import Stickers from "../../../components/Stickers";
import TopBar from "../../../components/TopBar";
import LeftSide from "../../../components/LeftSide";

const TodoNotesPage = () => {
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
            <div className="fixed h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover"></div>
            <div className="absolute right-0  w-full  lg:w-3/5 xl:w-4/6 2xl:w-3/4 ">
              {/* buttons / boxes */}
              <div
                className="relative mt-5 lg:m-20 lg:mb-10 mx-auto  
                   p-10 lg:text-2xl bg-amber-200/30 text-slate-600
                 flex flex-wrap justify-center gap-10 rounded-4xl "
              >
                <div className="font-light text-xs md:base 2xl:text-xl flex flex-col gap-10">
                  <div className="relative">
                    <h1 className="text-4xl font-bold">ToDo Cat Notes</h1>
                    <h2 className="relative ">Electron App</h2>
                  </div>
                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      This lightweight Electron desktop app is designed for
                      maximum convenience and productivity. It features a
                      semi-transparent interface that always stays on top of
                      other windows, allowing users to take notes or manage
                      tasks without constantly switching between applications.
                      The subtle transparency ensures it doesn’t block the view
                      behind it, making multitasking seamless.
                    </p>
                    <img
                      src="./src/assets/programming/todonotes/todo1.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed self-end"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-5">
                    <p className=" mx-20">
                      Additionally, the app includes seven unique background
                      themes, allowing users to personalize the interface to
                      match their mood or workspace aesthetic.
                    </p>
                    <img
                      src="./src/assets/programming/todonotes/todo2.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <p className="">The app offers three main sections:</p>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5 mx-20  "
                  >
                    <p className="">
                      1. The first page lets users easily add and delete tasks.
                      The clean and minimal design keeps focus the current
                      tasks. When a task is completed, clicking on it marks it
                      as done. The task then automatically moves to the "Done"
                      page.
                    </p>
                    <img
                      src="./src/assets/programming/todonotes/todo3.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5 mx-20"
                  >
                    <img
                      src="./src/assets/programming/todonotes/todo4.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                    <p>
                      2. The second page displays all completed tasks, which
                      appear crossed out for clarity. This provides a quick
                      overview of the progress and helps track achievements
                      without cluttering the active task list.
                    </p>
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5  mx-20"
                  >
                    <p>
                      3. The final section allows users to write and save quick
                      notes. Thanks to the always-on-top feature and
                      semi-transparent layout, users can conveniently write down
                      information while keeping other apps visible in the
                      background, which is perfect for research, meetings, or
                      brainstorming.
                    </p>
                    <img
                      src="./src/assets/programming/todonotes/todo5.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
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

export default TodoNotesPage;
