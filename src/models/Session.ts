import { FilmSchema } from './Film'
import IFilm from './Film'
import mongoose from 'mongoose';

export default interface ISession { 
    film: IFilm; 
    date: Date; 
    time: string; 
    availableSeats: number;
    }
export const SessionSchema = new mongoose.Schema({

    film: FilmSchema,
    date: Date, 
    time: String, 
    availableSeats: Number,
  });

