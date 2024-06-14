import styles from "../assets/styles/App.module.css";
import EnquireForm from "../components/contact/EnquireForm";
import MyContact from "../components/contact/MyContact";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact</h2>
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center',marginBottom:'50px'}}>
        <MyContact />
        <EnquireForm />
      </div>
    </div>
  );
};

export default Contact;
