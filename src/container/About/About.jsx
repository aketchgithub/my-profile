import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

function About() {
    const abouts = [
        {
            title: "A Full-Stack Developer",
            description: "Working on disruptive tech innovations that have potential of making society better than it already is.",
            imageUrl: images.code,
        },

        {
            title: "Tech Content Creator",
            description: "Writing blogs and contributing to open source projects.",
            imageUrl: images.blog
        }
    ];

    return (
        <>
            <h2 className="head-text">
            About
            <span> Me!</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title}></img>
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
        
        </>
    );
}

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
);