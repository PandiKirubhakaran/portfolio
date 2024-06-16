import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from '../../assets/file/sample.pdf';
import classes from '../../assets/styles/Home.module.css';
import { HOMETITLES } from '../../enum';

const Resume = () => {
  return (
    <div className={classes.container}>
      <button className={classes.resume}>
        <a href={resume} download="resume">
          <FontAwesomeIcon icon={faDownload} /> {HOMETITLES.RESUME}
        </a>
      </button>
      <button className={classes.linkedin}>
        <a href="https://www.linkedin.com/in/pandi-kirubhakaran-eswaran-21837b1a5/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </button>
    </div>
  );
};

export default Resume;
