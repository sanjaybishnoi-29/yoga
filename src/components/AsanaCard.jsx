import styles from './AsanaCard.module.css';

const levelClass = {
  Beginner: 'beginner',
  Intermediate: 'intermediate',
  Advanced: 'advanced',
};

export default function AsanaCard({ asana, onClick }) {
  return (
    <article className={styles.card} onClick={() => onClick(asana)}>
      <div className={styles.emoji}>{asana.emoji}</div>
      <span className={`${styles.badge} ${styles[levelClass[asana.level]]}`}>
        {asana.level}
      </span>
      <h3 className={styles.name}>{asana.name}</h3>
      <p className={styles.sanskrit}>{asana.sanskrit}</p>
      <p className={styles.english}>{asana.english}</p>
      <p className={styles.description}>{asana.description}</p>
      <p className={styles.duration}>⏱ {asana.duration}</p>
    </article>
  );
}
