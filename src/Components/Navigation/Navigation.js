import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { Button } from '@mui/material';
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));




const Navigation = () => {
    
    
    const {user, logOut} = useAuth();
return (
    <Box sx={{mb: '120px'}}>
        <AppBar position="fixed" >
            <Box sx={{ display: 'flex', justifyContent: 'space-around',alignItems: 'center', height: '60px', backgroundColor: '#00cba9' }}>
                <NavLink to="/" style={{textDecoration: 'none'}} ><Typography variant="h6" noWrap component="div" sx={{ color: 'black', fontWeight: 'bold', paddingRight: '50px'}}>
                    Nima
                </Typography></NavLink>
                <NavLink to="/home" style={{textDecoration: 'none'}} ><Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold'}}>
                    Home
                </Typography></NavLink>
                <NavLink to="/explore" style={{textDecoration: 'none'}} ><Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold'}}>
                    Explore
                </Typography></NavLink>
            
                { user.email ? <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', paddingLeft: '100px'}}>
                <NavLink to="/dashboard" style={{textDecoration: 'none', paddingRight: '100px'}} ><Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold'}}>
                    Dashboard
                </Typography></NavLink>
                <Typography variant="h6" >{user.displayName}</Typography>
                <Button variant="contained" onClick={logOut} sx={{color: 'white', backgroundColor: '#00604e', fontWeight: 800}}>Log Out</Button>
                </div>:
                <NavLink to="/login" style={{textDecoration: 'none', textAlign: 'center'}} ><Button variant="contained"  sx={{color: 'white', backgroundColor: '#00604e', fontWeight: 800}}>Log In</Button></NavLink>}
            </Box>
        </AppBar>
    </Box>
)
}
export default Navigation;