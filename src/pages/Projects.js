import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import malkom from "../images/malkom.png";
import url from "../images/url shortener.png";
import weather from "../images/Weather App.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Weather Application",
      imageUrl: weather,
    },
    {
      id: 2,
      name: "Malkom",
      imageUrl: malkom,
    },
    {
      id: 3,
      name: "Url Shortener",
      imageUrl: url,
    },
    
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
