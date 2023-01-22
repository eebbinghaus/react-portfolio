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
    <div className="bg-[url('./src/assets/bgGrey.png')] w-full md:h-screen   overflow-hidden bg-no-repeat bg-cover ">
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
      </Router>
    </div>
  );
}

export default App;
