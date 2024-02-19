const { default: mongoose } = require("mongoose");

const connection = {};
export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Mongo DB is Active");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log('Database Connected')
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
