import React, { useState } from "react";

// Exemple de composant spécifique
function F1Bas() {
  return <p>Contenu du filtre passe-bas 1er ordre.</p>;
}

function Filtre() {
  const [searchTerm, setSearchTerm] = useState("");

  // Liste des filtres avec leurs composants réels
  const filtre = [
    {
      id: "Filtre passe-bas",
      rawTitle: "Filtre passe-bas 1er ordre", // Titre en texte brut
      title: <>Filtre passe-bas 1<sup>er</sup> ordre</>, // Titre formaté avec JSX
      content: <F1Bas />,
    },
    {
      id: "Filtre passe-haut",
      rawTitle: "Filtre passe-haut 1er ordre",
      title: <>Filtre passe-haut 1<sup>er</sup> ordre</>,
    //   content:  <F1Haut />
    },
    {
      id: "Filtre passe-bande",
      rawTitle: "Filtre passe-bande 1er ordre",
      title: <>Filtre passe-bande 1<sup>er</sup> ordre</>,
    //   content:  <F1Bande />,
    },
  ];

  // Filtrage en fonction du terme recherché
  const filteredTopics = filtre.filter((topic) =>
    topic.rawTitle.toLowerCase().includes(searchTerm.toLowerCase()) // Utilise rawTitle pour la recherche
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Les différents types de filtres</h1>

      {/* Champ de recherche */}
      <label htmlFor="search" style={{ marginRight: "10px" }}>
        Rechercher :
      </label>
      <input
        type="search"
        id="search"
        placeholder="Rechercher un filtre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "5px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {/* Liste filtrée */}
      <div style={{ marginTop: "20px" }}>
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} id={topic.id} style={{ marginBottom: "20px" }}>
              <h2>{topic.title}</h2>
              {topic.content}
            </div>
          ))
        ) : (
          <p>Aucun sujet correspondant trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Filtre;
