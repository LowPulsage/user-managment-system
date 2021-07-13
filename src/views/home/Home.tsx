import SectionTitle from "@components/section-title/SectionTitle";
import NavBar from "@components/layout/nav-bar/NavBar";
import Users from "@views/users/Users";
import Groups from "@views/groups/Groups";
import { Container, ContentSection } from "./Home.styles";
import Modals from "@views/modals/Modals";


const Home = () => {
    return <Container>
        <NavBar />
        <Modals />
        <ContentSection>
            <SectionTitle>Users</SectionTitle>
            <Users />
            <SectionTitle>Groups</SectionTitle>
            <Groups />
        </ContentSection>
    </Container>
}


export default Home;