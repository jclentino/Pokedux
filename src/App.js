import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './actions';
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { Col, Spin } from 'antd'
import { getPokemon } from './api';
import pokedux from './statics/pokedux.svg'
import './App.css';
import './components/PokemonList.css'


const App = () => {
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()


  useEffect(()=> {
    dispatch(setLoading(true))
    const fetchPokemons = async ()=> {
      const pokemonsRes = await getPokemon()
      dispatch(getPokemonsWithDetails(pokemonsRes))
      dispatch(setLoading(false))
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
      {
        loading ? 
        <Col offset={12}>
          <Spin spinning size='large'  />
        </Col> :
        <PokemonList pokemons={pokemons} />
      }
      
    </div>
  );
}

export default App
