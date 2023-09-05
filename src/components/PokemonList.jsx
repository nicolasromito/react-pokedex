import React, { useContext} from 'react';
import { Context } from '../context/Context';
import { Pokemons } from "./Pokemons";

export const PokemonList = () => {
	
  const { poke, filteredPokemons, typeSelected, offset, loading, onClickLoadMore } = useContext(Context);

  return (
    <>
    {/* Cargando pokemones... */}
      {loading ? (
        <div className="loading">
        <span></span>
        </div>
      ) : (
        <div>
					{filteredPokemons.length || !(typeSelected.grass==false && typeSelected.normal== false && typeSelected.fighting== false && typeSelected.flying== false && typeSelected.poison== false && typeSelected.ground== false && typeSelected.rock== false && typeSelected.bug== false && typeSelected.ghost== false && typeSelected.steel== false && typeSelected.fire== false && typeSelected.water== false && typeSelected.electric== false && typeSelected.psychic== false && typeSelected.ice== false && typeSelected.dragon== false && typeSelected.dark== false && typeSelected.fairy== false && typeSelected.unknow== false && typeSelected.shadow== false) ? (
            <ul id="grid-pokemones" className="grid">
              {filteredPokemons.slice(0,offset).map((pokemon, idx) => {
                 return <Pokemons pokemon={pokemon} key={idx} />;
              })}
            </ul>
					) : (
            <ul id="grid-pokemones" className="grid">
              {poke.slice(0,offset).map((pokemon, idx) => {
                return <Pokemons pokemon={pokemon} key={idx} />;
              })}
            </ul>
					)}
				</div>
      )}    
    </>
  );
};