import BackendBar from "../components/skills/BackendBar";
import FrontendBar from "../components/skills/FrontendBar";
import SkillContent from "../components/skills/SkillContent";
import { PAGETITLES } from "../enum";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../assets/styles/App.module.css";
import classes from "../assets/styles/Skills.module.css";
import { useEffect } from "react";

const Skills = () => {
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
        {PAGETITLES.PAGE_SKILLS}
      </h2>
      <SkillContent />
      <div className={classes.skillsMainWrapper}>
        <FrontendBar />
        <BackendBar />
      </div>
    </div>
  );
};

export default Skills;
