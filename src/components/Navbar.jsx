import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="flex justify-self-center items-center absolute">
                        <img
                            src={logo}
                            alt="logo"
                            className="size-24 object-contain pt-5"
                        />
                        <p className="text-white text-[18px] font-montserrat pl-5 font-bold cursor-pointer flex">
                            HomeNest
                        </p>
                    </div>
                </Link>
                <ul className="list-none hidden lg:flex flex-row gap-10">
                    <Link
                        key="home"
                        className={`${
                            active === "" ? "text-white" : "text-secondary"
                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <p className="font-montserrat">Home</p>
                    </Link>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a className="font-montserrat" href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            <Link
                                key="home"
                                className={`${
                                    active === ""
                                        ? "text-white"
                                        : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => {
                                    setActive("");
                                    window.scrollTo(0, 0);
                                    setToggle(!toggle);
                                }}
                            >
                                <p className="font-montserrat">Home</p>
                            </Link>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${
                                        active === nav.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a
                                        className="font-montserrat"
                                        href={`#${nav.id}`}
                                    >
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
