const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const redisClient = require("./storage/redis");
const fontRouter = require("./router/font");
const userRouter = require("./router/user");

const { MONGO_URI, MODE, PORT } = require("./utils/constEnv");

// App setup
dotenv.config();
const app = express();

// Middlewares
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

// Routes
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/api/font", fontRouter);
app.use("/api/user", userRouter);

// Connection
async function startServer() {
  try {
    // Database Connection
    mongoose.set("strictQuery", false);

    mongoose.connect(
      MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Mongodb is connected!");
      }
    );
  } catch (e) {
    console.log("Error Occurred in Mongo!");
  }

  try {
    await redisClient.connect(MODE).then(() => {
      console.log("Redis server started!");
    });
  } catch (e) {
    console.log("Error Occurred in Redis!");
  } finally {
    app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
  }
}

startServer();
