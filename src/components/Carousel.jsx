import React, { useState } from "react";
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
                                ? "z-10 scale-150 bg-transparent"
                                : "bg-transparent"
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
        <div className="py-20 relative">
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

const Carousel = () => {
    return (
        <div className="flex">
            <div className="mt-20">
                <ProjectsCard />
            </div>
        </div>
    );
};

export default Carousel;
