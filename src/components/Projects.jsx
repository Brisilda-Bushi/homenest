import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Projects = () => {
    return (
        <div className="flex">
            <motion.div variants={textVariant()}>
                <div className="flex flex-col justify-start p-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-white" />
                    <div className="w-1 sm:h-80 h-40 white-gradient" />
                </div>
            </motion.div>
            <div>
                <motion.div variants={textVariant()}>
                    <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
                        Real work
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Projects.
                    </h2>
                </motion.div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
                >
                    Embark on a journey of tangible transformations through our
                    real-life projects. Witness the magic of our carpentry
                    services as custom-made furniture graces homes. Experience
                    the allure of our flooring solutions, where each step echoes
                    luxury and style. Our plumbing experts ensure seamless
                    functionality, while our electrical services light up spaces
                    with precision. Explore the vibrancy of our painting
                    services, adding personality to walls. Kitchen renovations
                    redefine culinary spaces, and bathroom transformations
                    create spa-like retreats. With every project, we merge
                    innovation, craftsmanship, and client vision, delivering
                    real-life beauty that transcends expectations. Your dream
                    home awaits, brought to life by our skilled hands.
                </motion.p>
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");
