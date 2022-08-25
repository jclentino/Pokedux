import { Card } from "antd";
import StarButton from "./StarButton";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";


const PokemonCard = ({ name, image, types, id, favorite })=> {
    const dispatch = useDispatch()

    const handleOnFavorite = ()=> {
        dispatch(setFavorite({ pokemonId: id}))
    }

    return (
        <Card 
            style={{width: 250}} 
            title={name} 
            cover={<img src={image} alt={name} />} 
            extra={<StarButton iseFavorite={favorite} onClick={handleOnFavorite} />}
        >
            <Meta description={<ul>
                {types.map(type => <li key={type.type.name} >{type.type.name}</li>)}
            </ul>} 
            />
        </Card>
    )
}

export default PokemonCard