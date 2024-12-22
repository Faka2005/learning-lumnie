import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { exercices } from '../../services/data';

const ExerciceList: React.FC = () => {
  const [themeFilter, setThemeFilter] = useState<string>('');

  const filteredExercices = themeFilter
    ? exercices.filter(exercice => exercice.theme === themeFilter)
    : exercices;

  const themes = Array.from(new Set(exercices.map(ex => ex.theme))); // Récupère les thèmes uniques

  return (
    <div>
      <h2>Liste des Exercices</h2>

      {/* Navbar dynamique basée sur les thèmes */}
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setThemeFilter('')}>Tous les thèmes</button>
        {themes.map(theme => (
          <button key={theme} onClick={() => setThemeFilter(theme)}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </nav>

      <ul>
        {filteredExercices.map(exercice => (
          <li key={exercice.id}>
            <Link to={`/exercice/${exercice.id}`}>
              <h3>{exercice.title}</h3>
              <p>{exercice.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciceList;
