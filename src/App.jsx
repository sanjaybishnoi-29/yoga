import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Asanas from './pages/Asanas';
import About from './pages/About';
import styles from './App.module.css';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':    return <Home onNavigate={setPage} />;
      case 'asanas':  return <Asanas />;
      case 'about':   return <About />;
      default:        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className={styles.app}>
      <Navbar activePage={page} onNavigate={setPage} />
      {renderPage()}
      <footer className={styles.footer}>
        ॐ Praana Yoga · Ancient practice, modern path
      </footer>
    </div>
  );
}
