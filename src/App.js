
import React  from 'react';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Juegos from './components/Juegos';
import Perfil from './components/Perfil';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';



function App() {
  return (
    <>
    
    <Router>
    
    <NavBar/>
     
    <Switch>
          <Route path="/juegos">
            <Juegos />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
