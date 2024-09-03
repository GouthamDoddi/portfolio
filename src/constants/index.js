import { meta, shopify, starbucks, tesla, adroitco } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "FULL STACK Software Engineer",
        company_name: "DHENUSYA INFOTECH",
        icon: starbucks,
        iconBg: "#fbc3bc",
        date: "01/2023 TO 8/2024 ",
        points: [
            "Built a marketing tool that creates and carries marketing campaigns across platforms like email, WhatsApp and SMS. Integrated technologies such as TWILIO and SENDGRID.Z",
            "During a critical crunch period, I developed and deployed dashboards and applications for PLUTUS TELERADIOLOGY..",
            "Implemented Test-Driven Development (TDD) lifecycle, resulting in significantly reduced bugs and streamlined development timelines.",
            "I leveraged technologies like React, Redux, Chakra UI, and Material-UI (MUI) to develop dynamic websites using TypeScript, following best practices.",
            "Crated a cross platform native mobile application for Emitrates Tast." 
        ],
    },
    {
        title: "Product Developer",
        company_name: "Apollo Tele Health",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "01/2022 to 01/2023",
        points: [
            "Joined a three-member development team for an ERP software project, leveraging my testing experience from TEENAGERSTARTUPS.COM to identify and address issues such as MISSING MIGRATIONS AND SUB-OPTIMAL CODE QUALITY. ",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Proactively communicated findings to management and advocated for the implementation of guidelines along with a detailed ER DIAGRAM to enhance software quality.",
            "Furthermore, I single handedly developed a comprehensive dashboard showcasing analytics on MANPOWER REQUISITION and COVID-19 VACCINATION statistics.",
            "Created user-friendly on-boarding screens for new users registering to https://rise.hng.co.in/ .",
        ],
    },
    {
        title: "FULL STACK Software Engineer",
        company_name: "ZITISI SOLUTIONS",
        icon: starbucks,
        iconBg: "#a2d2ff",
        date: "11/2020 TO 12/2021 ",
        points: [
            "I single handedly developed a cross-platform mobile app called ShareYourTruck, handling both front-end and back-end responsibilities. ",
            "Engaged in a dynamic development lifecycle, contributing to the creation of a large-scale website for government of Qatar.",
            "Reduced development time by deploying REST APIs using a server-less architecture.",
            "Techstack: REACT NATIVE, REACT, NODEJS, POSTGRESQL, MONGODB ATLAS, REST APIS AND WEBHOOKS.",
        ],
    },
    {
        title: "Software Test Engineer (remote)",
        company_name: "TEENAGERSTARTUPS.COM",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "01/2022 TO 11/2020  ",
        points: [
            "Implemented backend test cases using Django's UNITTEST framework and conducted frontend tests with SELENIUM.",
            "I containerized the application using Docker and Docker Compose, and established CI pipelines in GitLab.",
            "Utilized browser testing tools such as BrowserStack and LambdaTest.",
            "Achieved a total of 90% test coverage.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/GouthamDoddi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/goutham-doddi-22441b138',
    }
];

export const projects = [
    {
        iconUrl: django,
        theme: 'btn-back-red',
        name: 'Blog site',
        description: 'Developed a blog website using Django, it includes rest apis for all blog data using Django Rest. Users can create accounts and write blogs.',
        link: 'https://github.com/GouthamDoddi/blogsitecode',
    },
    {
        iconUrl: django,
        theme: 'btn-back-green',
        name: 'Scalable Rest API Django-Rest',
        description: 'Powerfull recipe maker rest apis created using Django Rest developed following test driven development, testes hosted in Travis.CI ',
        link: 'https://github.com/GouthamDoddi/recipe-app-api',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Share your Truck',
        description: 'Cross Platform React-Native application that connects users with truck-drivers and allows them to trasport their goods. ',
        link: 'https://github.com/GouthamDoddi/SYTscreens',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '3d portfolio',
        description: 'This 3d portfolio website is built using Three.js. Using Three.js we can render 3d models into a react application. ',
        link: 'https://github.com/GouthamDoddi/GouthamDoddi.github.io',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Book reviews application',
        description: "Part of Harward's CS-50 program, this application pulls data from good reads apis and allows users to share book reviews.",
        link: 'https://github.com/GouthamDoddi/CS50-project1',
    },

];
