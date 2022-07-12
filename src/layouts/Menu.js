import { Box, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../contexts/auth'

function Menu() {

    const {setIsLogged} = useContext(AuthContext)
    return (
        <Box container="nav" className="menu" sx={{ display: 'flex' }}>
            <MenuItem>
                <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/usuarios">Usuários</Link>
            </MenuItem>
            <MenuItem>
              <a href onClick={() => setIsLogged(false)}>logout</a>
            </MenuItem>
            
        </Box>
    );
}
export default Menu;