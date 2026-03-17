import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import WebsitesPage from "./pages/WebsitesPage";
import DModellingPage from "./pages/DModellingPage";
import AboutMePage from "./pages/AboutMePage";
import ProgrammingPage from "./pages/ProgrammingPage";

// projects programming
import TodoNotesPage from "./pages/projectPages/programmingPages/TodoNotesPage";
import FinanceTracker from "./pages/projectPages/programmingPages/FinanceTracker";
import NotDiskord from "./pages/projectPages/programmingPages/NotDiskord";

// projects websites
import Portfolio from "./pages/projectPages/websitePages/Portfolio";
import Windows98 from "./pages/projectPages/websitePages/Windows98";

// projects 3D
import DonutAnimation from "./pages/projectPages/3design/DonutAnimation";
import Donuts from "./pages/projectPages/3design/Donuts";

function App() {
  return (
    <Router>
      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/3ddesign" element={<DModellingPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />

        {/* programming projects */}
        <Route path="/todo-notes" element={<TodoNotesPage />} />
        <Route path="/finance-tracker" element={<FinanceTracker />} />
        <Route path="/notdiskord" element={<NotDiskord />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/windows98" element={<Windows98 />} />

        {/* 3D projects */}
        <Route path="/donut-animation" element={<DonutAnimation />} />
        <Route path="/donuts" element={<Donuts />} />
      </Routes>
    </Router>
  );
}

export default App;
