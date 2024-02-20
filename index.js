const express = require("express");
const app = express();
const port = 3002;
const tweets = require("./routes/TweetsRoutes.js");
const users = require("./routes/usersRoutes.js");
const path = require("path");
const like=require('./routes/likesRoutes.js')
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5174'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "controllers", "uploads")));

app.use("/users", users);
app.use("/tweets", tweets);
app.use('/tweets',like)
app.listen(port, () => {
  console.log(`le serveur a été démaré avec succès au port ${port}`);
});
