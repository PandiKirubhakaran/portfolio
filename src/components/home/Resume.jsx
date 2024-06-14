import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/file/sample.pdf';
import classes from '../../assets/styles/Home.module.css'
import { HOMETITLES } from '../../enum';

const Resume = () => {
  return (
    <button className={classes.resume}>
      <a href={resume} download="resume">
        <FontAwesomeIcon icon={faDownload} /> {HOMETITLES.RESUME}
      </a>
    </button>
  );
};

export default Resume;
