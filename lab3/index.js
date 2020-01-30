//Order is important in Express, requests are read from top to bottom

const Express = require("express");
const App = Express();
const port = 80;

//App.use(Express.static("static"));

App.use("/public", Express.static("public"));

App.get("/", function(req, res) {
  res.send("Hello World!");
});

App.listen(port, function() {
  console.log("Server running!");
});
