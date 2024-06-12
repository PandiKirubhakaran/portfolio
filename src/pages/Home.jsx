import Content from "../components/home/Content";
import styles from "../assets/styles/App.module.css";
import Profile from "../components/home/Profile";
import classes from "../assets/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={classes.mainHome}>
        <Content />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
