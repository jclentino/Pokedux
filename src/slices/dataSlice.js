import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice'
import { getPokemon, getPokemonDetail } from '../api'

const initialState = {
    pokemons: [],
    search: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemons = await getPokemon()
        const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetail(pokemon)))
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLoading(false))   
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state,action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {
            const pokemonIndex = state.pokemons
                .findIndex(pokemon => pokemon.id === action.payload.pokemonId)

            if (pokemonIndex >= 0){
                const isFavorite = state.pokemons[pokemonIndex].favorite
                state.pokemons[pokemonIndex].favorite = !isFavorite  
            }
        },
        setSearch: (state, action) => {
            state.search = state.pokemons.filter(poke => poke.name.includes(action.payload))
        }
    }
})

export const { setPokemons, setFavorite, setSearch } = dataSlice.actions

export default dataSlice.reducer