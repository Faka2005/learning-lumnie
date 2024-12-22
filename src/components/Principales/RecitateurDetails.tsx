import React from "react";
import { useParams } from "react-router-dom";
import { Recitateurs } from "../../services/data";
import { Link } from "react-router-dom";
import Card from "../Admin/TestPage";
function RecitateurDetails() {
    const { id } = useParams<{ id: string }>(); // Récupérer l'ID à partir des paramètres d'URL
    const recitateur = Recitateurs.find((r) => r.id === id);
  
    if (!recitateur) {
      return <h1>Récitateur introuvable</h1>;
    }
  
    return (
      <div>
        <h1>Liste des sourates du réciteur : {recitateur.name}</h1>
        <ul>
          {recitateur.sourate.map((sourate, index) => (
            <Card title={sourate.name} url={sourate.url}/>
          ))}
        </ul>
        <Link to="/recitateur">Retour à la liste des récitateurs</Link>
      </div>
    );
  }

export default RecitateurDetails;
