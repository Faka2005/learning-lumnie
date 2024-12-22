import React from "react";


class FicheClass {
    name: string;
    url: string;
    theme: string;
    color?: string;
  
    constructor(name: string, url: string, theme: string) {
      this.name = name;
      this.url = url;
      this.theme = theme;
      this.color = theme === "Maths" ? "red" : theme === "Physique" ? "blue" : "gray";
    }
  }
  
  interface CreateFicheProps {
    fiche: FicheClass;
  }
  
  const CreateFiche: React.FC<CreateFicheProps> = ({ fiche }) => {
    return (
      <div
        style={{
          width: "350px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* En-tête */}
        <div
          style={{
            backgroundColor: fiche.color || "#eee",
            padding: "8px",
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          {fiche.name}
        </div>
  
        {/* Contenu principal */}
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#333" }}>
            {fiche.name}
          </h3>
          <p style={{ fontSize: "14px", margin: "8px 0", color: "#666" }}>
            <strong>Thème : </strong> {fiche.theme}
          </p>
          <p style={{ fontSize: "14px", margin: "8px 0", color: "#666" }}>
            Cliquez sur le lien pour accéder au fichier :
          </p>
          <a
            href={fiche.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: fiche.color || "blue",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {fiche.url}
          </a>
        </div>
  
        {/* Badge PDF */}
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
            backgroundColor: "red",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          PDF
        </div>
      </div>
    );
  };
function FichePage() {
    const fiche = new FicheClass(
        "DOSSIER_NO_AE",
        "http://example.com",
        "Maths"
      );
    
      return <CreateFiche fiche={fiche} />;
}

export default FichePage;