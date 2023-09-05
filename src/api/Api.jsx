export const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log("error1")}
  };
  export const getPokemons = async (limit = 12, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log("error2")}
  };

  export const PokemonsTypes = async (limit = 12, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/type?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log("error3")}
  };

  export const getType = async (type, limit = 12, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/type/${type}?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log("error4")}
  };
  
  export const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log("error5")}
  };

  export const getAllPokemons = async () => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {console.log("error6")}
  };