import { motion } from "framer-motion";

const FourthPage = ({ targetRef }) => {
  return (
    <section className="relative min-h-full md:min-h-screen z-10">
      <div
        ref={targetRef}
        className="absolute inset-0 bg-[url('./assets/bg2.png')] bg-contain rotate-180"
      >
        <div className="absolute h-full w-screen bg-slate-800/50"></div>
      </div>

      <div className="relative lg:mx-40 2xl:mx-80 flex-1 justify-center bg-black/50">
        <div
          className="relative flex justify-center md:justify-end md:right-20 
       xl:top-20 gap-4"
        >
          <div
            className="relative top-20 w-96 lg:w-auto border
         border-black "
          >
            <img src=".\assets\programming/todonotes/todo1.jpg" alt="" />
          </div>
        </div>

        <div className="relative lg:flex-1 lg:ml-auto lg:mr-auto xl:w-4/5 px-10">
          <div
            className="relative flex flex-col justify-center 
       top-24"
          >
            <p className="text-3xl lg:text-5xl font-bold text-zinc-200 lg:ml-10">
              CatNotes App
            </p>

            <p className="text-xl lg:text-2xl pt-2 text-zinc-200 font-bold lg:ml-12 italic">
              Todo and Notes app
            </p>

            <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10">
              This lightweight Electron desktop app is designed for maximum
              convenience and productivity. It features a semi-transparent
              interface that always stays on top of other windows, allowing
              users to take notes or manage tasks without constantly switching
              between applications. The subtle transparency ensures it doesn’t
              block the view behind it, making multitasking seamless.
              <br />
              <div className="relative flex flex-col 2xl:flex-row justify-center mx-auto items-center ">
                <p className="text-md 2xl:w-1/2 mx-auto lg:text-lg pt-5 leading-9 lg:leading-10">
                  Additionally, the app includes seven unique background themes,
                  allowing users to personalize the interface to match their
                  mood or workspace aesthetic.
                </p>

                <div
                  className="w-96 h-60 lg:h-80 bg-cover border border-black
          rounded-xl bg-[url(./assets/programming/todonotes/todo2.jpg)]"
                ></div>
              </div>
            </p>
          </div>

          <div className="relative lg:top-28">
            <div className="relative flex justify-center items-center mt-28 lg:mt-10">
              <div
                className="w-48 h-60 lg:h-80 lg:w-56 bg-cover border border-black
          rounded-xl bg-[url(./assets/programming/todonotes/todo3.jpg)]"
              ></div>

              <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
                1. The first page lets users easily add and delete tasks. The
                clean and minimal design keeps focus the current tasks. When a
                task is completed, clicking on it marks it as done. The task
                then automatically moves to the "Done" page.
              </p>
            </div>

            <div className="flex justify-center items-center mt-5 lg:mt-10">
              <p className="text-sm w-80 lg:w-1/2 mr-5 lg:text-lg pt-5 leading-9 lg:leading-10">
                2. The second page displays all completed tasks, which appear
                crossed out for clarity. This provides a quick overview of the
                progress and helps track achievements without cluttering the
                active task list.
              </p>

              <div
                className="w-48 h-60 lg:h-80 lg:w-56 bg-cover border border-black
          rounded-xl bg-[url(./assets/programming/todonotes/todo4.jpg)]"
              ></div>
            </div>

            <div className="relative flex justify-center items-center mt-5 lg:mt-10 pb-40">
              <div
                className="w-48 h-60 lg:h-80 lg:w-56 bg-cover border border-black
          rounded-xl bg-[url(./assets/programming/todonotes/todo5.jpg)]"
              ></div>

              <p className="text-sm w-80 lg:w-1/2 ml-5 lg:text-lg pt-5 leading-9 lg:leading-10">
                3. The final section allows users to write and save quick notes.
                Thanks to the always-on-top feature and semi-transparent layout,
                users can conveniently write down information while keeping
                other apps visible in the background, which is perfect for
                research, meetings, or brainstorming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthPage;
