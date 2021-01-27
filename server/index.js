const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users/register", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  if (users.some((user) => user.email === req.body.email) === false) {
    users.push(user);
    res.json({ message: "user added", code: 200 });
  } else {
    res.send("user already exists in database");
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
