const express = require("express");
const app = express();
const port = 3002;
const tweets = require("./routes/TweetsRoutes.js");
const users = require("./routes/usersRoutes.js");

app.use(express.json());

app.use("/users", users);
app.use("/tweets", tweets);
app.listen(port, () => {
  console.log(`le serveur a été démaré avec succès au port ${port}`);
});
