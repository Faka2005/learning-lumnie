import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api'; // Assurez-vous que votre fichier api.ts est bien configuré

interface Exercice {
  id: number;
  title_exercice: string;
  niveau: string;
}

const ExercicesDetails: React.FC = () => {
  const [exercices, setExercices] = useState<Exercice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Appeler l'API pour récupérer les exercices
    api.get('/exercice')
      .then((response) => {
        setExercices(response.data); // Stocker les exercices récupérés dans l'état
        setLoading(false);
      })
      .catch((error) => {
        setError('Erreur lors de la récupération des exercices.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des exercices...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Liste des Exercices</h1>
      <ul>
        {exercices.map((exercice) => (
          <li key={exercice.id}>
            <Link to={`/exercice/${exercice.id}`}>{exercice.title_exercice} - Niveau {exercice.niveau}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExercicesDetails;
