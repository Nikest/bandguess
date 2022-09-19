import * as Mongoose from 'mongoose';

export async function databaseConnector() {
  try {
    await Mongoose.connect('mongodb+srv://guesstheartistServer:E7dc5agHUNm7vNTP@cluster0.5tju9.mongodb.net/?retryWrites=true&w=majority');
    return 'database connection succeeded';
  } catch (err) {
    console.error(err);
    return 'database connection error';
  }
}
