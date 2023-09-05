import { useContext, useState } from 'react';
import { PokemonList } from '../components/PokemonList.jsx';
import { Context } from '../context/Context';
import { Search } from '../components/Search';
import { SortPokemon } from '../components/SortPokemon.jsx';
import { Types } from '../components/Types';

export const HomePage = () => {
 
  const {onClickLoadMore, onClickOrderByName, onClickOrderByID, scrollToTop, cantPokemons, poke, filteredPokemons, offset } = useContext(Context)
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600){
      setVisible(true)
    } 
    else if (scrolled <= 1500){
      setVisible(false)
    }
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <>
      <div id="pagina-inicio">
        <div className="Top">
          
        </div>
        <div className="Buscador">
          <div className="search-pokemon"><Search/></div>
          <div className="filter"><Types/></div>
        </div>
        <div id="pokedex" className="fondo"> 
          <div id="fondo-pagina-principal-ventana" className="fondo-ventana">
            <div id="fondo-pagina-principal-Pokemones" className="fondo-pokemones">
              <section className="Ordenamiento">
              <p className="encontrados">Encontrados: {cantPokemons}</p>
                <SortPokemon/>
              </section>
              <section>
                <PokemonList/>
              </section>
              <section className="cargar-pokemones">
                {/* <button className="load-more" onClick={onClickLoadMore}>
                  Cargar más pokemon
                </button> */}
                {filteredPokemons.length > offset ? (
                    <button className="load-more" onClick={onClickLoadMore}>
                      Cargar más pokemon
                    </button>
                  ) : (
                    <></>
                  )}
                {filteredPokemons.length === 0 && poke.length > offset ? (
                    <button className="load-more" onClick={onClickLoadMore}>
                      Cargar más pokemon
                    </button>
                  ) : (
                    <></>
                  )}
                <button style={{display: visible ? 'inline' : 'none'}} className="scroll" onClick={scrollToTop}>
                  top
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};