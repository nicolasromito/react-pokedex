
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchPokemon } from "../api/Api";
// import Top from "./top/Top.js";
// import Moves from "../items/Moves";
import Class from "../components/Class";
// import Stats from "../items/Stats";

function PokemonDetails() {
  const { ID } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon();
  }, [ID]);

  const getPokemon = async () => {
    const result = await searchPokemon(ID);
    setPokemon(result);
    return;
  };

  if (!pokemon) {
    return null;
  }
  
  const moves = pokemon.moves
  const types = pokemon.types
  const stats = pokemon.stats
  // const listItems = moves.map((move) =>
  return (
    <div>
        <div>
            {/* <Navbar /> */}
        </div>
        <div className="page">
            {/* <div>
                <Top />
            </div> */}
            <div className="white">
                <p className="nombre">{pokemon.name}</p>
                <div>
                    <img
                    className="pokemon-img"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    />
                    <table className="tabla">>
                        <div >
                            {types.map((type, idx) => {
                            return <Class type={type} key={type.name} />;
                            })}
                        </div>
                        <p className="text">
                            <strong>habilidades:</strong>
                        </p>
                        {/* <div>
                            <div className="moves">
                            {moves.map((move, idx) => {
                                return <Moves move={move} key={move.name} />;
                            })}
                            </div>
                        </div>
                
                        <p className="text">
                            <strong>Stats:</strong>
                        </p>
                        <div>
                            <div >
                            {stats.map((stat, idx) => {
                                return <Stats stat={stat} key={stat.name} />;
                            })}
                            </div>
                        </div> */}
                    </table>          
                </div>
            </div>
        </div>
    </div>
  );
}

export default PokemonDetails;
