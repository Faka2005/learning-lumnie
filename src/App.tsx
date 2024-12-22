import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExercicesDetails from './components/Exercices/QuizNbComplexe';
import ExerciceList from './components/ExerciceList';
import Header from './pages/Header';
import Homepage from './pages/HomePage';
import Footer from './pages/Footer';
import AdminPage from './components/Admin/Admin';
import FichePage from './components/Fiche';
import CourseDetail from './components/CourseDetails';
import CourseList from './components/CourseList';
import Card from './components/Admin/TestPage';
import HomeBack from './pages/HomeBack';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercice/" element={<ExerciceList />} />
          <Route path="/exercice/:id" element={<ExercicesDetails />} />
          <Route path="/cours" element={<CourseList />} />
          <Route path="/cours/:id" element={<CourseDetail />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path='/fiche' element={<FichePage />} />
          <Route
        path="/admin/test"
        element={<Card title="Exemple" url="/home" />}
      />
        </Routes>
      </div>
      <HomeBack/>
      <Footer />
    </Router>
  );
};

export default App;