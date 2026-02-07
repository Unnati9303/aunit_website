const express = require("express");
const cors = require("cors");
const connectionDB = require("./Connections/database");
const contactRoute = require("./Routes/contactRoute");
const careerRoute = require("./Routes/careerRoute");
let dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(contactRoute);
app.use(careerRoute);

connectionDB();

app.listen(process.env.PORT || 5000);
