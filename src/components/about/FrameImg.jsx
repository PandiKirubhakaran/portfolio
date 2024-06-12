import React from 'react';
import Profile from '../../assets/images/profile.webp';
import clasees from '../../assets/styles/About.module.css'

const FrameImg = () => {
  return (
    <figure className={clasees.swing}>
      <img src={Profile} alt="Profile" width="200" />
    </figure>
  );
};

export default FrameImg;
