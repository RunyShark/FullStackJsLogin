const server = require("./src/app.js");

const { dbconn } = require("./src/DB/db.js");

const PORT = process.env.PORT || 4000;
dbconn();
server.listen(PORT, () => {
  console.log(`Server corriendo puerto: ${PORT}`);
});
