import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, image, abilities })=> {

    return (
        <Card 
            style={{width: 250}} 
            title={name} 
            cover={<img src={image} alt={name} />} 
            extra={<StarOutlined />}
        >
            <Meta description={abilities.map(ability => ability.ability.name).join(' - ')} />
        </Card>
    )
}

export default PokemonCard