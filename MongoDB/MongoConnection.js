import mongoose from "mongoose";

const MongoDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://surbhipansuriya772:nfaqgq0qu2dbEtmp@solardb.3lyp9.mongodb.net/solarDB"
    )
    .then(() => console.log("Connected!"));
};

export default MongoDB;
