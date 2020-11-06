const express = require("express");
const jokeRoutes = require("./routes/jokes.routes");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }))

jokeRoutes(app);

app.listen( port,() => console.log(`Listening on port ${port}`));

