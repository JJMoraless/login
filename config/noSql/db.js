import mongoose from "mongoose";

export const connectDb = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI);
    console.log("********* conexion exitosa 👽 *********");
  } catch (error) {
    console.log("*************** conexion fallida 💀 ***************");
    console.log(error);
  }
};
