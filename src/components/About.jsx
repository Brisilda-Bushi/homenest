import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import image from "../assets/herobg.jpg";

const ServiceCard = () => {
    return (
        <div className="w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
                className="w-full orange-gradient p-[2px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="rounded-[20px] min-h-[280px] overflow-hidden flex justify-evenly items-center flex-col"
                >
                    <img
                        src={image}
                        alt="dummy image"
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </div>
    );
};

const About = () => {
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
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>About.</h2>
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

                <div className="mt-20 flex flex-wrap gap-10">
                    <ServiceCard />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
