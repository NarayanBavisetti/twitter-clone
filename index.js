const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("db connected successfully "))
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hi bro!!!!!");
});

app.listen(PORT, () => console.log(`PORT started at ${PORT}`));
