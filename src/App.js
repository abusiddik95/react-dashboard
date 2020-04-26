import React, { createContext } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './Components/Login/useAuth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const user = {name: 'kodu mia', email: 'abc@mail.com'}
  return (
    
    <div className="App">
      <AuthContextProvider>
    
      <Router>
        <Switch>
          
         {/* <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>  */}

        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/login">
           <Login></Login>
        </Route>

        <Route path="/">
           <Login></Login>
        </Route>

        </Switch>
        </Router>
      </AuthContextProvider>
    </div>
   
  );
}

export default App;
