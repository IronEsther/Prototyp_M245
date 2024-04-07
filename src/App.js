import React from 'react';
import ClassRegistrationForm from './frontend/components/ClassRegistrationForm';
import ExamPlanner from './frontend/components/ExamPlanner';
import ExamForm from './frontend/components/ExamForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Exam Planner App</h1>
        <nav>
          <ul>
            <li><a href="#register">Register Class</a></li>
            <li><a href="#add-exam">Add Exam</a></li>
            <li><a href="#view-planner">View Planner</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="register">
          <ClassRegistrationForm />
        </section>
        <section id="add-exam">
          <ExamForm />
        </section>
        <section id="view-planner">
          <ExamPlanner />
        </section>
      </main>
    </div>
  );
}

export default App;
