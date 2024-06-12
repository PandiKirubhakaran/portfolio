import classes from "../../assets/styles/Home.module.css";
import { HOMETITLES } from "../../enum";
import Resume from "./Resume";
const Content = () => {
  return (
    <div>
      <h2 className={classes.tag}>{HOMETITLES.HELLO}</h2>
      <div className={classes.content}>
        <span className={classes.text1}>{HOMETITLES.NAME}</span>
        <span className={classes.text2}>{HOMETITLES.PROFISSION} </span>
      </div>
      <h3 className={classes.hello} data-text={HOMETITLES.TAGLINE}>
        {HOMETITLES.TAGLINE}
      </h3>
      <Resume/>
    </div>
  );
};

export default Content;
