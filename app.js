const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const morgan = require("morgan");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
//middleware...
app.use(express.static("./public"));
app.use(express.json()); //this express.json is middleware as it stands b/w request and response ..//data from the body is added to the req

app.use("/api/v1/tasks", tasks);
//404--notFound
app.use(notFound);
//crud-operations routes

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("😍 DB SUCCESSFULLY CONNECTED\n----------------------------");
    app.listen(port, () => {
      console.log(`🤩 App is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
