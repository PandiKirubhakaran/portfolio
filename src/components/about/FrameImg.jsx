import Profile from '../../assets/images/aboutPic.webp';
import clasees from '../../assets/styles/About.module.css'

const FrameImg = () => {
  return (
    <figure className={clasees.swing}>
      <img src={Profile} alt="Profile" width="250" />
    </figure>
  );
};

export default FrameImg;
