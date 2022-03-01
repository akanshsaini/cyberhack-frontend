import React from 'react';
import classes from './Login.module.css';
import amitylogo from '../images/amitylogo.png';
import cyberlogo from '../images/cyberlogo.png';

const Login = () => {
  return (
    <div className={classes.background}>
      <div className={classes.outer}>
        <div className={classes.container}>
          <div className={classes.logocontainer}>
            <img
              className={classes.amitylogo}
              src={amitylogo}
              alt='Amity Logo'
            />

            <img
              className={classes.cyberlogo}
              src={cyberlogo}
              alt='Cyberhack logo'
            />
          </div>
          <form className={classes.form}>
            <input className={classes.forminput} placeholder='{ Username }' />
            <input className={classes.forminput} placeholder='{ Password }' />
            <button className={classes.formbtn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
