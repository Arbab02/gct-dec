'use client';

import { useEffect, useState } from 'react';

export default function ViewPage() {
  const [students, setStudents] = useState([]);
  const gradientCard = 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-gray-950';

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    setStudents(data);
  };

  return (
    <main className="px-8 pt-28 text-gray-800 min-h-screen bg-[#cbd3cb]">
      <h1 className="text-5xl text-center font-extrabold mb-8 text-gray-800">Students Data</h1>
      {students.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <li
              key={student._id}
              className={`relative overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl ${gradientCard} text-gray-300 p-6 text-lg rounded-lg shadow-lg`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
              <p className="relative text-2xl font-bold mb-3 text-white">{student.name}</p>
              <p className="relative"><strong className="text-yellow-400">Course:</strong> {student.course}</p>
              <p className="relative"><strong className="text-yellow-400">Roll No:</strong> {student.rollNo}</p>
              <p className="relative"><strong className="text-yellow-400">Batch:</strong> {student.batch}</p>
              <p className="relative"><strong className="text-yellow-400">Timing:</strong> {student.timing}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-xl mt-12">No students to display.</p>
      )}
    </main>
  );
}
