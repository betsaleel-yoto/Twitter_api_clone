const express = require("express");
const app = express();
const port = 3001;
const users = require("./routes/usersRoutes.js");

app.use("/users", users);

app.listen(port, () => {
  console.log(`le serveur a été démaré avec succès au port ${port}`);
});
