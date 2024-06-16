import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FrameImg from "../components/about/FrameImg";
import styles from "../assets/styles/App.module.css";
import Details from "../components/about/Details";
import { PAGETITLES } from "../enum";

const About = () => {
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
        {PAGETITLES.PAGE_ABOUT}
      </h2>
      <div data-aos="zoom-in-up">
        <FrameImg />
      </div>
      <div data-aos="zoom-in-up">
        <Details />
      </div>
    </div>
  );
};

export default About;
