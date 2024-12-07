import React, { useEffect, useState } from 'react';

const apiBaseUrl = 'https://backend-lp36.onrender.com'; // Remplace par l'URL réelle de ton serveur

// Définir les types des données
interface Course {
  id: number;
  theme: string;
  title: string;
  description: string;
}

interface Exercice {
  id: number;
  title_execice: string;
  niveau: number;
}

interface Outil {
  id: number;
  title: string;
  description: string;
}

interface User {
  name: string;
  status: string;
}

interface DataState {
  root: string;
  courses: Course[];
  exercice: Exercice[];
  outils: Outil[];
  user: User[];
}

function RoutesList() {
  const [data, setData] = useState<DataState>({
    root: 'Chargement...',
    courses: [],
    exercice: [],
    outils: [],
    user: [],
  });

  useEffect(() => {
    // Récupérer les données de '/'
    fetch(`${apiBaseUrl}/`)
      .then(response => response.text())
      .then(text => setData(prevData => ({ ...prevData, root: text })))
      .catch(() => setData(prevData => ({ ...prevData, root: 'Erreur lors de la récupération' })));

    // Récupérer les données de '/courses'
    fetch(`${apiBaseUrl}/courses`)
      .then(response => response.json())
      .then(courses => setData(prevData => ({ ...prevData, courses })))
      .catch(() => setData(prevData => ({ ...prevData, courses: [] })));

    // Récupérer les données de '/exercice'
    fetch(`${apiBaseUrl}/exercice`)
      .then(response => response.json())
      .then(exercice => setData(prevData => ({ ...prevData, exercice })))
      .catch(() => setData(prevData => ({ ...prevData, exercice: [] })));

    // Récupérer les données de '/outils'
    fetch(`${apiBaseUrl}/outils`)
      .then(response => response.json())
      .then(outils => setData(prevData => ({ ...prevData, outils })))
      .catch(() => setData(prevData => ({ ...prevData, outils: [] })));

    // Récupérer les données de '/user'
    fetch(`${apiBaseUrl}/user`)
      .then(response => response.json())
      .then(user => setData(prevData => ({ ...prevData, user })))
      .catch(() => setData(prevData => ({ ...prevData, user: [] })));
  }, []);

  // Grouper les exercices par titre
  const groupedExercises = data.exercice.reduce((acc: { [key: string]: Exercice[] }, ex) => {
    acc[ex.title_execice] = acc[ex.title_execice] || [];
    acc[ex.title_execice].push(ex);
    return acc;
  }, {});

  return (
    <div>
      <h1>Liste des Routes et leurs Résultats</h1>
      <div>
        <h2>Route: /</h2>
        <p>{data.root}</p>
      </div>

      <div>
        <h2>Route: /courses</h2>
        <ul>
          {data.courses.map(course => (
            <li key={course.id}>
              <strong>{course.title}</strong> - {course.description} ({course.theme})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Route: /exercice</h2>
        <ul>
          {Object.entries(groupedExercises).map(([title, exercises]) => (
            <li key={title}>
              <strong>{title}</strong>
              <ul>
                {exercises.map(ex => (
                  <li key={ex.id}>Niveau {ex.niveau}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Route: /outils</h2>
        <ul>
          {data.outils.map(outil => (
            <li key={outil.id}>
              <strong>{outil.title}</strong> - {outil.description}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Route: /user</h2>
        <ul>
          {data.user.map((usr, index) => (
            <li key={index}>
              <strong>Nom:</strong> {usr.name} - <strong>Status:</strong> {usr.status}
            </li>
          ))}
        </ul>
      </div>
      
            {/* <div>
                <h2>Route: /courses/ficher</h2>
        <ul>
            {data.fiche.map((fiche, index) => (
                <li key={index}>
                    <strong>Nom:</strong> {fiche.name} - <strong>status:</strong> {fiche.theme} - <strong>url</strong> {fiche.url}   
                </li>
            ))};
        </ul>
      </div> */}
            {/* <div>
        <h2>Route: /exercice/ficher</h2>
        <ul>
            {data.fiche.map((fiche, index) => (
                <li key={index}>
                    <strong>Nom:</strong> {fiche.name} - <strong>status:</strong> {fiche.theme} - <strong>url</strong> {fiche.url}   
                </li>
            ))};
        </ul>
      </div> */}

    </div>
  );
}

function AdminPage() {
  return (
    <>
      <RoutesList />
    </>
  );
}

export default AdminPage;

