import styles from './Navbar.module.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'asanas', label: 'Asanas' },
  { id: 'about', label: 'About' },
];

export default function Navbar({ activePage, onNavigate }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => onNavigate('home')}>
        ॐ Praana Yoga
      </div>
      <div className={styles.links}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`${styles.link} ${activePage === link.id ? styles.active : ''}`}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
