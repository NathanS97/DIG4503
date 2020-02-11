const Express = require("express");
const App = Express();
const port = 80;

App.use("/", Express.static("public"));

App.get("/api/:number", (req, res) => {
  let result = { error: "Not found" };

  if (req.params.number == 5) {
    result = { secret: "You got the secret" };
  }

  res.json(result);
});

App.listen(port, () => {
  console.log("Server running!");
});
