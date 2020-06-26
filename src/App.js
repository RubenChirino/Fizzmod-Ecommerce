import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {


  return ( 
     <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
