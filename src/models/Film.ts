import { DirectorSchema } from './Director'
import IDirector from './Director'
import mongoose from 'mongoose';
export default interface IFilm { 
title: string; 
releaseYear: number; 
genre: string; 
directors: IDirector[];
}
export const FilmSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    genre: String,
    directors: [DirectorSchema],
  });

