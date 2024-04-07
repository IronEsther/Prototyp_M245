import React, { useState, useEffect } from 'react';
import { getExams } from '../../backend/api';

const ViewOtherPlanners = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExams();
      setExams(data || []);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>View Other Planners</h2>
      {exams.map((exam, index) => (
        <div key={index}>
          <h3>{exam.className}</h3>
          <ul>
            {exam.exams.map((e, idx) => (
              <li key={idx}>
                {e.subject} - {new Date(e.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewOtherPlanners;
