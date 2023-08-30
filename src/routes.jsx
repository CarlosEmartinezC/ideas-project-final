import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';


const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          {/* Otras rutas */}
        </Switch>
      </Router>
    );
  };
  
  export default AppRouter;