import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Jr. Software Engineer',
        company: 'Cognizant Technology Solutions',
        date: '12/2021 - 04/2024',
        details: [
            'Developed an insurance application using React, responsible for front-end development to enable customers to generate, calculate, and purchase vehicle insurance.',

            'Migrated the codebase from vanilla JavaScript to Next.js, reducing code size by 80% through reusable custom components and improving overall performance.',

            'Collaborated with cross-functional teams to implement feature releases for an internal employee application, utilizing React.js, JavaScript, HTML, and CSS.',
             
            'Optimized the single-page application by implementing debouncing and code-splitting techniques, reducing load times by 70%.',
            
            'Conducted code reviews, debugging, and requirement analysis while assisting in technical documentation to ensure high code quality, maintainability, performance, and alignment with business objectives.'
        ]
    },
    {
        title: 'Consultant (Web Developer)',
        company: 'Freelance',
        date: '04/2024 - Present',
        details: [
            'Developed responsive, high-performance UIs for various clients.',
            'Designed and developed web components using React.js, JavaScript, Tailwind CSS, Git, GitHub, Motion, GSAP, Clerk.',
            'Curated technical content around computer science & web development.'
        ]
    }
];

const Resume = () => {
    return (
        <div className="p-4 min-h-full m-auto mb-14 dark:bg-zinc-800/40 rounded-xl shadow-lg backdrop-blur-2xl dark:text-white text-black">
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index} 
                    className="p-6 border-b border-gray-300 w-[80vw] mx-auto last:border-none"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-lg font-medium dark:text-cyan-400 text-gray-700">{exp.company}</p>
                    <p className="text-md italic text-rose-800">{exp.date}</p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-xs">
                        {exp.details && exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                </motion.div>
            ))}
        {/*             <motion.button 
                className="block mx-auto mt-12 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Download Resume
            </motion.button> */}
        </div>
    );
};

export default Resume;
