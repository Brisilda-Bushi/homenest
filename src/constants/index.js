import {
    example,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    storybook,
    tailwind,
    nodejs,
    nextjs,
    mongodb,
    git,
    figma,
    aws,
    SKF,
    DCI,
    carrent,
    freebie,
    ig_clone,
    js_portfolio,
    pokemon,
    alpaca,
    e_commerce,
    threejs,
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

const projects = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React/Nextjs Developer",
        icon: mobile,
    },
    {
        title: "React Native Developer",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "NextJs",
        icon: nextjs,
    },
    {
        name: "Storybook",
        icon: storybook,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "SKF",
        icon: SKF,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "UI/UX Designer",
        company_name: "SKF",
        icon: SKF,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Present",
        points: [
            "Collaborate with UI and Branding Team.",
            "Use Figma to create/alter UI components according to our needs.",
            "Create Lo-Fi and Hi-Fi designs, Hi-Fi designs are used for prototypes.",
            "Use Prototypes to perform usability tests with various end user profiles.",
        ],
    },
    {
        title: "Web Developer Tutor",
        company_name: "DCI",
        icon: DCI,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Dec 2021",
        points: [
            "Creating exercises for my fellow learners.",
            "Live coding and explaining challenging concepts.",
            "Plan targeted lessons around questions and project concepts.",
            "Help during the final project, while working on my final project.",
        ],
    },
];

const services = [
    {
        name: "Painting",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",

        image: example,
    },
    {
        name: "Plumbing",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
    {
        name: "Electrical",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
    {
        name: "Carpentry",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
    {
        name: "Renovations",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
    {
        name: "Kitchen",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
    {
        name: "Flooring",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
    {
        name: "Bathroom",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias repellat sit fugit veniam harum voluptatum!Dolorem, laudantium incidunt culpa et quae inventore.",
        image: example,
    },
];

const mockItems = [
    {
        id: "item-1",
        title: "slide 1",
        photo: example,
    },
    {
        id: "item-2",
        title: "slide 2",
        photo: example,
    },
    {
        id: "item-3",
        title: "slide 3",
        photo: example,
    },
];

export { services, technologies, experiences, projects, mockItems };
