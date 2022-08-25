import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Button } from 'antd'

const StarButton = ({ iseFavorite, onClick })=> {
    const Icon = iseFavorite ? StarFilled : StarOutlined
    
    return <Button icon={<Icon/>} onClick={onClick}>

    </Button>
}

export default StarButton