import {
    example,
    bathroom,
    carpentry,
    electrical,
    flooring,
    kitchen,
    painting,
    plumbing,
    renovationsOne,
    renovationsTwo,
    renovationsThree,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "services",
        title: "Services",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        name: "Painting",
        description:
            "Elevate your home's aesthetic with our premier painting services. Our skilled artisans bring walls to life, blending precision and creativity to transform spaces. From meticulous preparation to flawless finishes, we ensure your vision is realized. Trust us for a splash of color that defines style and sophistication in every brushstroke.",

        image: painting,
    },
    {
        name: "Plumbing",
        description:
            "Experience seamless plumbing solutions tailored to your needs. Our expert plumbers deliver reliable, efficient, and timely services. From minor repairs to major installations, we ensure your plumbing works flawlessly. Trust us for top-notch craftsmanship and unparalleled expertise. Your satisfaction is our priority – plumbing excellence at its finest.",
        image: plumbing,
    },
    {
        name: "Electrical",
        description:
            "Illuminate your space with our trusted electrical services. Our skilled electricians provide efficient solutions, from wiring and installations to repairs and upgrades. Safety is paramount, and we guarantee quality workmanship. Choose us for reliable services that light up your home or business. Empower your space with our electrical expertise.",
        image: electrical,
    },
    {
        name: "Renovations",
        description:
            "Revitalize your home with our premier renovation services. Transform spaces with innovative designs and impeccable craftsmanship. From concept to completion, we tailor solutions to your unique style. Elevate living with our seamless and efficient renovation process. Experience the art of transformation with our expert team, delivering excellence at every step.",
        image: renovationsOne,
    },
    {
        name: "Kitchen",
        description:
            "Unleash the potential of your kitchen with our exceptional renovation services. Elevate functionality and aesthetics with innovative designs tailored to your culinary dreams. Our expert team transforms spaces into culinary havens, blending style and practicality. Trust us to create a kitchen that reflects your taste and enhances your culinary experience.",
        image: kitchen,
    },
    {
        name: "Flooring",
        description:
            "Step into luxury with our flooring services. Elevate your space with exquisite flooring solutions tailored to your style. From hardwood to tile, our expert team ensures precision installation and flawless finishes. Unleash the beauty beneath your feet – redefine your space with our premium flooring services.",
        image: flooring,
    },
    {
        name: "Bathroom",
        description:
            "Revitalize your sanctuary with our expert bathroom renovation services. Transform your space into a spa-like retreat with innovative designs and meticulous craftsmanship. From concept to completion, we bring your vision to life, ensuring every detail reflects your style. Elevate your daily routine with our seamless and rejuvenating bathroom transformations.",
        image: bathroom,
    },
];

const mockItems = [
    {
        id: "item-1",
        title: "slide 1",
        photo: renovationsOne,
    },
    {
        id: "item-2",
        title: "slide 2",
        photo: renovationsTwo,
    },
    {
        id: "item-3",
        title: "slide 3",
        photo: renovationsThree,
    },
];

export { services, mockItems };
