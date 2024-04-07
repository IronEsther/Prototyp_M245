// ClassRegistrationForm.js
import React, { useState, useEffect } from 'react';
import { registerClass } from '../../backend/api';
import axios from 'axios'; // Beispiel für eine HTTP-Anfragebibliothek

const ClassRegistrationForm = () => {
  const [existingClasses, setExistingClasses] = useState([]);
  const [className, setClassName] = useState('');

  useEffect(() => {
    // Hier API-Aufruf durchführen, um vorhandene Klassen abzurufen
    axios.get('http://localhost:<portnummer>/classes')
      .then(response => {
        setExistingClasses(response.data); // Annahme: Die Daten sind ein Array von Klassenobjekten
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der vorhandenen Klassen:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!className) return;
    await registerClass(className);
    setClassName('');
  };

  return (
    <div className="form-container">
      <h2>Register Class</h2>
      <form onSubmit={handleSubmit}>
        <select>
          <option value="">Select existing class</option>
          <option value="">IM21w</option>
          <option value="">IM21d</option>
          <option value="">I3b</option>
          {existingClasses.map((classItem, index) => (
            <option key={index} value={classItem.id}>{classItem.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter new class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ClassRegistrationForm;
