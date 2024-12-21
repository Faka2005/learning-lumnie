import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        padding: "20px 10px",
        position:"sticky"
      }}
    >
      <p>&copy; 2024 Votre Nom ou Entreprise. Tous droits réservés.</p>
      <p>
        <a
          href="/privacy"
          style={{ color: "#61dafb", textDecoration: "none" }}
        >
          Politique de confidentialité
        </a>
      </p>
    </div>
  );
};

export default Footer; 
