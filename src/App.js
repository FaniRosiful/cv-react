import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './header';
import routes from './config/route';
import FunctionContext from './FunctionContext';
import { ThemeProvider } from './ThemeContact' 

const App = () => {
  return(
    <ThemeProvider>
    <BrowserRouter>
    <Header />
    <Switch>
      {routes.map((route) => {
        return(
          <Route
            path={route.path}
            component={route.component}
            key={route.path}
          />
        );
      })}
    </Switch>
    </BrowserRouter>
    <FunctionContext />
    </ThemeProvider>
  );
};
export default App;
