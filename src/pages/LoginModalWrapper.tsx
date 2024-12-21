import React, { useState } from "react";
import LoginModals from "../pages/Login";
import "../css/modals.css"; // Importation du CSS pour styliser la modale
import { FaUser } from "react-icons/fa"; // Icône utilisateur depuis react-icons

const LoginModalWrapper: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // État pour afficher ou masquer la modale

  // Fonction pour ouvrir la modale
  const openModal = () => setShowModal(true);

  // Fonction pour fermer la modale
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {/* Bouton Icône */}
      <button onClick={openModal} style={{ background: "none", border: "none", cursor: "pointer" }}>
        <FaUser size={30} color="#007BFF" /> {/* Icône utilisateur */}
      </button>

      {/* Modale */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times; {/* Symbole de fermeture */}
            </span>
            <LoginModals/>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModalWrapper;
