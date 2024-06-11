import classes from '../../assets/styles/Home.module.css';
import { HOMETITLES } from '../../enum';
const Content = () => {
  return (
    <div>
      <h2 className={classes.hello} data-text={HOMETITLES.HELLO}>
        {HOMETITLES.HELLO}
      </h2>
      <h4 style={{ color: '#fff' }}>{`I'm Pandi Kirubhakaran Eswaran,`}</h4>
      <h4 style={{ color: '#e58c33' }}>Full Stack Web Developer</h4>
      <h3 style={{ color: '#A6ADB5' }}>
        Building scalable web applications from front to back.
      </h3>
    </div>
  );
};

export default Content;
