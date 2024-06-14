import styles from '../assets/styles/App.module.css';
import { PAGETITLES } from '../enum';

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{PAGETITLES.PAGE_PROJECTS}</h2>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>
        Projects will be displayed soon.
      </h3>
    </div>
  );
};

export default Projects;
