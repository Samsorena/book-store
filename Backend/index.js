import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

import cors from "cors";

//Middleware for handeling CORS policy
//Option 1 : Allow all  Origins with default  of cors(*)

app.use(cors());

//Option 2: Allow Custum Origins
/*app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeathers: ["Content-Tpe"],
  })
);*/

//app.use(bodyParser.urlencoded({ extended: true }));

//Middleware for parsing request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
  //  console.log(req);
  //return res.status(234).send("Welcome to the project");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
