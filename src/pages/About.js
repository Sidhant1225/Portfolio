import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            Sidhant is a goal-oriented and determined individual. He wants to succeed in an enviornment of growth and excellence and have job
            experience which provides him job satisfaction and self development and helps him achieve personal as well as organizational goals. 
            </p>
            <p>
            Enthusiastic and ambitious recent graduate with a Bachelor's degree in Computer Science and a specialization in Full Stack Development. Eager to apply the strong foundation in programming languages such as Java, C#, and web technologies including HTML, CSS, and JavaScript to contribute effectively as a Full Stack Developer. Adept at collaborating in team environments, leveraging problem-solving skills to build responsive and user-centric web applications. Committed to continuous learning and excited to bring fresh perspectives to a dynamic development team. 
            </p>
           
            
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;
