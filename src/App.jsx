import { useRef } from "react";
import MainPage from "./components/MainPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";

import FinanceAppPage from "./components/FinanceAppPage";

import Topbtn from "./components/Topbtn";
import ContactBtn from "./components/ContactBtn";

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  return (
    <>
      <section
        className=" overflow-hidden bg-zinc-900 font-serif 
      selection:bg-indigo-800  text-justify"
      >
        <MainPage targetRef={section1Ref} section2Ref={section2Ref} />

        <SecondPage
          targetRef={section2Ref}
          section3Ref={section3Ref}
          section4Ref={section4Ref}
          section5Ref={section5Ref}
          section6Ref={section6Ref}
          section7Ref={section7Ref}
        />

        {/* <FinanceAppPage targetRef={section7Ref} /> */}

        <ThirdPage targetRef={section3Ref} />

        <FourthPage targetRef={section4Ref} />

        <FifthPage targetRef={section5Ref} />

        <SixthPage targetRef={section6Ref} />

        <Topbtn targetRef={section1Ref} />
        <ContactBtn targetRef={section6Ref} />
      </section>

      <footer className="footer sm:footer-horizontal footer-center bg-zinc-900 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </>
  );
}

export default App;
