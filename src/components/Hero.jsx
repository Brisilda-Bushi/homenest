import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
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
        <section className="relative w-full h-screen mx-auto backdrop-filter backdrop-blur-sm backdrop-brightness-50">
            <div
                className={`${styles.paddingX} absolute inset-0  top-[120px] max-w-7x1 mx-auto flex flex-row justify-center items-center gap-5`}
            >
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        This is
                        <span className="text-[#C56E33]"> HomeNest</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Elevate, Innovate, Transform: Your Vision, Our
                        Craftsmanship.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
