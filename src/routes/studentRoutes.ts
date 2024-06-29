import { Router } from 'express';
import { getStudents, addStudent, updateStudent, deleteStudent } from '../controllers/studentController';

const router = Router();

router.get('/students', getStudents);
router.post('/students', addStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;
