import React, { useState } from "react";

// Définition des exercices sous forme de questions de quiz


interface Quiz {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }
  
  // Props attendues par le composant QuizNombreComplexe
  interface QuizNombreComplexeProps {
    exercielist: Quiz[];
  }
  
  const QuizNombreComplexe: React.FC<QuizNombreComplexeProps> = ({ exercielist }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // Index de la question actuelle
  const [selectedOption, setSelectedOption] = useState<string>(""); // Réponse sélectionnée
  const [isCorrect, setIsCorrect] = useState<boolean>(false); // État de validation
  const [showExplanation, setShowExplanation] = useState<boolean>(false); // Afficher l'explication

  const currentQuestion = exercielist[currentQuestionIndex]; // Question actuelle

  const handleOptionClick = (option: string) => {
    setSelectedOption(option); // Met à jour l'option sélectionnée
  };

  const handleValidation = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setIsCorrect(true); // Bonne réponse
    } else {
      alert("Réponse incorrecte. Réessayez !");
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(""); // Réinitialise l'option sélectionnée
    setIsCorrect(false); // Réinitialise l'état de validation
    setShowExplanation(false); // Cacher l'explication

    if (currentQuestionIndex + 1 < exercielist.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Passe à la question suivante
    } else {
      alert("Vous avez terminé le quiz !");
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Quiz : Nombre Complexe</h2>
      <div>
        <p>{currentQuestion.question}</p>
        <div style={{ margin: "1rem 0" }}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                display: "block",
                margin: "0.5rem 0",
                padding: "0.5rem 1rem",
                backgroundColor: selectedOption === option ? "#D3D3D3" : "#F0F0F0",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Affiche le bouton Valider tant que la bonne réponse n'est pas trouvée */}
        {!isCorrect && (
          <button
            onClick={handleValidation}
            style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
          >
            Valider ma réponse
          </button>
        )}
        {/* Affiche les options une fois la réponse correcte */}
        {isCorrect && (
          <>
            <p style={{ color: "green" }}>Correct !</p>
            {!showExplanation && (
              <button
                onClick={() => setShowExplanation(true)}
                style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
              >
                Voir l'explication
              </button>
            )}
            {showExplanation && (
              <div>
                <p>Explication : {currentQuestion.explanation}</p>
                <button
                  onClick={handleNextQuestion}
                  style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
                >
                  Question suivante
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizNombreComplexe;
