import getPokemon from 'json-pokemon/getPokemon';

function response(req, res) {
  for (let i = 0; i < getPokemon.length; i++) {
    for (let k = 0; getPokemon[i].typeList.length; k++) {

      let result = { "error": "No Pokemon exists with that type" };

      let pokemon = getPokemon.getPokemonByType(req.query.type);

      if (pokemon == getPokemon[i].typeList.length) {
        result = pokemon;
      }
    }
  }
}

export default response;