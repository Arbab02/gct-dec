'use client';

import { useState } from 'react';

export default function StudentForm() {
  const [form, setForm] = useState({
    name: '',
    course: '',
    rollNo: '',
    batch: '',
    timing: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Thank you for submitting!');
        setForm({ name: '', course: '', rollNo: '', batch: '', timing: '' });
      } else {
        console.error('Failed to submit data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="px-8 pt-28">
      <h1 className="text-5xl text-gray-800 text-center font-bold mb-8">Student Registration</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 col-span-1 md:col-span-2"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
