const Express = require('express');
const App = Express();
const port = 80;

const fs = require('fs');

let fileContents = fs.readFileSync('database.json');

let database = JSON.parse(fileContents);

App.use('/', Express.static('public'));

App.get('/api/movies/name/:name', (req, res) => {
  let result = { error: 'Not found' };

  database.forEach(value => {
    if (req.params.number == value.name) {
      result = value;
    }
  });

  res.json(result);
});

App.get('/api/movies/score/:score', (req, res) => {
  let result = { error: 'Not found' };

  database.forEach(value => {
    if (req.params.score == value.score) {
      result = value;
    }
  });

  res.json(result);
});

/*App.get("/api/:number", (req, res) => {
  let result = { error: "Not found" };

  if (req.params.number == 5) {
    result = { secret: "You got the secret" };
  }

  res.json(result);
});*/

App.post('/api/movies/:name/:score', (req, res) => {
  let result = {
    name: req.params.name,
    score: parseInt(req.params.score)
  };

  database.push(result);
  fs.writeFileSync('database.json', JSON.stringify(database, null, '/t'));

  res.join(result);
});

App.patch('/api/movies/:name/:score', (req, res) => {
  let result = { error: 'Not found' };

  database.forEach(value => {
    if (req.params.score == value.score) {
      result = value;
    }
  });

  fs.writeFileSync('database.json', JSON.stringify(database, null, '/t'));

  res.join(result);
});

App.listen(port, () => {
  console.log('Server running!');
});
