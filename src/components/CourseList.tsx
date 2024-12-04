import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

interface Course {
  id: number;
  theme: string;
  title: string;
  description: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [themeFilter, setThemeFilter] = useState<string>(''); // Filtrer par thème
  const [themes, setThemes] = useState<string[]>([]); // Stocke les thèmes uniques

  useEffect(() => {
    api.get('/courses')
      .then((response) => {
        // Vérifiez si la réponse contient les données attendues
        if (Array.isArray(response.data)) {
          setCourses(response.data);

          // Extraction des thèmes uniques
          const uniqueThemes = Array.from(new Set(response.data.map((course: Course) => course.theme)));
          setThemes(uniqueThemes);
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des cours:', error));
  }, []);

  // Fonction pour filtrer les cours par thème
  const filteredCourses = courses.filter(course => 
    themeFilter === '' || course.theme === themeFilter
  );

  return (
    <div>
      <h2>Liste des cours</h2>
      
      {/* Navbar dynamique basée sur les thèmes */}
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button 
          onClick={() => setThemeFilter('')} 
          style={{ backgroundColor: themeFilter === '' ? '#007BFF' : '#ccc', padding: '0.5rem', borderRadius: '5px' }}
        >
          Tous les thèmes
        </button>

        {themes.map(theme => (
          <button 
            key={theme} 
            onClick={() => setThemeFilter(theme)} 
            style={{ backgroundColor: themeFilter === theme ? '#007BFF' : '#ccc', padding: '0.5rem', borderRadius: '5px' }}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)} {/* Capitalisation du thème */}
          </button>
        ))}
      </nav>

      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h3>{course.title} ({course.theme})</h3>
              <p>{course.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
