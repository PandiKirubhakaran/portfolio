import EnquireForm from "../components/contact/EnquireForm";
import MyContact from "../components/contact/MyContact";
import { PAGETITLES } from "../enum";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../assets/styles/App.module.css";
import classes from "../assets/styles/Contact.module.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2
        className={styles.heading}
        data-aos="fade-right"
        // data-aos-offset="200"
        // data-aos-easing="ease-in-sine"
      >
        {PAGETITLES.PAGE_CONTACT}
      </h2>
      <div className={classes.contactWrapper}>
        <MyContact />
        <EnquireForm />
      </div>
    </div>
  );
};

export default Contact;
