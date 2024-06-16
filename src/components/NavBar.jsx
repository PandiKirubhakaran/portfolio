import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from "../assets/styles/NavBar.module.css";
import styles from "../assets/styles/App.module.css";
import { NAVBARTITLES } from "../enum";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={classes.navBar}>
      <div className={styles.container}>
        <div className={classes.navBarWrapper}>
          <h2>{NAVBARTITLES.PORTFOLIO}</h2>
          <div className={classes.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`${classes.navBarContainer} ${menuOpen ? classes.showMenu : ""}`}>
            <li>
              <a href="#home" onClick={(e) => handleMenuItemClick(e, "#home")}>{NAVBARTITLES.HOME_TITLE}</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleMenuItemClick(e, "#about")}>{NAVBARTITLES.ABOUT_TITLE}</a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleMenuItemClick(e, "#skills")}>{NAVBARTITLES.SKILLS_TITLE}</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleMenuItemClick(e, "#projects")}>{NAVBARTITLES.PROJECTS_TITLE}</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleMenuItemClick(e, "#contact")}>{NAVBARTITLES.CONTACT_TITLE}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
