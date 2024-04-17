import { FilmSchema } from "../models/Film";
import IFilm from "../models/Film";
import mongoose from "mongoose";

export default class FilmController {
    private model= mongoose.model('Film', FilmSchema);

    async getAllFilms() {
        try {
            const Films = await this.model.find();
            console.log(Films)
            return Films;
        } catch (error) {
            console.error('Error retrieving Film:', error);
            throw error;
        }
      }
      async getFilmById(FilmId:string) {
        try {
            const Film = await this.model.findById(FilmId);
            return Film;
        } catch (error) {
            console.error('Error retrieving Film:', error);
            throw error;
        }
      }
      async addFilm(Film:IFilm) {
        let document = new this.model(Film);
        try {
            let result = await document.save();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
      }
      async  deleteFilmById(FilmId:string) {
        try {
            const deletedFilm = await this.model.findByIdAndDelete(FilmId);
            return deletedFilm;
        } catch (error) {
            console.error('Error deleting Film:', error);
            throw error;
        }
      }
      async updateFilmById(FilmId:string, updateData:IFilm) {
        console.log(FilmId,updateData);
        try {
            const updatedFilm = await this.model.findByIdAndUpdate(FilmId, updateData, { new: true });
            console.log('---------------------')
            console.log(updatedFilm)
            console.log('---------------------')
            return updatedFilm;
        } catch (error) {
            console.error('Error updating Film:', error);
            throw error;
        }
      }
}