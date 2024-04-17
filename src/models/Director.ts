import mongoose from 'mongoose';
export default interface IDirector { 
    name: string; 
    birthDate: Date; 
    biography: string;
    }
export const DirectorSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    biography: String
  });

