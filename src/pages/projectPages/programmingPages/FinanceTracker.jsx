import React from "react";
import Stickers from "../../../components/Stickers";
import TopBar from "../../../components/TopBar";
import LeftSide from "../../../components/LeftSide";

const FinanceTracker = () => {
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
                <div className="font-light text-xs md:base 2xl:text-xl mx-20 flex flex-col gap-10">
                  <div className="relative -mx-20">
                    <h1 className="text-4xl font-bold">Finance Tracker</h1>
                    <h2 className="relative ">Python App</h2>
                  </div>
                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <p className="">
                      This python app is designed for tracking the user's
                      budget. It is not complete yet as it's still in the
                      development. It's made using PyQt6. It features a
                      well-thought interface that allows the user to quickly see
                      each function on dashboard page.
                    </p>
                    <img
                      src="./src/assets/programming/financetracker/version_2.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed self-end"
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5 mx-20  "
                  >
                    <p className="">
                      When starting the app, theres a small and fast starter
                      window popping up increasing the percentage number,
                      indicating the main window is about to show up.
                    </p>
                    <img
                      src="./src/assets/programming/financetracker/7.png"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-5">
                    <p className="">
                      Additionally, the app includes different background
                      themes, allowing users to personalize the interface to
                      match their mood or workspace aesthetic.
                    </p>
                    <img
                      src="./src/assets/programming/financetracker/3.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5"
                  >
                    <p className="">
                      The second and third page lets users easily add and delete
                      expenses or incomes. The clean and minimal design keeps
                      focus on each expense or income added.
                    </p>
                    <img
                      src="./src/assets/programming/financetracker/4.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5  "
                  >
                    <img
                      src="./src/assets/programming/financetracker/5.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col 2xl:flex-row justify-center 
                  items-center gap-5 mx-20  "
                  >
                    <p className="">
                      When the user clicks on the "Add new" function, it
                      displays a new window where the user can choose each
                      option like date or value, then click confirm and it
                      populates the table with the new expense or income.
                    </p>
                    <img
                      src="./src/assets/programming/financetracker/6.jpg"
                      alt=""
                      className="rounded-3xl border-2 border-dashed "
                    />
                  </div>

                  <div
                    className="relative flex flex-col justify-center 
                  items-center gap-5 "
                  >
                    <p>
                      The next pages "Chart" and "Goals", are not yet
                      implemented but they will feature the statistics and
                      long/short term goals added by user. Please note the app
                      is still in development but as soon as it's done I will
                      update this page!
                    </p>
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

export default FinanceTracker;
