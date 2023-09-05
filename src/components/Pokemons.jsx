import { Link } from "react-router-dom";
import Class from "./Class";

export const Pokemons = ({ pokemon }) => {

  const IDPokemon = "pokemon-pantalla-inicial-" + pokemon.id
  
  return (
    <li className="elemento-lista-pokemon">
      <div> 
        <Link to={"pokemon/" + pokemon.name} id={IDPokemon}>
          <div className="fondo-imagen-pokemon">
            <img className="imagen-pokemon"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </div>
        </Link>
      </div>
      <div>
        <p className="numero-pokemon">
          n.°{pokemon.id}
        </p>
        <p className="nombre-pokemon">
          {pokemon.name}
        </p>
        <div className="class-block">
            {pokemon.types.map((type, idx) => {
              return <Class type={type} key={idx} />;
            })}
        </div>
      </div>
    </li>
  );
};