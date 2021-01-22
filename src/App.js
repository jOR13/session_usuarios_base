
import React, {useState}  from 'react';
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
import Registrar from './components/Registrar';
import Historial from './components/Historial';

import { UserContext } from "./context/UserContext";


function App() {
  const [userCon, setUserCon] = useState({});
  return (
    
    <>
    <Router>
    
    <NavBar/>
     
    <Switch>
    <UserContext.Provider value={{
            userCon,
            setUserCon
        }}>
          <Route exact path="/juegos">
            <Juegos />
          </Route>
          <Route exact path="/perfil">
            <Perfil />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/historial">
            <Historial />
          </Route>
          <Route exact path="/registrar">
            <Registrar />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </UserContext.Provider>
        </Switch>
    </Router>
    </>
  );
}

export default App;
