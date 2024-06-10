import { Link } from 'react-router-dom';
import classes from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={classes.navBar}>
        <ul className={classes.navBarContainer}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
