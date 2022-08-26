import styles from "../styles/SkillLevel.module.css";

export default function SkillLevel({ level }: { level: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 5 }, (_value, index) => (
        <figure
          key={index}
          className={index < level ? styles.circleFilled : styles.circleEmpty}
        />
      ))}
    </div>
  );
}
