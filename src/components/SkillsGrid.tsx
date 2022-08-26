import { SkillLevel } from "./SkillLevel";
import styles from "../styles/SkillsGrid.module.scss";
import { Skill } from "../types";

type Props = {
  skills: Skill[];
};

export const SkillsGrid = ({ skills }: Props): JSX.Element => (
  <div className={styles.grid}>
    {skills.map(({ name, skillLevel }, index) => (
      <div key={index} className={styles.skillContainer}>
        <h5>{name}</h5>
        <SkillLevel skillLevel={skillLevel} />
      </div>
    ))}
  </div>
);
