const connectDB = require("./db/connect");
require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/error");
const app = express();

// middleware

app.use(express.json());
app.use(express.static("../public"));
const tasks = require("./routes/tasks");

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO DB......");
    app.listen(port, console.log(`server is listning on port on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
