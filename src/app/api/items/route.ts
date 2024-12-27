import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Student from '@/lib/models/Item';

export async function GET() {
  await connectToDatabase();
  const students = await Student.find({});
  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const { name, course, rollNo, batch, timing } = await request.json();
  await connectToDatabase();
  const newStudent = await Student.create({ name, course, rollNo, batch, timing });
  return NextResponse.json(newStudent);
}
