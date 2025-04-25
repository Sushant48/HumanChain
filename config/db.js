import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDb;