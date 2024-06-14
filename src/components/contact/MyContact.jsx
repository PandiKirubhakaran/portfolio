import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from '../../assets/styles/Contact.module.css';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const MyContact = () => {
  return (
    <div style={{ color: "#fff" }}>
      <div className={classes.myContact}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div>
          <h3>Phone</h3>
          <h4>9345001738</h4>
        </div>
      </div>
      <div className={classes.myContact}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div>
          <h3>Email</h3>
          <h4>unnalmudiyum6@gmail.com</h4>
        </div>
      </div>
      <div className={classes.myContact}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div>
          <h3>Address</h3>
          <h4>Chennai, Tamil Nadu</h4>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
