// backend/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Update with your backend URL
});

export const addExam = async (exam) => {
  try {
    const response = await api.post('/exams', exam);
    return response.data;
  } catch (error) {
    console.error('Error adding exam:', error);
  }
};


export const registerClass = async (className) => {
  try {
    const response = await api.post('/classes', { className });
    return response.data;
  } catch (error) {
    console.error('Error registering class:', error);
  }
};

export const getExams = async () => {
  try {
    const response = await api.get('/exams');
    return response.data;
  } catch (error) {
    console.error('Error getting exams:', error);
  }
};

export const getClasses = async () => {
  try {
    const response = await api.get('/classes');
    return response.data;
  } catch (error) {
    console.error('Error getting classes:', error);
  }
};
