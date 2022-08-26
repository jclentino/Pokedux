import { combineReducers } from "redux-immutable";
import { pokemonsReducer } from "./pokemons";
import { loadingReducer } from "./ui";

const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: loadingReducer
})

export default rootReducer