import { Button } from '@components/forms';
import { openCreateGroupModal, openCreateUserModal } from '@store/modals/modals.slice';
import { useDispatch } from 'react-redux';
import { LogoTitle, Section, NavbarWrapper } from './NavBar.styles';

const NavBar = () => {
   const dispatch = useDispatch();

   const createUserModal = () => {
      dispatch(openCreateUserModal());
   }

   const createGroupModal = () => {
      dispatch(openCreateGroupModal())
   }

   return <NavbarWrapper>
      <Section>
         <LogoTitle >
            User Managment Sysytem
         </LogoTitle>
      </Section>
      <Section>
         <Button label={'Create user'} onClick={createUserModal} />
         <Button label={'Create group'} onClick={createGroupModal} />
      </Section>
   </NavbarWrapper>
}

export default NavBar;