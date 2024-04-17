import { DirectorSchema } from "../models/Director";
import IDirector from "../models/Director";
import mongoose from "mongoose";

export default class DirectorController {
    private model= mongoose.model('director', DirectorSchema);

    async getAllDirectors() {
        try {
            const directors = await this.model.find();
            console.log(directors)
            return directors;
        } catch (error) {
            console.error('Error retrieving director:', error);
            throw error;
        }
      }
      async getDirectorById(directorId:string) {
        try {
            const director = await this.model.findById(directorId);
            return director;
        } catch (error) {
            console.error('Error retrieving director:', error);
            throw error;
        }
      }
      async addDirector(director:IDirector) {
        let document = new this.model(director);
        try {
            let result = await document.save();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
      }
      async  deleteDirectorById(directorId:string) {
        try {
            const deletedDirector = await this.model.findByIdAndDelete(directorId);
            return deletedDirector;
        } catch (error) {
            console.error('Error deleting director:', error);
            throw error;
        }
      }
      async updateDirectorById(directorId:string, updateData:IDirector) {
        console.log(directorId,updateData);
        try {
            const updatedDirector = await this.model.findByIdAndUpdate(directorId, updateData, { new: true });
            console.log('---------------------')
            console.log(updatedDirector)
            console.log('---------------------')
            return updatedDirector;
        } catch (error) {
            console.error('Error updating director:', error);
            throw error;
        }
      }
}