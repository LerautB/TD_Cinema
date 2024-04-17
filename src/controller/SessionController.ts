import { SessionSchema } from "../models/Session";
import ISession from "../models/Session";
import mongoose from "mongoose";

export default class SessionController {
    private model= mongoose.model('session', SessionSchema);

    async getAllSessions() {
        try {
            const Sessions = await this.model.find();
            console.log(Sessions)
            return Sessions;
        } catch (error) {
            console.error('Error retrieving Session:', error);
            throw error;
        }
      }
      async getSessionById(SessionId:string) {
        try {
            const Session = await this.model.findById(SessionId);
            return Session;
        } catch (error) {
            console.error('Error retrieving Session:', error);
            throw error;
        }
      }
      async addSession(Session:ISession) {
        let document = new this.model(Session);
        try {
            let result = await document.save();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
      }
      async  deleteSessionById(SessionId:string) {
        try {
            const deletedSession = await this.model.findByIdAndDelete(SessionId);
            return deletedSession;
        } catch (error) {
            console.error('Error deleting Session:', error);
            throw error;
        }
      }
      async updateSessionById(SessionId:string, updateData:ISession) {
        console.log(SessionId,updateData);
        try {
            const updatedSession = await this.model.findByIdAndUpdate(SessionId, updateData, { new: true });
            console.log('---------------------')
            console.log(updatedSession)
            console.log('---------------------')
            return updatedSession;
        } catch (error) {
            console.error('Error updating Session:', error);
            throw error;
        }
      }
}