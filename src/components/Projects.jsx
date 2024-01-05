import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import image from "../assets/herobg.jpg";

const ProjectsCard = () => {
    return (
        <div className="w-full">
            {/* <Swiper
                pagination={{
                    type: "fraction",
                }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={image}
                        alt="dummy image"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image}
                        alt="dummy image"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image}
                        alt="dummy image"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image}
                        alt="dummy image"
                        className="object-cover"
                    />
                </SwiperSlide>
            </Swiper> */}
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

                <div className="mt-20">
                    <ProjectsCard />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");
