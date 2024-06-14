import FrameImg from "../components/about/FrameImg"
import styles from '../assets/styles/App.module.css'
import Details from "../components/about/Details"
import { PAGETITLES } from "../enum"

const About = () => {
  return (
    <div className={styles.container} >
      <h2 className={styles.heading}>{PAGETITLES.PAGE_ABOUT}</h2>
      <FrameImg/>
      <Details/>
    </div>
  )
}

export default About