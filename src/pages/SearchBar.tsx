import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône de recherche
import { useNavigate } from "react-router-dom";
import { Pages } from "../services/data";

  
  function SearchBar() {
    const [searchInput, setSearchInput] = useState(""); // État pour le texte saisi
    const navigate = useNavigate(); // Hook pour la redirection
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Recherche dans les pages
      const page = Pages.find((p) => p.label.toLowerCase() === searchInput.toLowerCase());
      if (page) {
        navigate(page.path); // Redirige vers la page correspondante
      } else {
        alert("Aucun résultat trouvé pour votre recherche !");
      }
  
      // Réinitialise l'input après la recherche
      setSearchInput("");
    };
  
    return (
      <form onSubmit={handleSearch} className="search-bar">
        {/* Input de recherche */}
        <input
          type="search"
          className="search-input"
          placeholder="Rechercher une page..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Met à jour l'état
        />
        {/* Icône de recherche */}
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
  }
  
  export default SearchBar;
  