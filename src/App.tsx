import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetails';
import ExercicesDetails from './components/ExercicesDetails';
import Header from './pages/Header';
import Homepage from './pages/HomePage';
import Footer from './pages/Footer';


function App(){
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<CourseList />} />
          <Route path="/course" element={<CourseList />} />
          {/* <Route path="/exercice/:id" element={<ExerciceList />} /> */}
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/exercice/:id" element={<ExercicesDetails />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
