import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeBack() {
  const navigate = useNavigate(); // Hook pour la navigation

  const ReturnHome = () => {
    navigate("/"); // Redirection vers la page d'accueil
  };

  return (
    <button
      onClick={ReturnHome}
      style={{
        position: "fixed", // Permet de fixer le bouton par rapport à la fenêtre
        bottom: "20px", // Espace de 20px par rapport au bas de l'écran
        right: "20px", // Espace de 20px par rapport au bord droit de l'écran
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 1000, // Assure que le bouton est au-dessus des autres éléments
      }}
    >
      <FaHome size={30} color="#007BFF" /> {/* Icône utilisateur */}
    </button>
  );
}

export default HomeBack;
