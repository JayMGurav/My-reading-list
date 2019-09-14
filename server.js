const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

//mongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/BookAuthors", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once("open", () => console.log("MongoDB connected :)"));
db.on("error", () => console.error("There is error in connecting to mongoDB"));

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    graphiql: true
  })
);

app.listen(3000, () => console.log("http://localhost:3000"));
