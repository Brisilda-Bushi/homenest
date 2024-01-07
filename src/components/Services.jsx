import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, description, image }) => {
    return (
        <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-primary p-5 rounded-2xl sm:w-[350px] w-full h-full"
        >
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="mt-5 ">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
        </Tilt>
    );
};

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        return () => {
            mediaQuery.addEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <div className="flex flex-col">
                    <div className="flex">
                        <div className="flex flex-col justify-start p-3 items-center">
                            <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
                            <div className="w-1 sm:h-80 h-40 orange-gradient" />
                        </div>

                        <div>
                            <p className={styles.sectionSubText}>Our Work</p>
                            <h2 className={styles.sectionHeadText}>
                                Services.
                            </h2>
                            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Alias repellat sit fugit
                                veniam harum voluptatum! Dolorem, laudantium
                                incidunt culpa et quae inventore, assumenda
                                dolores exercitationem reprehenderit accusamus
                                dolor alias possimus provident ipsum maiores?
                                Animi quo totam, voluptas sequi minus soluta!
                                In, soluta eaque? Ad porro delectus autem iure
                                odit tenetur?
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-wrap gap-7">
                        {services.map((project, index) => (
                            <div key={`${project.name}-${index}`} index={index}>
                                <ServiceCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex">
                    <motion.div variants={textVariant()}>
                        <div className="flex flex-col justify-start p-3 items-center">
                            <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
                            <div className="w-1 sm:h-80 h-40 orange-gradient" />
                        </div>
                    </motion.div>
                    <div>
                        <motion.div variants={textVariant()}>
                            <p className={styles.sectionSubText}>Our Work</p>
                            <h2 className={styles.sectionHeadText}>
                                Services.
                            </h2>
                        </motion.div>
                        <motion.p
                            variants={fadeIn("", "", 0.1, 1)}
                            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias repellat sit fugit veniam harum
                            voluptatum! Dolorem, laudantium incidunt culpa et
                            quae inventore, assumenda dolores exercitationem
                            reprehenderit accusamus dolor alias possimus
                            provident ipsum maiores? Animi quo totam, voluptas
                            sequi minus soluta! In, soluta eaque? Ad porro
                            delectus autem iure odit tenetur?
                        </motion.p>
                        <div className="mt-20 flex flex-wrap items-stretch gap-7">
                            {services.map((project, index) => (
                                <div
                                    key={`${project.name}-${index}`}
                                    index={index}
                                >
                                    <motion.div
                                        style={{ height: "100%" }}
                                        variants={fadeIn(
                                            "up",
                                            "spring",
                                            index * 0.5,
                                            0.75,
                                        )}
                                    >
                                        <ServiceCard {...project} />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionWrapper(Services, "services");
