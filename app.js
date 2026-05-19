require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Express Learning Project</h1>
    <p>This project combines my Node.js and Express.js practice assignments.</p>

    <form action="/create-user" method="POST">
      <input type="text" name="username" placeholder="Enter username" required>
      <button type="submit">Create User</button>
    </form>

    <br>
    <a href="/users">View Users</a>
  `);
});

app.get("/users", (req, res) => {
  res.send(`
    <h1>Users</h1>

    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>

    <a href="/">Back to Home</a>
  `);
});

app.post("/create-user", (req, res) => {
  const username = req.body.username;

  console.log("New user:", username);

  res.send(`
    <h1>User Created</h1>
    <p>Username: ${username}</p>
    <a href="/">Back to Home</a>
  `);
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <a href="/">Back to Home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
