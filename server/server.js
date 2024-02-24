const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/api", (req, res) => {
  res.json({ message: "Hello World From Express!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
