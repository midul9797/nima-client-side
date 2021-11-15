import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Pay from '../Pay/Pay'
import MyOrders from '../MyOrders/MyOrders'
import AddReview from '../AddReview/AddReview'
import AddToy from '../AddToy/AddToy'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import ManageAllToys from '../ManageAllToys/ManageAllToys'
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders'
import {

  Switch,
  Route,

  useRouteMatch,
  NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../Hook/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ textAlign: 'center' }}>
      <Toolbar />
      <Divider />
      {
        admin ? <Box>
          <NavLink to={`${url}/all_orders`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
            Manage All Orders
          </Typography></NavLink>
          <br />
          <NavLink to={`${url}/all_toys`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
            Manage Toys
          </Typography></NavLink>
          <br />
          <NavLink to={`${url}/make_admin`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
            Make Admin
          </Typography></NavLink>
          <br />
          <NavLink to={`${url}/add_toy`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
            Add Toy
          </Typography></NavLink>
          <br />
        </Box> :
          <Box>
            <NavLink to={`${url}/pay`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
              Pay
            </Typography></NavLink>
            <br />
            <NavLink to={`${url}/my_orders`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
              My Orders
            </Typography></NavLink>
            <br />
            <NavLink to={`${url}/review`} style={{ textDecoration: 'none' }} ><Typography variant="h6" noWrap component="div" sx={{ color: '#00cba9', fontWeight: 'bold', m: 1 }}>
              Review
            </Typography></NavLink>
            <br />
          </Box>
      }
      <Button variant='contained' onClick={logOut}>Log Out</Button>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: '#00cba9' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            Dashboard
          </Typography>
          <NavLink to="/" style={{textDecoration: 'none', paddingLeft: '350px'}}>         
           <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold'}}>
            Home
          </Typography></NavLink>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{

            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5,color: '#00cba9' }}>Welcome to Dashboard</Typography>
        <Toolbar />
        <Switch>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/my_orders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <AddReview />
          </Route>
          <Route path={`${path}/make_admin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/all_orders`}>
            <ManageAllOrders />
          </Route>
          <Route path={`${path}/add_toy`}>
            <AddToy />
          </Route>
          <Route path={`${path}/all_toys`}>
            <ManageAllToys />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
