import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../../assets/styles/Contact.module.css";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { CONTACTTITLES } from "../../enum";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyContact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <div
      style={{ color: "#fff" }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className={classes.myContact}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div>
          <h3>{CONTACTTITLES.PHONE}</h3>
          <h4 className={classes.contactDetails}>{CONTACTTITLES.PHONE_NO}</h4>
        </div>
      </div>
      <div className={classes.myContact}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div>
          <h3>{CONTACTTITLES.EMAIL}l</h3>
          <h4 className={classes.contactDetails}>{CONTACTTITLES.EMAIL_ID}</h4>
        </div>
      </div>
      <div className={classes.myContact}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div>
          <h3>{CONTACTTITLES.ADDRESS}</h3>
          <h4 className={classes.contactDetails}>
            {CONTACTTITLES.CURRENT_ADDRESS}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
