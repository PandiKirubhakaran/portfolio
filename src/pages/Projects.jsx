import { useEffect } from "react";
import styles from "../assets/styles/App.module.css";
import { PAGETITLES } from "../enum";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2
        className={styles.heading}
        data-aos="fade-right"
        // data-aos-offset="200"
        // data-aos-easing="ease-in-sine"
      >
        {PAGETITLES.PAGE_PROJECTS}
      </h2>
      <h3 style={{ textAlign: "center", color: "#fff" }}>
        Projects will be displayed soon.
      </h3>
    </div>
  );
};

export default Projects;
