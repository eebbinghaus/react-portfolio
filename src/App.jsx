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
        <div className=" w-full l:h-screen overflow-hidden  bg-cover bg-[url('./assets/bgGrey.png')] ">
            <Router>
                <div className="">
                    <div>
                        <Navbar />
                        <Routes>
                            <Route
                                exact
                                path="/react-portfolio"
                                element={<Home />}
                            />
                            <Route
                                exact
                                path="react-portfolio/about"
                                element={<About />}
                            />
                            <Route
                                exact
                                path="react-portfolio/portfolio"
                                element={<Portfolio />}
                            />
                            <Route
                                exact
                                path="react-portfolio/contact"
                                element={<Contact />}
                            />
                            <Route
                                exact
                                path="react-portfolio/resume"
                                element={<Resume />}
                            />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
