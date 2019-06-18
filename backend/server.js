const express = require("express");
const app = express();
const PORT = 5000;
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => res.send("API RUNNING!"));

app.listen(PORT, () => console.log(`Server started on ${PORT}!`));
