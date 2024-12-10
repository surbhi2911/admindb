import mongoose from "mongoose";

const MongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://surbhipansuriya772:nfaqgq0qu2dbEtmp@solardb.3lyp9.mongodb.net/?retryWrites=true&w=majority&appName=solardb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

export default MongoDB;