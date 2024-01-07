import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
    About,
    Contact,
    Hero,
    Navbar,
    Projects,
    Carousel,
    Services,
} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-tertiary">
                <Navbar />
                <div className="bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-center ">
                    <Hero />
                </div>
                <About />
                <Services />
                <div className="background-orange-gradient">
                    <Projects />
                    <Carousel />
                    <Contact />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
