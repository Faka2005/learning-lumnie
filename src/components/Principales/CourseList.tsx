import React, { useState } from "react";

import { courses } from "../../services/data";
import Card from "../Admin/TestPage";

const CourseList: React.FC = () => {
  const [themeFilter, setThemeFilter] = useState<string>("");

  // Filtrer les cours par thème
  const filteredCourses = themeFilter
    ? courses.filter((course) => course.theme === themeFilter)
    : courses;

  const themes = Array.from(new Set(courses.map((course) => course.theme))); // Récupère les thèmes uniques

  return (
    <div>
      <h2>Liste des Cours</h2>

      {/* Navbar dynamique basée sur les thèmes */}
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setThemeFilter("")}>Tous les thèmes</button>
        {themes.map((theme) => (
          <button key={theme} onClick={() => setThemeFilter(theme)}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </nav>

      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id} style={{ listStyle: "none", margin: "10px 0" }}>
            <Card title={course.title} url={`/cours/${course.id}`} theme={course.theme}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
