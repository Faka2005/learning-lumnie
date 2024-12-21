import React, { useState } from "react";

const Image=()=>{
  return(<div><img src="./image.png" alt="" /></div>)
}
// Contenus en tant que composants fonctionnels
const Comparateurs = () => (
  <div>
    Les comparateurs permettent de comparer deux tensions et de produire un
    signal de sortie en fonction de la comparaison.
    <Image/>
  </div>
);

const Suiveurs = () => (
  <div>
    Le suiveur a un gain unitaire. Il est utilisé pour isoler les étages d'un
    montage sans affecter le signal d'entrée.
  </div>
);

const AmplificateurInverseur = () => (
  <div>
    L'amplificateur inverseur produit une inversion de phase et amplifie le
    signal d'entrée selon un facteur déterminé par les résistances.
  </div>
);

const AmplificateurNonInverseur = () => (
  <div>
    L'amplificateur non inverseur amplifie le signal d'entrée sans changer sa
    phase. Il offre un gain positif.
  </div>
);

const Soustracteur = () => (
  <div>
    Le soustracteur permet de calculer la différence entre deux signaux
    d'entrée.
  </div>
);

const Sommateur = () => (
  <div>
    Le sommateur additionne plusieurs signaux d'entrée pour produire un signal
    de sortie unique.
  </div>
);

const Derivateurs = () => (
  <div>
    Le dérivateur calcule la dérivée d'un signal en fonction du temps, utile en
    traitement de signaux.
  </div>
);

// Composant principal
function AOP() {
  const [searchTerm, setSearchTerm] = useState("");

  // Liste des sujets avec leurs composants associés
  const topics = [
    { id: "Comparateurs", title: "Comparateurs", content: <Comparateurs /> },
    { id: "Suiveurs", title: "Suiveurs", content: <Suiveurs /> },
    {
      id: "Amplificateurs inverseur",
      title: "Amplificateurs inverseur",
      content: <AmplificateurInverseur />,
    },
    {
      id: "Amplificateurs non inverseur",
      title: "Amplificateurs non inverseur",
      content: <AmplificateurNonInverseur />,
    },
    { id: "Soustracteur", title: "Soustracteur", content: <Soustracteur /> },
    { id: "Sommateur", title: "Sommateur", content: <Sommateur /> },
    { id: "Dérivateurs", title: "Dérivateurs", content: <Derivateurs /> },
  ];

  // Filtrer les sujets en fonction du terme de recherche
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amplificateurs Opérationnels</h1>
      <label htmlFor="search" style={{ marginRight: "10px" }}>
        Rechercher :
      </label>
      <input
        type="search"
        id="search"
        placeholder="Rechercher un sujet..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "5px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <h1 style={{ marginTop: "20px" }}>Montage d'AOP en régimes linéaires</h1>
      {/* Affichage des sujets et de leurs contenus associés */}
      {filteredTopics.map((topic) => (
        <div key={topic.id} id={topic.id} style={{ marginBottom: "20px" }}>
          <h2>{topic.title}</h2>
          {topic.content}
        </div>
      ))}
    </div>
  );
}

export default AOP;
