const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");

const path = require("path");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload());

//routes
const user = require("./routes/userRoute.js");
//const locationRoutes = require("./routes/locationRoutes");

// Use the location routes
//app.use("/api", locationRoutes);
app.use("/api", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
