import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Component/Login/login';
import Profile from './Component/Profile/profile';

function App() {
  return (
   <Switch>
     <Route exact path="/" component={Login}/>
     <Route path="/profile" component={Profile} />
   </Switch>
  );
}

export default App;
