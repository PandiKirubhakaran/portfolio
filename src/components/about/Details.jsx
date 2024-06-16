import { ABOUTTITLES } from '../../enum';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classes from '../../assets/styles/About.module.css'
import { useEffect } from 'react';

const Details = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div >
      <h2 className={classes.aboutPara}   data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">{ABOUTTITLES.ABOUT_PARA_1}</h2>
      <h2 className={classes.aboutPara}   data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">{ABOUTTITLES.ABOUT_PARA_2}</h2>
      <h2 className={classes.aboutPara}   data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">{ABOUTTITLES.ABOUT_PARA_3}</h2>
    </div>
  );
};

export default Details;
