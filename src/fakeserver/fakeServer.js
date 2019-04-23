const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const testLogin = "test@email.ru";
const testPassword = "testTEST2*";
const accessToken = "access_token";
const refreshToken = "refresh_token";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/registration", (req, res) => {
  res.json({
    email: testLogin,
    firstName: "Dmitry",
    lastName: "Hot",
    password: testPassword,
    phone: "+375291235813"
  });
});

app.post("/api/login", (req, res) => {
  if (req.body.email === testLogin && req.body.password === testPassword) {
    res.json({
      email: testLogin,
      name: "Andre",
      surname: "Chanavat",
      token_type: "test",
      access_token: accessToken,
      refresh_token: refreshToken
    });
  } else {
    res.status(500).send({ message: "Wrong login or password" });
  }
});

app.get("/api/protected_quote", (req, res) => {
  res.json({
    access_token: "nika22222",
    refresh_token: "1111111111"
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Example app listening on port 3000!");
});
