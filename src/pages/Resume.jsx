import React from 'react'

const Resume = () => {
  return (
    <motion.div>
    <motion.section className="mb-8" variants={itemVariants}>
    <h2 className="text-2xl font-semibold">Jr. Software Engineer</h2>
    <p><strong>Cognizant Technology Solutions</strong></p>
    <p><strong>12/2021 - 04/2024</strong></p>
    <ul className="list-disc ml-5 space-y-2">
        <motion.li variants={itemVariants}>Worked with various client accounts to design, develop, and maintain web components using JavaScript, React.js, Redux, HTML, and CSS.</motion.li>
        <motion.li variants={itemVariants}>Contributed to the development of Zurich Japan's insurance webpage, enhancing the UI and features to streamline vehicle insurance quotations.</motion.li>
        <motion.li variants={itemVariants}>Contributed to Cognizant's internal web application by developing the seat booking and ID card features, enhancing the UI for easier employee access to the ODC.</motion.li>
        <motion.li variants={itemVariants}>Optimized responsiveness and reduced loading times by an estimated 70%, enhancing application performance and user experience across all platforms.</motion.li>
        <motion.li variants={itemVariants}>Created clean and responsive UI designs, enhancing user engagement and supporting Zurich’s brand standards.</motion.li>
    </ul>
</motion.section>

<motion.section className="mb-8" variants={itemVariants}>
    <h2 className="text-2xl font-semibold">Consultant (Web Developer)</h2>
    <p><strong>Freelance</strong></p>
    <p><strong>04/2024 - Present</strong></p>
    <ul className="list-disc ml-5 space-y-2">
        <motion.li variants={itemVariants}>Developed responsive, high-performance user interfaces with a focus on seamless user experiences across web applications for various clients.</motion.li>
        <motion.li variants={itemVariants}>Designed and developed web components and features using React.js, JavaScript, TailwindCSS, Git, GitHub, Motion, GSAP, and Clerk.</motion.li>
        <motion.li variants={itemVariants}>Worked as a subject matter expert to curate technical content around computer science and web development.</motion.li>
    </ul>
</motion.section>
</motion.div >)
}

export default Resume