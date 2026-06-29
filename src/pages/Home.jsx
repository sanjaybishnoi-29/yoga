import styles from './Home.module.css';

export default function Home({ onNavigate }) {
  return (
    <main className={styles.hero}>
      <div className={styles.glow} />
      <p className={styles.eyebrow}>Ancient Wisdom · Modern Practice</p>
      <h1 className={styles.headline}>
        Find Your<br />Inner Stillness
      </h1>
      <p className={styles.subtext}>
        Explore the sacred tradition of yoga through detailed asana guides —
        postures, benefits, and the breath behind each movement.
      </p>
      <button className={styles.cta} onClick={() => onNavigate('asanas')}>
        Explore Asanas
      </button>
      <div className={styles.stats}>
        {[
          ['9', 'Asanas'],
          ['3', 'Levels'],
          ['5000+', 'Years of tradition'],
        ].map(([num, label]) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statNum}>{num}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
