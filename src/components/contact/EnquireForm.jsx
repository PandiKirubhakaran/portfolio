import { useEffect } from 'react';
import classes from '../../assets/styles/Contact.module.css';
import { CONTACTTITLES } from '../../enum';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EnquireForm = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
    });
  },[])
  
  return (
    <div className={classes.container}  data-aos="flip-left">
      <form action="#">
        <div className={classes.fields}>
          <div className={classes.name}>
            <input type="text" placeholder="Name" required />
          </div>
          <div className={classes.name}>
            <input type="email" placeholder="Email" required />
          </div>
        </div>
        <div className={classes.subject}>
          <input type="text" placeholder="Subject" required />
        </div>
        <div className={classes.textField}>
          <textarea placeholder="Message.." required></textarea>
        </div>
        <div className={classes.buttonArea}>
          <button type="submit">{CONTACTTITLES.SUBMIT}</button>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
