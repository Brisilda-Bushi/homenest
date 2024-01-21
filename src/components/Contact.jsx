import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { logoNoBack, logoBB } from "../assets";

const Contact = () => {
    return (
        <div>
            <div className="xl:mt-12 flex gap-10 overflow-hidden">
                <motion.div variants={textVariant()}>
                    <div className="flex flex-col justify-start p-3 items-center">
                        <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
                        <div className="w-1 sm:h-80 h-40 orange-gradient" />
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="flex-[0.75] p-8 rounded-2xl"
                >
                    <p className={styles.sectionSubText}>Get in touch</p>
                    <h3 className={styles.sectionHeadText}>Contact.</h3>
                    <div className="flex flex-wrap gap-10 m-10">
                        <div>
                            <p className={styles.sectionSubText}>Location</p>
                            <p className="text-primary font-bold text-[20px]">
                                London, UK
                            </p>
                        </div>
                        <div>
                            <p className={styles.sectionSubText}>Phone</p>
                            <p className="text-primary font-bold text-[20px]">
                                315454545314
                            </p>
                        </div>
                        <div>
                            <p className={styles.sectionSubText}>Email</p>
                            <p className="text-primary font-bold text-[20px]">
                                xyz@xyz.com
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex md:justify-between justify-center flex-wrap mt-20">
                <div className="flex justify-center p-10 items-center">
                    <img
                        src={logoNoBack}
                        alt="logo"
                        className="size-24 object-contain"
                    />
                    <div className="pl-5 text-primary">
                        <p className="font-montserrat">HomeNest Solutions</p>
                        <p className="font-montserrat">Copyright © 2024</p>
                    </div>
                </div>
                <div className="p-10">
                    <Link
                        to="https://brisildabushi.com/"
                        className="flex justify-center items-center"
                        target="_blank"
                    >
                        <p className="pr-3 text-black">Developed by BB</p>
                        <img
                            src={logoBB}
                            alt="logo"
                            className="size-16 object-contain"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
