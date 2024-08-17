import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-Commerce App ',
        description: "I designed and developed a comprehensive full-stack web application for 2Expedition. This app leverages a range of technologies to deliver a robust e-commerce platform, including NextJS for the frontend, Strapi as a headless CMS, GraphQL for efficient data querying,  The deployment is managed through Vercel and OnRender, with a focus on a seamless user experience and dynamic, responsive design using React Slick and Material UI.",
        tools: ['NextJS', 'Strapi', "Graphql", "Vercel", "TypeScript","OnRender","React Slick",'Material UI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'User Dashbord App',
        description: 'My team and I developed the User Dashboard Application, Creating User Dashboard chart and User Sing in,Sing Up integrating then UI Desings ',
        tools: ['NextJs', 'TypeScript','React Query','Material UI'],
        role: 'Frontend  Developer ',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'MR22 Cups Web App',
        description: `I designed and developed a comprehensive full-stack web application for 2Expedition. This app leverages a range of technologies to deliver a robust e-commerce platform, including NextJS for the frontend, Strapi as a headless CMS, GraphQL for efficient data querying,  The deployment is managed through Vercel and OnRender, with a focus on a seamless user experience and dynamic, responsive design using Material UI.`,
        tools: ['NextJS', 'Strapi', "Graphql", "Vercel", "TypeScript","OnRender",'Material UI'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Sapzcodes Web App',
        description: `A web application developed by my team utilizing a modern tech stack to deliver a high-performance, visually appealing user experience. The project features dynamic components and smooth interactions, showcasing the team's expertise in building scalable and interactive frontend solutions.`,
        tools: ['NextJs', 'react slick', 'Styled Component', 'TypeScript',"react icons",'Material UI'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Dynamic E-Commerce Template Builder',
        description: " A drag-and-drop web builder that allows users to create and customize e-commerce templates effortlessly. Once a template is designed, it is automatically deployed and made live.Creating a UI Components own package in Node-module and Write Storybook React,Jest Cases include in this seprate Project,This app integrates various technologies to provide a seamless and user-friendly experience for building and managing e-commerce sites.",
        tools: ['NextJS', 'Strapi', 'React slick','Story book','Jest Cases',"Styled Component",'Graphql'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];