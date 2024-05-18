import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("mongoDB is connected");
    return true;
  } catch (error) {
    throw error;
  }
};

export default connectionDB;
