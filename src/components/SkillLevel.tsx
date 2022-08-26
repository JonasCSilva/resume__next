import styles from '../styles/SkillLevel.module.scss'
import { LevelRange } from '../types'

type Props = { skillLevel: LevelRange }

export const SkillLevel = ({ skillLevel }: Props): JSX.Element => (
  <div className={styles.grid}>
    {Array.from({ length: 5 }, (_value, index) => (
      <figure key={index} className={index < skillLevel ? styles.circleFilled : styles.circleEmpty} />
    ))}
  </div>
)
