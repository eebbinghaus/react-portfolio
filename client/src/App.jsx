import {
  Navbar,
  About,
  Contact,
  Footer,
  Portfolio,
  Resume,
  Home,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Router>
        <div className="">
          <div>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
          </div>
        </div>

        {/* <div className="bg-primary flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <About />
          </div>
        </div>

        <div>
          <Resume />
        </div> */}
      </Router>
    </div>
  );
}

export default App;
