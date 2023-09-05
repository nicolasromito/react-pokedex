import { useEffect, useState, useMemo } from 'react';
import { useForm } from '../hook/useForm';
import { Context } from './Context';
import { getPokemons, getPokemonData, getAllPokemons } from '../api/Api';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export const Provider = ({ children }) => {

  const [poke, setPoke] = useState([]);
  const [pokeAll, setPokeAll] = useState([]);
  const [cantPokemons, setCantPokemons] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState("Mostrar busqueda avanzada");
  const [filterTypeIcon, setFilterTypeIcon] = useState(<FaCaretDown />);
  const [filterIcon, setFilterIcon] = useState(<FaCaretDown />);
  const [offset, setOffset] = useState(12);
  const [filterActive, setFfilterActive] = useState(false);

  const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

  const [typeSelect, setTypeSelect] = useState([
		{
      name:"grass",
      active: false
    },
    {
      name:"normal",
      active: false
    },
    {
      name:"fighting",
      active: false
    },
    {
      name:"flying",
      active: false
    },
    {
      name:"poison",
      active: false
    },
    {
      name:"ground",
      active: false
    },
    {
      name:"rock",
      active: false
    },
    {
      name:"bug",
      active: false
    },
    {
      name:"ghost",
      active: false
    },
    {
      name:"steel",
      active: false
    },
    {
      name:"fire",
      active: false
    },
    {
      name:"water",
      active: false
    },
    {
      name:"electric",
      active: false
    },
    {
      name:"psychic",
      active: false
    },
    {
      name:"ice",
      active: false
    },
    {
      name:"dragon",
      active: false
    },
    {
      name:"dark",
      active: false
    },
    {
      name:"fairy",
      active: false
    },
    {
      name:"unknow",
      active: false
    },
    {
      name:"shadow",
      active: false
    }
  ]);
  const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

 
	const [filteredPokemons, setfilteredPokemons] = useState([]);
  const [filteredPokemons1, setfilteredPokemons1] = useState([]);
  const [types, setTypes] = useState(null);
  const [contTypes, setContTypes] = useState(0);

  const getGlobalPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=100000&offset=0`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});

		const results = await Promise.all(promises);
    setPoke(results);
    setPokeAll(results)
    setCantPokemons(results.length);
		setLoading(false);
  };

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  useEffect(() => {
    if(cantPokemons === 0){
      setCantPokemons(pokeAll.length);
    }
  }, [cantPokemons]);

  const onClickLoadMore = () => {
    setOffset(prevState => prevState + 12);
  };

  const NumberAsc = () => {
    setOffset(12);
    const sortedPokemonsByID = [...pokeAll].sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    setPoke(sortedPokemonsByID)
    setCantPokemons(sortedPokemonsByID.length)
  };

  const NumberDesc = () => {
    setOffset(12);
    const sortedPokemonsByID = [...pokeAll].sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))
    setPoke(sortedPokemonsByID)
    setCantPokemons(sortedPokemonsByID.length)
  };

  const NameAsc = () => {
    setOffset(12);
    const sortedPokemonsByName = [...pokeAll].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    setPoke(sortedPokemonsByName)
    setCantPokemons(sortedPokemonsByName.length)
  };

  const nameDesc = () => {
    setOffset(12);
    const sortedPokemonsByName = [...pokeAll].sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0))
    setPoke(sortedPokemonsByName)
    setCantPokemons(sortedPokemonsByName.length)
  };

  const onClickSearch = () => {
    setOffset(12);
    const PokemonsByName = [...pokeAll].filter(a => a.name.includes(valueSearch));
    setPoke(PokemonsByName)
    setCantPokemons(PokemonsByName.length)
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 200, 
      behavior: 'smooth'
    });
  };
  
  const openTypeSelector = () => {
    if(filterText === "Mostrar busqueda avanzada"){
      setFilterText("Ocultar busqueda avanzada")
      setFilterTypeIcon(<FaCaretUp />)
    }else{
      setFilterText("Mostrar busqueda avanzada")
      setFilterTypeIcon(<FaCaretDown />)
    }
    
    setOffset(12);
  };

  const openFilter = () => {
    if(filterActive){
      setFfilterActive(false)
      setFilterIcon(<FaCaretUp />)
    }else{
      setFfilterActive(true)
      setFilterIcon(<FaCaretDown />)
    }
    
    setOffset(12);
  };

  const handleCheckbox = e => {

    const newType = typeSelect.map(type => {
      if (type.name === e.target.name) {
        if(type.active === true){
        }
        return {...type, active: e.target.checked};
      }
      return type;
    });
    
    setTypeSelect(newType)

    var filteredTotal = [];

    newType.forEach(type => {
      if(type.active){
        const filteredResults = pokeAll.filter(pokemon =>
          pokemon.types
            .map(type => type.type.name)
            .includes(type.name)
        );
        filteredTotal = filteredTotal.concat(filteredResults)
      }
    }); 
    setfilteredPokemons(filteredTotal.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)))
    setCantPokemons(filteredTotal.length)
  };
  
  useEffect(() => {
    if(filteredPokemons.length == 0){
      setOffset(12);
    }
  }, [filteredPokemons]);

  return (
    <Context.Provider
			value={{
        filterText,
        filterTypeIcon,
        filterIcon,
        typeSelected,
        offset,
				valueSearch,
				onInputChange,
				onResetForm,
        cantPokemons,
        poke,
				onClickLoadMore,
        // Ordenamiento
        NumberAsc,
        NumberDesc,
        NameAsc,
        nameDesc,
        //
        onClickSearch,
        openTypeSelector,
				// Loader
				loading,
				setLoading,
				// Btn Filter
        openFilter,
        scrollToTop,
				// Filter Container Checkbox
				handleCheckbox,
				filteredPokemons,
			}}
		>
			{children}
		</Context.Provider>
  );
};