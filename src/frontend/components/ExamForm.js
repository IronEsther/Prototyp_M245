import React, { useState } from 'react';
import { addExam } from '../../backend/api';

const ExamForm = () => {
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !subject) return;
    await addExam({ date, subject,goal });
    setDate('');
    setSubject('');
    setGoal('');
  };

  return (
    <div className="form-container">
      <h2>Add Exam</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Enter goals"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExamForm;
