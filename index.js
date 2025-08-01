const express = require("express");

const app = express();

const port = 5999;

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Ali",
      Dep: "CS",
    },
    {
      id: 2,
      name: "Noman",
      Dep: "CS",
    },
  ]);
});
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
