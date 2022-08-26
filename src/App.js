import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { Col, Spin } from 'antd'
import pokedux from './statics/pokedux.svg'
import './App.css';
import './components/PokemonList.css'
import { fetchPokemonsWithDetails } from './slices/dataSlice';


const App = () => {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()


  useEffect(()=> {
    dispatch(fetchPokemonsWithDetails())
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
