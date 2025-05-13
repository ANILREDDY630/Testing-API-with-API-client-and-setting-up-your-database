const express = require("express");
const connectDB = require("./db");
const itemRoutes = require("./routes/itemRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


connectDB();


app.use("/items", itemRoutes);


app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
