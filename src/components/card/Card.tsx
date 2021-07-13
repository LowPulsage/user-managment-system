import { CardWrapper } from "./Card.styles"

interface ICardProps  {
    onClick?: (prop?: any) => void
}

const Card: React.FC<ICardProps> = (props) => {
    return <CardWrapper onClick={props.onClick}>
            {props.children}
    </CardWrapper>
}

export default Card