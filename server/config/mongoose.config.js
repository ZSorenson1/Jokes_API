const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Established database connection"))
.catch(err => console.log("There was an issue connecting to the database", err))
