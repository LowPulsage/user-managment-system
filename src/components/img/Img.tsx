import { StyledImg } from "./Img.styles"


interface IImg {
    src: string
}

const Img: React.FC<IImg> = props => {
    return <StyledImg {...props} />
}

export default Img