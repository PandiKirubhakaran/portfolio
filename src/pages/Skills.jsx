import BackendBar from '../components/skills/BackendBar'
import FrontendBar from '../components/skills/FrontendBar'
import SkillContent from '../components/skills/SkillContent'
import { PAGETITLES } from '../enum'
import styles from '../assets/styles/App.module.css'
import classes from '../assets/styles/Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{PAGETITLES.PAGE_SKILLS}</h2>
      <SkillContent/>
      <div className={classes.skillsMainWrapper}>
      <FrontendBar/>
      <BackendBar/>
      </div>
      </div>
  )
}

export default Skills