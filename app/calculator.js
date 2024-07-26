const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

// The route for addition
app.get("/add/:x/:y", (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);
  const sum = x + y;
  res.json({ sum: sum });
});

// listening
app.listen(port, () => {
  console.log(`Calculator is ready to be calculated on port ${port}`);
});
