import { Container, Menu, MenuItem } from "./styles";
import { useNavigate } from 'react-router-dom';
import { TbMeat } from 'react-icons/tb'
import { BiExit, BiHome } from 'react-icons/bi';
import { HiOutlineBookOpen } from 'react-icons/hi'
import ToggleInputWithFunction from '../Inputs/ToggleInput/WithFunction';
import { ThemeContext } from "../../styles/themeProvider";
import { useContext } from "react";

function NavMenu() {

    const navigate = useNavigate();

    const { toggleTheme } = useContext(ThemeContext);

    const logOut = () => {
        localStorage.removeItem('@token');
        window.location.reload();
    };

    return (
        <Container>
            <Menu>
                <MenuItem onClick={() => navigate('/')}>
                    <BiHome/>
                </MenuItem>
                <MenuItem>
                    <TbMeat onClick={() => navigate('/products/register')}/> 
                </MenuItem>
                <MenuItem>
                    <HiOutlineBookOpen/>
                </MenuItem>
                <MenuItem onClick={logOut}>
                    <BiExit />
                </MenuItem>
                <MenuItem>
                    <ToggleInputWithFunction
                        onClick={toggleTheme}
                    />
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default NavMenu;