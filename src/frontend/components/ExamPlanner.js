import React, { useEffect, useState } from 'react';
import { getExams } from '../../backend/api';

const ExamPlanner = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExams();
      setExams(data || []); // Stellen Sie sicher, dass data definiert ist, ansonsten verwenden Sie ein leeres Array
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Exam Planner</h2>
      <ul>
        <li>Exams</li>
        <ul>
          <li>Deutsch</li>
          <li>09.12.2003</li>
          <li>Ich will diese Prüfung bestehen :D --- Lernziele sind die folgende: - Wirtschaft ist ein Baum</li>
       </ul>
        {exams.map((exam, index) => (
          <li key={index}>
            {exam.subject} - {new Date(exam.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamPlanner;
