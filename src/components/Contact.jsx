import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { logoNoBack, logoBB } from "../assets";
import {
    serviceEmail,
    templateEmail,
    personalEmail,
    keyEmail,
} from "../../config";
import { toast } from "react-toastify";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                serviceEmail,
                templateEmail,
                {
                    from_name: form.name,
                    to_name: "Brisilda",
                    from_email: form.email,
                    to_email: personalEmail,
                    message: form.message,
                },
                keyEmail,
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success(
                        "Thank you, I will get back to you as soon as possible!",
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        },
                    );
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error("Something went wrong. Try again later!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                },
            );
    };

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
                        <p>HomeNest Solutions</p>
                        <p>Copyright © 2024</p>
                    </div>
                </div>
                <div className="p-10">
                    <Link
                        to="https://brisildabushi.com/"
                        className="flex justify-center items-center"
                        target="_blank"
                    >
                        <p className="pr-3 text-[#7fdbff]">Developed by BB</p>
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
