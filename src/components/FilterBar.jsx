import styles from './FilterBar.module.css';

export default function FilterBar({ options, active, onChange, label }) {
  return (
    <div className={styles.bar}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.buttons}>
        {options.map((opt) => (
          <button
            key={opt}
            className={`${styles.btn} ${active === opt ? styles.active : ''}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
