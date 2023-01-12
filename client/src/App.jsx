import {
  Navbar,
  About,
  Contact,
  Footer,
  Portfolio,
  Resume,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Router>
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div>

        <div className='bg-primary flex justify-center items-center'>
          <div className="xl:max-w-[1280px] w-full">
            <About />
          </div>
        </div>

      </Router>
    </div>

    
    



    
  );
}

export default App;
