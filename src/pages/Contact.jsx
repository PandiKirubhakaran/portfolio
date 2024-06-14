import EnquireForm from '../components/contact/EnquireForm';
import MyContact from '../components/contact/MyContact';
import { PAGETITLES } from '../enum';
import styles from '../assets/styles/App.module.css';
import classes from '../assets/styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{PAGETITLES.PAGE_CONTACT}</h2>
      <div className={classes.contactWrapper}>
        <MyContact />
        <EnquireForm />
      </div>
    </div>
  );
};

export default Contact;
