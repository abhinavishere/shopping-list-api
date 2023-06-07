require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 4545;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App started");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
