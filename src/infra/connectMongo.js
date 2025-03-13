import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const mongodb = mongoose.connection;

export default mongodb;