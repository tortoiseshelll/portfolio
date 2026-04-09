import { motion } from "framer-motion";
import React from "react";

const FifthPage = ({ targetRef }) => {
  return (
    <section className="relative min-h-full md:min-h-screen lg:pt-80">
      <div
        ref={targetRef}
        className="absolute inset-0 bg-[url('./assets/bg2.png')] bg-contain rotate-180 "
      >
        <div className="absolute h-full w-screen bg-slate-800/50"></div>
      </div>

      <div className="relative flex justify-center pt-16 lg:pt-0 left-10 lg:left-20">
        <div
          className="relative top-10 w-96 lg:w-2/5 border
            border-white"
        >
          <img src=".\assets\windows98\1.png" alt="" />
        </div>
      </div>

      <div className="relative justify-center lg:flex-1 lg:ml-auto lg:mr-auto xl:w-4/5 mx-5 px-10 lg:px-20">
        <div
          className="relative flex flex-col justify-center
         md:w-4/5 mx-auto"
        >
          <div className="mt-8 md:ml-36 md:mt-10 lg:ml-10 z-30">
            <p className="text-3xl lg:text-5xl font-bold text-zinc-200">
              Windows98
            </p>

            <p className="text-xl lg:text-2xl pt-2 text-zinc-200 font-bold lg:ml-2 italic">
              Simulator Website
            </p>
          </div>

          <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10">
            This simulator website was based on Windows 98 design. It was
            created as the very first web project to understand the basic
            fundamentals of HTML CSS and JavaScript. The website uses no
            frameworks, as it was mainly to challenge my abilities. This website
            features Windows 98 Desktop, along with selection tool notes app,
            internet explorer, files, and task bar.
          </p>
        </div>

        <div className="">
          <div
            className="relative flex flex-col lg:flex-row lg:gap-10 justify-center
         md:w-4/5 mx-auto"
          >
            <div className="mt-8 md:mt-5 z-30">
              <img
                className="border border-white"
                src=".\assets\windows98\2.png"
                alt=""
              />
            </div>

            <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10 self-center xl:w-1/2">
              The website includes different apps such as notes app or file
              folder, both functional and designed carefully.
            </p>
          </div>

          <div
            className="relative flex flex-col lg:flex-row lg:gap-10 justify-center
         md:w-4/5 mx-auto md:mt-10"
          >
            <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10 self-center xl:w-1/2">
              Each individual window can be opened and closed with a close
              button or minimise button. The windows also can be dragged across
              the screen to work exactly like the real applications.
            </p>

            <div className="mt-8 md:mt-5 z-30">
              <img
                className="border border-white"
                src=".\assets\windows98\3.png"
                alt=""
              />
            </div>
          </div>

          <div
            className="relative flex flex-row gap-10 justify-center
         md:w-4/5 mx-auto mt-10"
          >
            <div className="mt-8 md:mt-5 z-30">
              <img
                className="border border-white"
                src=".\assets\windows98\4.png"
                alt=""
              />
            </div>

            <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10 self-center w-1/2">
              This selection tool was an additional feature added, that can be
              easily missed. This selection area is dynamic which means it
              changes sizes with the cursor being dragged on any desktop
              position. When the user drags it upon the files on the desktop,
              they get highlighted in dark blue colour, making it identical to
              the old Windows' feature.
            </p>
          </div>

          <div className="relative flex-1 justify-center md:w-4/5 mx-auto md:mt-10">
            <div className="flex justify-center mt-8 z-30">
              <img
                className="border border-white"
                src=".\assets\windows98\5.png"
                alt=""
              />
            </div>

            <p className="text-md lg:text-lg pt-5 leading-9 lg:leading-10 self-center ">
              This menu bar was styled based on Windows' 86 design, which is a
              bit simplified. The tabs are buttons which upon clicking on a tab,
              the focus changes depending on the desired tab clicked. Upon
              clicking a different tab, the corresponding page appears on
              desktop. The user can close or minimise the window so it appears
              or disappears from the menu bar. It's working exactly how it does
              on any Windows.
            </p>
          </div>

          <div
            className="relative flex flex-col lg:gap-5 justify-center
         md:w-4/5 mx-auto mt-10"
          >
            <div className="flex justify-center z-30 ">
              <img
                className="border border-white"
                src=".\assets\windows98\6.png"
                alt=""
              />
            </div>

            <p className="text-md lg:text-lg leading-9 lg:leading-10 self-center">
              The website utilises a dynamic function of time that changes based
              on user's local time. The design is simplified to make it feel
              like old Windows' design without overcomplicating it for the user
              experience. It lets the users focus on different parts of the
              website more as this is not the main feature of this website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthPage;
