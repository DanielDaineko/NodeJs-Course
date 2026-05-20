require("dotenv").config();

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const users = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add-user", (req, res) => {
  const username = req.body.username;

  if (username) {
    users.push(username);
  }

  res.redirect("/users");
});

app.get("/users", (req, res) => {
  res.render("users", {
    users: users,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
