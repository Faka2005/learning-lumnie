import React from "react";
import { Link } from "react-router-dom";
import { Recitateurs } from "../../services/data";
import Card from "../Admin/TestPage";
function RecitateurList() {
    return (
      <div>
        <h1>Liste des récitateurs</h1>
        <ul>
          {Recitateurs.map((recitateur) => (
              <Card title={recitateur.name} url={`/recitateur/${recitateur.id}`}/>
          ))}
        </ul>
      </div>
    );
  }
export default RecitateurList;