import { Request, Response } from 'express';
import Student from '../models/studentModel';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred.' });
    }
}
};

export const addStudent = async (req: Request, res: Response) => {
  const { name, email, phoneNumber, enrollNumber, dateOfAdmission } = req.body;
  const newStudent = new Student({ name, email, phoneNumber, enrollNumber, dateOfAdmission });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred.' });
    }
}
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, phoneNumber, enrollNumber, dateOfAdmission } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, enrollNumber, dateOfAdmission },
      { new: true }
    );
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json(updatedStudent);
  } catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred.' });
    }
}
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred.' });
    }
}
};
