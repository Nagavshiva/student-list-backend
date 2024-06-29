import mongoose,{Document,Schema} from "mongoose";

interface IStudent extends Document{
    name: string;
    email: string;
    phoneNumber: string;
    enrollNumber: string;
    dateOfAdmission: Date;
}

const studentSchema : Schema = new Schema({
    name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  enrollNumber: { type: String, required: true, unique: true },
  dateOfAdmission: { type: Date, required: true },
})

const Student = mongoose.model<IStudent>('Student', studentSchema);

export default Student;