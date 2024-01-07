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
