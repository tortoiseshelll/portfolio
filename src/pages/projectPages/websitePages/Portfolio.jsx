import React from "react";
import Stickers from "../../../components/Stickers";
import TopBar from "../../../components/TopBar";
import LeftSide from "../../../components/LeftSide";

const Portfolio = () => {
  return (
    <section className="relative h-screen bg-amber-100 overflow-x-hidden font-Karla selection:bg-orange-700">
      <div className="lg:flex text-white text-shadow-sm ">
        {/* topbar */}
        <TopBar></TopBar>

        {/* left side */}
        <LeftSide></LeftSide>

        {/* RIGHT SIDE */}
        <div>
          <div className="relative h-screen w-screen">
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
                    <h1 className="text-4xl font-bold">Portfolio</h1>
                    <h2 className="relative ">React + Vite App</h2>
                  </div>
                  <div
                    className="relative flex flex-col xl:mx-20 justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      This portfolio was made using React Vite app along with
                      Tailwind css and Javascript. The moving elements are
                      created with a motion library for pleasant user
                      experience.
                    </p>
                    <img
                      src="./src/assets/websites/portfolio2026/1.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed self-end"
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

export default Portfolio;
