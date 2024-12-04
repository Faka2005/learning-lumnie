import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
// import CoursReact from './CoursReact';

import Cours_NbComplexe from './Cours/Cours_NbComplexe';
interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  // Mapping des cours et exercices vers les composants respectifs
  const courseComponents: { [key: number]: React.FC } = {
    // 1: CoursReact,
    4: Cours_NbComplexe
  };


  useEffect(() => {
    api.get('/courses')
      .then(response => {
        const selectedCourse = response.data.find((c: Course) => c.id === Number(id));
        setCourse(selectedCourse);
      })
      .catch(error => console.error('Erreur lors de la récupération du cours:', error));
  }, [id]);

  if (!course) {
    return <p>Chargement...</p>;
  }

  // Rendre le composant du cours et de l'exercice dynamiquement
  const CourseComponent = courseComponents[Number(id)];

  return (
    <div>
      {CourseComponent && <CourseComponent />}
    </div>
  );
};

export default CourseDetail;
