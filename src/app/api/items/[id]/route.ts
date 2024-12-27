import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Student from '@/lib/models/Item';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { name, course, rollNo, batch, timing } = await request.json();
  await connectToDatabase();
  const updatedStudent = await Student.findByIdAndUpdate(
    id,
    { name, course, rollNo, batch, timing },
    { new: true }
  );
  return NextResponse.json(updatedStudent);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectToDatabase();
  await Student.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Student deleted successfully' });
}
