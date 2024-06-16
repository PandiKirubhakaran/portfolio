import { SKILLSTITLES } from "../../enum";
import AOS from 'aos';
import 'aos/dist/aos.css';
import classes from '../../assets/styles/Skills.module.css'
import { useEffect } from "react";

const SkillContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={{color:'#A6ADB5'}}   data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <h3 className={classes.techName}>
      {SKILLSTITLES.SKILL_PARA}
      </h3>
    </div>
  )
}

export default SkillContent;
