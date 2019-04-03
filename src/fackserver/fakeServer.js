const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.post("/login", function(req, res) {
  res.json({ email: "andreC@gmail.com", name: "Andre", surname: "Chanavat" });
  // res.status(500).end("Something broke!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
