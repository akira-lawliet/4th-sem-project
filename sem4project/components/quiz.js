
import { nanoid } from 'nanoid';

const quizs= [
    {
        id: nanoid(),
        classCode: 'CS101',
        subjectName: 'Computer Science',
        subjectCode: 'COMP101',
        link: 'https://example.com/quiz1.pdf',
        deadline: new Date('2023-05-01'),
        description: 'Write a program in Python to implement a binary search algorithm.'
      },
      {
        id: nanoid(),
        classCode: 'PHYS202',
        subjectName: 'Physics',
        subjectCode: 'PHYS201',
        link: 'https://example.com/quiz2.pdf',
        deadline: new Date('2023-05-10'),
        description: 'Derive the equations of motion for a particle in three dimensions using Lagrangian mechanics.'
      },
      {
        id: nanoid(),
        classCode: 'MATH201',
        subjectName: 'Mathematics',
        subjectCode: 'MATH101',
        link: 'https://example.com/quiz3.pdf',
        deadline: new Date('2023-05-15'),
        description: 'Prove that the determinant of an orthogonal matrix is either 1 or -1.'
      }
];

function addQuizs(newQuizs) {
  const newQuizsWithId = {
    ...newQuizs,
    id: nanoid(),

  };
  quizs = [...quizs, newQuizsWithId];
}

// function updateQuizs(id, newQuizs) {
//   const newQuizsWithId = {
//     ...newQuizs,
//     id,
//   };
//   quizs = quizs.map((d) => (d.id === id ? newQuizsWithId : d));
// }

export { quizs, addQuizs, updateQuizs };