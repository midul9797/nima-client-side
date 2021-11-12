import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Home from './Components/Home/Home'
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Navigation from "./Components/Navigation/Navigation";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Purchase from "./Components/Purchase/Purchase";
import AddToy from "./Components/AddToy/AddToy";
import MyOrders from "./Components/MyOrders/MyOrders";
import Pay from "./Components/Pay/Pay";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/add_toy">
            <AddToy></AddToy>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/my_orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
