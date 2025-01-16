import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Jr. Software Engineer',
        company: 'Cognizant Technology Solutions',
        date: '12/2021 - 04/2024',
        details: [
            'Worked with various client accounts to design, develop and maintain web components using JavaScript, React.js, Redux, HTML, and CSS.',
            "Contributed to Zurich Japan's insurance webpage, enhancing UI and features to streamline vehicle insurance quotations.",
            "Contributed to Cognizant's internal web app by developing seat booking and ID card features, enhancing the UI.",
            'Optimized responsiveness and reduced loading times by an estimated 70%.',
            'Created clean and responsive UI designs, supporting Zurich’s brand standards.'
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
        <div className="relative p-4 max-w-3xl mx-auto dark:bg-zinc-800/60 bg-white border border-gray-300 rounded-lg shadow-lg backdrop-blur-2xl dark:text-white text-black">
            <h1 className="text-4xl font-bold text-center mb-8">Resume</h1>
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index} 
                    className="p-6 border-b border-gray-300 last:border-none"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-lg font-medium dark:text-cyan-400 text-gray-700">{exp.company}</p>
                    <p className="text-md italic text-rose-400">{exp.date}</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                </motion.div>
            ))}
            <motion.button 
                className="block mx-auto mt-12 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open('https://drive.google.com/file/d/1QX7xsNIeebsIQ0FzzbTL0fOElu3c2xVt/view?usp=sharing')}
            >
                Download Resume
            </motion.button>
        </div>
    );
};

export default Resume;
