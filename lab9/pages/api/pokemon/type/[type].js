import pokemon from 'json-pokemon';

function response(req, res) {
  let result = { "error": "That type doesnt exist" };

  let type = req.query.type;

  let results = [];

  for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i]);
    for (let j = 0; j < pokemon[i].typeList.length; j++) {

      if (pokemon[i].typeList == type) {
        results.push(pokemon[i].typeList);
        console.log(pokemon[i]);

      } else if (result.length > 1) {
        res.json(result.error);
      }

      res.json(results);
    }
  }
}

export default response;