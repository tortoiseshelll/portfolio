import React from "react";
import Stickers from "../../../components/Stickers";
import TopBar from "../../../components/TopBar";
import LeftSide from "../../../components/LeftSide";

const Windows98 = () => {
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
            <div className="absolute right-0  w-full  lg:w-3/5 xl:w-4/6 2xl:w-3/4 ">
              <div className="fixed h-screen w-screen bg-[url(./src/assets/bg.png)] bg-cover"></div>
              {/* buttons / boxes */}
              <div
                className="relative mt-5 lg:m-20 lg:mb-10 mx-auto  
                   p-10 lg:text-2xl bg-amber-200/30 text-slate-600
                 flex flex-wrap justify-center gap-10 rounded-4xl "
              >
                <div className="font-light text-xs md:base 2xl:text-xl flex flex-col gap-10">
                  <div className="relative">
                    <h1 className="text-4xl font-bold">Windows98</h1>
                    <h2 className="relative ">Vanilla</h2>
                  </div>
                  <div
                    className="relative flex flex-col xl:mx-20 justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      This simulator website was based on Windows 98 design. It
                      was created as the very first web project to understand
                      the basic fundamentals of HTML CSS and JavaScript. The
                      website uses no frameworks, as it was mainly to challenge
                      my abilities. This website features Windows 98 Desktop,
                      along with selection tool notes app, internet explorer,
                      files, and task bar.
                    </p>
                    <img
                      src="./src/assets/websites/windows98/1.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed self-end"
                    />
                  </div>

                  <div className="flex flex-col justify-center xl:mx-20  items-center gap-5">
                    <p className="">
                      The website includes different applications such as notes
                      app or file folder, both functional and designed
                      carefully.
                    </p>
                    <img
                      src="./src/assets/websites/windows98/2.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col  justify-center 
                  items-center gap-5 xl:mx-20  "
                  >
                    <p className="">
                      Each individual window can be opened and closed with a
                      close button or minimise button. The windows also can be
                      dragged across the screen to work exactly like the real
                      applications.
                    </p>
                    <img
                      src="././src/assets/websites/windows98/3.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5 xl:mx-20"
                  >
                    <img
                      src="./src/assets/websites/windows98/4.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                    <p>
                      This selection tool was an additional feature added, that
                      can be easily missed. This selection area is dynamic which
                      means it changes sizes with the cursor being dragged on
                      any desktop position. When the user drags it upon the
                      files on the desktop, they get highlighted in dark blue
                      colour, making it identical to the old Windows' feature.
                    </p>
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  xl:mx-20"
                  >
                    <p>
                      This menu bar was styled based on Windows' 86 design,
                      which is a bit simplified. The tabs are buttons which upon
                      clicking on a tab, the focus changes depending on the
                      desired tab clicked. Upon clicking a different tab, the
                      corresponding page appears on desktop. The user can close
                      or minimise the window so it appears or disappears from
                      the menu bar. It's working exactly how it does on any
                      Windows.
                    </p>
                    <img
                      src="./src/assets/websites/windows98/5.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5  xl:mx-20"
                  >
                    <p>
                      The website utilises a dynamic function of time that
                      changes based on user's local time. The design is
                      simplified to make it feel like old Windows' design
                      without overcomplicating it for the user experience. It
                      lets the users focus on different parts of the website
                      more as this is not the main feature of this website.
                    </p>
                    <img
                      src="./src/assets/websites/windows98/6.png"
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

export default Windows98;
