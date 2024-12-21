import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exercices,quizData } from '../../services/data';

import QuizNombreComplexe from '../ExerciceNiveaux'; // Exemple de composant pour un exercice spécifique

interface Exercise {
  id: number;
  title: string;
  description: string;
}


const ExerciceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [exercice, setExercice] = useState<Exercise | null>(null);

  useEffect(() => {
    const selectedExercice = exercices.find(ex => ex.id === Number(id));
    setExercice(selectedExercice || null);
  }, [id]);

  if (!exercice) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>{exercice.title}</h2>
      <p>{exercice.description}</p>
      {/* Composant spécifique basé sur l'ID */}
      {exercice.id === 1 && <QuizNombreComplexe  exercielist={quizData} />}
    </div>
  );
};

export default ExerciceDetail;
