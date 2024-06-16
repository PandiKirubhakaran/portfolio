import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import classes from '../../assets/styles/Skills.module.css';

const ProgressBar = ({ skills }) => {
  useEffect(() => {
    skills.forEach((skill) => {
      setTimeout(() => {
        document.getElementById(`${skill.name}pourcent`).innerHTML =
          skill.percentage;
        document.getElementById(`progress${skill.name}`).style.width =
          skill.percentage;
      }, skill.animationDelay * 1000);
    });
  }, [skills]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <ul className={classes.skillsBarContainer} data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      {skills.map((skill) => (
        <li key={skill.name}>
          <div className={classes.progressbarTitle}>
            <h3 className={classes.techName}>{skill.name}</h3>
              <span
                className={classes.percent}
                id={`${skill.name}pourcent`}
              ></span>
          </div>
          <div className={classes.barContainer}>
            <span
              className={`${classes.progressbar} ${classes[skill.color]}`}
              id={`progress${skill.name}`}
              style={{
                animationName: `progress${skill.name.toLowerCase()}`,
                animationDelay: `${skill.animationDelay}s`,
              }}
            ></span>
          </div>
        </li>
      ))}
    </ul>
  );
};

ProgressBar.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      animationDelay: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProgressBar;
