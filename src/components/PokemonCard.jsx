import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ()=> {
    return (
        <Card 
            style={{width: 250}} 
            title="Ditto" 
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto" />} 
            extra={<StarOutlined />}
        >
            <Meta description="fire, magic" />
        </Card>
    )
}

export default PokemonCard