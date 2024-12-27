'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignedIn, useAuth } from '@clerk/nextjs';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: '',
    course: '',
    rollNo: '',
    batch: '',
    timing: '',
  });
  const [editingId, setEditingId] = useState(null);

  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/login');
    }
  }, [isSignedIn, router]);

  const fetchStudents = async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    if (isSignedIn) {
      fetchStudents();
    }
  }, [isSignedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`/api/items/${editingId}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });
      setEditingId(null);
    } else {
      await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });
    }
    setForm({ name: '', course: '', rollNo: '', batch: '', timing: '' });
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm({
      name: student.name,
      course: student.course,
      rollNo: student.rollNo,
      batch: student.batch,
      timing: student.timing,
    });
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    fetchStudents();
  };

  return (
    <SignedIn>
      <main className="px-8 pt-28">
        <h1 className="text-3xl text-center text-gray-800 font-bold mb-4">Admin Panel</h1>
        <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Roll No"
            value={form.rollNo}
            onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Batch"
            value={form.batch}
            onChange={(e) => setForm({ ...form, batch: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Timing"
            value={form.timing}
            onChange={(e) => setForm({ ...form, timing: e.target.value })}
            className="border p-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 col-span-1 md:col-span-2">
            {editingId ? 'Update' : 'Add'}
          </button>
        </form>
        <ul>
          {students.map((student) => (
            <li
              key={student._id}
              className="mb-2 border p-4 rounded shadow-lg flex justify-between"
            >
              <div>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Roll No:</strong> {student.rollNo}</p>
                <p><strong>Batch:</strong> {student.batch}</p>
                <p><strong>Timing:</strong> {student.timing}</p>
              </div>
              <div className="flex space-x-2 flex-row">
                <button
                  onClick={() => handleEdit(student)}
                  className="text-yellow-500 text-lg  px-4 py-1 "
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="text-red-500 text-lg  px-4 py-1"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </SignedIn>
  );
}
