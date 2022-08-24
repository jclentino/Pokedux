export const logger = (store) => (next) => (action)=> {
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const  featured = [{ name: 'jclentino'}, ...actionInfo.action.payload]
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    }
    next(updatedActionInfo)
}

export const myMiddleware = (store) => (next) => (actionInfo) => {
    const alphabetPokemon = actionInfo.action.payload.map(poke => poke.name).sort()
    const pokemonPayload = actionInfo.action.payload.map((poke, index) => ({ ...poke, name: alphabetPokemon[index] }))

    const myFormatPokemon = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: pokemonPayload}       
    }

    // console.log(myFormatPokemon)
    next(myFormatPokemon)
}