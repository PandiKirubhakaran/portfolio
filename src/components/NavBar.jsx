import { useState } from "react";
import classes from "../assets/styles/NavBar.module.css";
import styles from "../assets/styles/App.module.css";
import { NAVBARTITLES } from "../enum";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={classes.navBar}>
      <div className={styles.container}>
        <div className={classes.navBarWrapper}>
          <h2>{NAVBARTITLES.PORTFOLIO}</h2>
          {/* Display menu icon if screen width is less than 900px */}
          <div className={classes.menuIcon} onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
          {/* Menu items */}
          <ul className={`${classes.navBarContainer} ${menuOpen ? classes.showMenu : ""}`}>
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
