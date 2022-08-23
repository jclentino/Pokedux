import { useEffect, useState } from 'react';
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { Col } from 'antd'
import { getPokemon } from './api';
import pokedux from './statics/pokedux.svg'
import './App.css';
import './components/PokemonList.css'


function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
    const fetchPokemons = async ()=> {
      const pokemonsRes = await getPokemon()
      setPokemons(pokemonsRes)
    }

    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={pokedux} alt='pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
