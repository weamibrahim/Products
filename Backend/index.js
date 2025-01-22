const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const PORT = process.env.PORT ;

const mongoURI = process.env.MONGO_URI;



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const userRoute = require("./Routes/userRoute");
app.use("/user", userRoute);


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});



app.get("/", (req, res) => {
  res.send("Hello backend!");
});

app.listen(PORT, () => {
  console.log(`Server is up : http://localhost:${PORT}`);
});

module.exports = app;