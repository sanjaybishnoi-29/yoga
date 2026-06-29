import { useState } from 'react';
import { asanas, levels, categories } from '../data/asanas';
import AsanaCard from '../components/AsanaCard';
import AsanaModal from '../components/AsanaModal';
import FilterBar from '../components/FilterBar';
import styles from './Asanas.module.css';

export default function Asanas() {
  const [selectedAsana, setSelectedAsana] = useState(null);
  const [levelFilter, setLevelFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = asanas.filter((a) => {
    const matchLevel = levelFilter === 'All' || a.level === levelFilter;
    const matchCategory = categoryFilter === 'All' || a.category === categoryFilter;
    const matchSearch =
      search === '' ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.english.toLowerCase().includes(search.toLowerCase()) ||
      a.sanskrit.includes(search);
    return matchLevel && matchCategory && matchSearch;
  });

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Sacred Postures</p>
        <h2 className={styles.title}>Asana Library</h2>
        <p className={styles.subtitle}>
          {asanas.length} postures · Click any card to explore in detail
        </p>
      </div>

      <div className={styles.controls}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search asanas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FilterBar options={levels} active={levelFilter} onChange={setLevelFilter} label="Level" />
        <FilterBar options={categories} active={categoryFilter} onChange={setCategoryFilter} label="Category" />
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No asanas match your filters.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((asana) => (
            <AsanaCard key={asana.id} asana={asana} onClick={setSelectedAsana} />
          ))}
        </div>
      )}

      {selectedAsana && (
        <AsanaModal asana={selectedAsana} onClose={() => setSelectedAsana(null)} />
      )}
    </main>
  );
}
