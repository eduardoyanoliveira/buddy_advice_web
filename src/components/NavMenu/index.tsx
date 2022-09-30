import { Container, Logo, Menu, MenuItem } from "./styles";
import { useNavigate } from 'react-router-dom';
import { TbMeat } from 'react-icons/tb'
import { BiExit } from 'react-icons/bi';
import { HiOutlineBookOpen } from 'react-icons/hi'

function NavMenu() {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('@token');
        window.location.reload();
    };

    return (
        <Container>
            <Logo onClick={() => navigate('/')}>
                Cheff Advice
            </Logo>
            {
                localStorage.getItem('@token') && (
                    <Menu>
                        <MenuItem>
                            <TbMeat/>
                        </MenuItem>
                        <MenuItem>
                            <HiOutlineBookOpen/>
                        </MenuItem>
                        <MenuItem onClick={logOut}>
                            <BiExit />
                        </MenuItem>
                    </Menu>
                )
            }
           
        </Container>
    );
};

export default NavMenu;