import Title from "@components/title/Title"
import Card from "@components/card/Card"
import Column from "@components/column/Column"
import Wrapper from "@components/layout/wrapper/Wrapper"
import { getGroups } from "@store/groups/groups.selectors"
import { useSelector } from "react-redux"


const Groups:React.FC = props => {
    const groups = useSelector(getGroups)

    return <Wrapper>
        {
            groups.map(group => {
                return <Card key={group.id}>
                      <Column>
                        <div>
                            Id: <Title text={group.id} />
                        </div>
                        <div>
                            Name: <Title text={group.name} />
                        </div>
                    </Column>
                </Card>
            })
        }
    </Wrapper>
}

export default Groups