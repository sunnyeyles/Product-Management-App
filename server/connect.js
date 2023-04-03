import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// create connection to DB
export const connectDataBase = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lexrc0z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  mongoose.connection.once("open", () => console.log("Connected!"));
  mongoose.connection.on("error", (err) => console.log(err.message));
};
