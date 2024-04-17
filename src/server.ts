import express, { Express, Request, Response} from 'express';
import DirectorRoutes from './routes/DirectorRoutes';
import FilmRoutes from './routes/FilmRoutes';
import SessionRoutes from './routes/SessionRoutes';

const app: Express = express()


const PORT = 3002

const mongoose = require('mongoose');
const uri = "mongodb+srv://userLB:5un0gNeyRDl6e3np@cinema.law54hy.mongodb.net/?retryWrites=true&w=majority&appName=cinema";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
    console.log(error,'error')
  }
}
run().catch(console.dir);


app.use(express.json())
app.use('/api/films', FilmRoutes)
app.use('/api/directors', DirectorRoutes)
app.use('/api/sessions', SessionRoutes)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})




