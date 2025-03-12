import mongoose  from "mongoose";

mongoose.connect();

const mongodb = mongoose.connection

export default mongodb;