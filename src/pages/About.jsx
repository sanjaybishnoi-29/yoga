import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>The Path</p>
        <h2 className={styles.title}>About Praana Yoga</h2>

        <p className={styles.body}>
          Yoga is not merely exercise — it is an ancient science of the self,
          developed over 5,000 years in the Indian subcontinent. The word{' '}
          <em className={styles.em}>yoga</em> comes from Sanskrit, meaning "to
          yoke" or "to unite" — a union of body, mind, and spirit.
        </p>
        <p className={styles.body}>
          An <em className={styles.em}>asana</em> (आसन) is a body posture used
          in yoga practice. Originally there were only seated meditation postures;
          today there are hundreds of asanas, each with unique physical and
          energetic effects on the practitioner.
        </p>
        <p className={styles.body}>
          <em className={styles.em}>Praana</em> (प्राण) refers to life-force
          energy — the vital breath that flows through all living things. Through
          conscious movement and breathwork (pranayama), yoga teaches us to
          cultivate and direct this energy.
        </p>

        <blockquote className={styles.quote}>
          "Yoga is the journey of the self, through the self, to the self."
          <cite className={styles.cite}>— The Bhagavad Gita</cite>
        </blockquote>

        <p className={styles.body}>
          This library is a living reference for students at all levels — from
          the first breaths of Tadasana to the courage of Bakasana. May your
          practice bring you presence, strength, and peace.
        </p>

        <div className={styles.pillars}>
          {[
            { icon: '🌬️', title: 'Pranayama', desc: 'Breath is the bridge between body and mind. Every asana is held in rhythm with conscious breathing.' },
            { icon: '🧘', title: 'Dhyana', desc: 'Meditation cultivated through stillness in posture, developing one-pointed awareness.' },
            { icon: '🌿', title: 'Ahimsa', desc: 'Non-violence toward yourself in practice — always work at your edge, never beyond it.' },
          ].map((p) => (
            <div key={p.title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <h4 className={styles.pillarTitle}>{p.title}</h4>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
