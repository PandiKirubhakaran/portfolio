import { Link } from "react-router-dom";
import classes from "../assets/styles/NavBar.module.css";
import styles from "../assets/styles/App.module.css";
import { NAVBARTITLES, Routes } from "../enum";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={styles.container}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'#04d9ff'}}>
          <h2 style={{width:'25%'}}>Kirubha</h2>
          <ul className={classes.navBarContainer}>
            <li>
              <Link to={Routes.HOME}>{NAVBARTITLES.HOME_TITLE}</Link>
            </li>
            <li>
              <Link to={Routes.ABOUT}>{NAVBARTITLES.ABOUT_TITLE}</Link>
            </li>
            <li>
              <Link to={Routes.SKILLS}>{NAVBARTITLES.SKILLS_TITLE}</Link>
            </li>
            <li>
              <Link to={Routes.PROJECTS}>{NAVBARTITLES.PROJECTS_TITLE}</Link>
            </li>
            <li>
              <Link to={Routes.CONTACT}>{NAVBARTITLES.CONTACT_TITLE}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
