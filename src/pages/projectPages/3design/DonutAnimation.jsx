import React from "react";
import Stickers from "../../../components/Stickers";
import TopBar from "../../../components/TopBar";
import LeftSide from "../../../components/LeftSide";

const DonutAnimation = () => {
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
                    <h1 className="text-4xl font-bold">Donut Animation</h1>
                    <h2 className="relative ">Blender</h2>
                  </div>
                  <div
                    className="relative flex flex-col xl:flex-row justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      They say the first thing you code is "Hello World". For
                      blender, they say the first thing you learn is making
                      Donuts! This scene was created using Blender and Polygon
                      assets.
                    </p>
                    <img
                      src="./src/assets/blender/donut.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed self-end"
                    />
                  </div>

                  <div
                    className="relative flex  justify-center
                  items-center gap-5  "
                  >
                    <img
                      src="./src/assets/blender/donut1.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed self-end"
                    />{" "}
                    <img
                      src="./src/assets/blender/donut2.jpg"
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

export default DonutAnimation;
