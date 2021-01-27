const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  users.push(user);
  res.json(users);
});

const port = 4000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
