const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    const MGdb = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `${MGdb.connection.host}:${MGdb.connection.port}`;
    console.log(`MongoDB conectado en ${url}`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

module.exports = {
  dbconn: conectarDB,
};
