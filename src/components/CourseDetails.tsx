import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses,Course } from '../services/data';
import AOP from './Cours/Physique/AOP';
import CoursNbComplexe from './Cours/Cours_NbComplexe'; // Exemple de composant pour un exercice spécifique
import Filtre from './Cours/Filtre';


const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const selectedCourse = courses.find(course => course.id === Number(id));
    setCourse(selectedCourse || null);
  }, [id]);

  if (!course) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      {/* Composant spécifique basé sur l'ID */}
      {/* { course.id === 1 && <React/>} */}
      {/* { course.id ===2 && <Typescript/>} */}
      {/* { course.id === 3 && <Node/>} */}
      { course.id === 4 && <CoursNbComplexe/>}
      { course.id === 5 &&  <AOP/>}
      {/* { course.id === 6 && <Transistors/>} 
      { course.id === 7&& <Diode/>} */}
      { course.id === 8 && <Filtre/>}
    </div>
  );
};

export default CourseDetail;
