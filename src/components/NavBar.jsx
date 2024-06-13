import classes from "../assets/styles/NavBar.module.css";
import styles from "../assets/styles/App.module.css";
import { NAVBARTITLES } from "../enum";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={styles.container}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'#04d9ff'}}>
          <h2 >Kirubha</h2>
          <ul className={classes.navBarContainer}>
            <li>
              <a href="#home">{NAVBARTITLES.HOME_TITLE}</a>
            </li>
            <li>
              <a href="#about">{NAVBARTITLES.ABOUT_TITLE}</a>
            </li>
            <li>
              <a href="#skills">{NAVBARTITLES.SKILLS_TITLE}</a>
            </li>
            <li>
              <a href="#projects">{NAVBARTITLES.PROJECTS_TITLE}</a>
            </li>
            <li>
              <a href="#contact">{NAVBARTITLES.CONTACT_TITLE}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
