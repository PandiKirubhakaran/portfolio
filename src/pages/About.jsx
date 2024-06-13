import FrameImg from "../components/about/FrameImg"
import styles from '../assets/styles/App.module.css'
import Details from "../components/about/Details"

const About = () => {
  return (
    <div className={styles.container} >
      <h2 className={styles.heading}>About Me</h2>
      <FrameImg/>
      <Details/>
    </div>
  )
}

export default About