import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import "express-async-errors"; 
import router from './router.js';
import errorHandler from "./middlewares/errorMiddLeware.js";

dotenv.config(); 

const PORT = process.env.PORT || 5000;

const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use ('/api', router)

app.get('/', (req,res) => {
  res.status(200).json('Server working')
})

app.use(errorHandler);


async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server startet on Port ` + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp();

