import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://erdldncr:Erdldncr.1903@ebuy.ra9ln.mongodb.net/ebuy?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message} `.red.bold);
    process.exit(1);
  }
};

export default connectDB;
