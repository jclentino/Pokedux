import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsWithDetails } from './actions';
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { Col } from 'antd'
import { getPokemon } from './api';
import pokedux from './statics/pokedux.svg'
import './App.css';
import './components/PokemonList.css'


const App = () => {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()


  useEffect(()=> {
    const fetchPokemons = async ()=> {
      const pokemonsRes = await getPokemon()
      dispatch(getPokemonsWithDetails(pokemonsRes))
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

export default App
