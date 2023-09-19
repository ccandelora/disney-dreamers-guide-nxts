import mongoose from 'mongoose';

const  dbUrl = process.env.MONGO_URI as string;
let connection: typeof mongoose;

export const connectToDatabase = async () => {
  if (!connection) {
    connection = await mongoose.connect(dbUrl);
    return connection;
  }
}