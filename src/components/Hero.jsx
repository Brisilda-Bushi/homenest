import React, { useState, useEffect } from "react";
import { styles } from "../styles";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 800px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        return () => {
            mediaQuery.addEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0  top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
                    <div className="w-1 sm:h-80 h-40 orange-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        This is
                        <span className="text-[#C56E33]"> HomeNest</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Bringing you the best renovation solutions,
                        <br className="sm:block hidden" />
                        for your house or apartment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
