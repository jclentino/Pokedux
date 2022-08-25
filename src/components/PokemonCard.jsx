import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, image, types })=> {

    return (
        <Card 
            style={{width: 250}} 
            title={name} 
            cover={<img src={image} alt={name} />} 
            extra={<StarOutlined />}
        >
            <Meta description={<ul>
                {types.map(type => <li key={type.type.name} >{type.type.name}</li>)}
            </ul>} 
            />
        </Card>
    )
}

export default PokemonCard