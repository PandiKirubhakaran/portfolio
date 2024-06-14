import React from 'react';
import classes from '../../assets/styles/Contact.module.css';

const EnquireForm = () => {
  return (
    <div className={classes.container}>
      <form action="#">
        <div className={classes.fields}>
          <div className={classes.field}>
            <input type="text" placeholder="Name" required />
          </div>
          <div className={`${classes.field} ${classes.email}`}>
            <input type="email" placeholder="Email" required />
          </div>
        </div>
        <div className={classes.field}>
          <input type="text" placeholder="Subject" required />
        </div>
        <div className={`${classes.field} ${classes.textarea}`}>
          <textarea placeholder="Message.." required></textarea>
        </div>
        <div className={classes.buttonArea}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
