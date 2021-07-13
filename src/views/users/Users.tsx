import { useDispatch, useSelector } from "react-redux"

import { getUsers } from "@store/users/users.seletors"
import Column from "@components/column/Column"
import Card from "@components/card/Card"
import Title from "@components/title/Title"
import userLogo from '@assets/img/user-logo.png';

import Img from "@components/img/Img"
import Center from "@components/center/Center"
import Wrapper from "@components/layout/wrapper/Wrapper"
import { openUserDetailModal } from "@store/modals/modals.slice"

const Users: React.FC = () => {
    const users = useSelector(getUsers)
    const dispatch = useDispatch();

    const handleClickCard = (userId: string) => () => {
        dispatch(openUserDetailModal({
            userId
        }))
    }

    return <Wrapper>
        {
            users.map(user => {
                return <Card key={user.id} onClick={handleClickCard(user.id)} >
                    <Center>
                        <Img src={userLogo} />
                    </Center>
                    <Column>
                        <div>
                            Id: <Title text={user.id} />
                        </div>
                        <div>
                            Name: <Title text={user.name} />
                        </div>
                        <div>
                            Email:  <Title text={user.email} />
                        </div>
                    </Column>
                </Card>
            })
        }
    </Wrapper>
}

export default Users
