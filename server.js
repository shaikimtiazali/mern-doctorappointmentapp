const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//dotenv config
dotenv.config();

//rest object
app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({ message: "server running" });
});

//Listen port
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan
      .white
  )
);
