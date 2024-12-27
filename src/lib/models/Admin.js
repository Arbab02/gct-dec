import mongoose, { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed passwords
});

const Admin = models.Admin || model('Admin', AdminSchema);

export default Admin;
