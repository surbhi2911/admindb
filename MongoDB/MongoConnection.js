import mongoose from "mongoose";

const MongoDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vaishalitankonly4loginsites:v1a2i3s4h5a6l7i8@blooddata.vpp2o.mongodb.net/SolarDb"
    )
    .then(() => console.log("Connected!"));
};

export default MongoDB;