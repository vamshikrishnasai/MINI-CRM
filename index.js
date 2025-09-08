const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const authrouters = require("./routes/authRoutes");
require("dotenv").config();
const app = express();
connectDB();

app.use("api/auth", authrouters);
app.use("/api", require("./routes/customersRoutes"));
app.use("/api", require("./routes/leadsRoutes"));
app.use(cors());

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
