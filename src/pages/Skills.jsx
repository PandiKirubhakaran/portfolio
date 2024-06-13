import styles from '../assets/styles/App.module.css'
import BackendBar from '../components/skills/BackendBar'
import FrontendBar from '../components/skills/FrontendBar'
import SkillContent from '../components/skills/SkillContent'

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Skills</h2>
      <SkillContent/>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <FrontendBar/>
      <BackendBar/>
      </div>
      </div>
  )
}

export default Skills