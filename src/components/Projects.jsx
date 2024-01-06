import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useSpringCarousel } from "react-spring-carousel";
import { mockItems } from "../constants";

const ProjectsCard = () => {
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);

    const {
        carouselFragment,
        useListenToCustomEvent,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
    } = useSpringCarousel({
        itemsPerSlide: 3, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: "center", // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid aspect-[2] w-full place-items-center text-2xl text-white transition-all duration-700 ${
                            currentSlide === item.id
                                ? "z-10 scale-150 bg-yellow-600"
                                : "bg-violet-500"
                        }`}
                    >
                        <img src={item.photo} />
                    </div>
                ),
            };
        }),
    });

    useListenToCustomEvent((event) => {
        if (event.eventName === "onSlideStartChange") {
            setCurrentSlide(event?.nextItem?.id);
        }
    });
    return (
        <div className="py-20 relative background-orange-gradient">
            <button
                onClick={slideToPrevItem}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[10%]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <div className="mx-auto w-[80%] overflow-x-clip py-[4%] relative">
                {carouselFragment}
            </div>
            <button
                onClick={slideToNextItem}
                className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[10%]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="flex">
            <motion.div variants={textVariant()}>
                <div className="flex flex-col justify-start p-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
                    <div className="w-1 sm:h-80 h-40 orange-gradient" />
                </div>
            </motion.div>
            <div>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Real work</p>
                    <h2 className={styles.sectionHeadText}>Projects.</h2>
                </motion.div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quasi deserunt, earum nemo dolorum sint voluptas modi
                    adipisci itaque cum! Mollitia optio itaque magni at sapiente
                    a odit expedita vero molestiae doloribus fugit debitis,
                    dolor perferendis assumenda ullam facere consequuntur ea
                    dignissimos voluptate dolore! Eius repellat vitae deserunt!
                    Quam nemo quis eum culpa, quidem cupiditate ratione! Fuga
                    qui odio, beatae ad commodi placeat sapiente fugit dolorem
                    necessitatibus pariatur reiciendis distinctio magni eaque
                    debitis tempore vero temporibus eveniet tempora! Beatae
                    totam sint voluptatum, libero odio hic minima assumenda
                    placeat cumque nisi in, corrupti quis nihil non temporibus
                    accusamus rerum enim necessitatibus ut.
                </motion.p>
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");
