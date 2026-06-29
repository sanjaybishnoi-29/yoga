import { useEffect } from 'react';
import styles from './AsanaModal.module.css';

const levelClass = { Beginner: 'beginner', Intermediate: 'intermediate', Advanced: 'advanced' };

export default function AsanaModal({ asana, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.header}>
          <span className={styles.emoji}>{asana.emoji}</span>
          <span className={`${styles.badge} ${styles[levelClass[asana.level]]}`}>{asana.level}</span>
          <span className={styles.category}>{asana.category}</span>
        </div>

        <h2 className={styles.name}>{asana.name}</h2>
        <p className={styles.sanskrit}>{asana.sanskrit}</p>
        <p className={styles.english}>{asana.english}</p>
        <p className={styles.description}>{asana.description}</p>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>How to Practice</h4>
          <ol className={styles.stepList}>
            {asana.instructions.map((step, i) => (
              <li key={i} className={styles.step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Benefits</h4>
          <ul className={styles.benefitList}>
            {asana.benefits.map((b) => (
              <li key={b} className={styles.benefit}>
                <span className={styles.dash}>—</span> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerItem}>
            <span className={styles.footerLabel}>Hold</span>
            <span className={styles.footerValue}>{asana.duration}</span>
          </div>
          <div className={styles.footerItem}>
            <span className={styles.footerLabel}>Chakra</span>
            <span className={styles.footerValue}>{asana.chakra}</span>
          </div>
        </div>

        {asana.contraindications?.length > 0 && (
          <div className={styles.contraindications}>
            <span className={styles.contraLabel}>⚠ Caution: </span>
            {asana.contraindications.join(' · ')}
          </div>
        )}
      </div>
    </div>
  );
}
