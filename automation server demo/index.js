const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/receive-data", (req, res) => {
  const data = req.body;

  console.log(data);

  // Process the data here (e.g., save it to a database)

  // Send success message back to Server1
  res.status(200).send("Data processed successfully by Server2");
});

app.get("/", async (req, res) => {
  res.send({ message: " automation  server is running !!!!" });
});

app.listen(port, () => {
  console.log(`Server2 listening at http://localhost:${port}`);
});
