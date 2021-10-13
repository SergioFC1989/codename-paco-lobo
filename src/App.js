import React from 'react';
import { Route, Switch } from 'react-router-dom'
import routes from './routes';

const App = () => (
    <>
      <Switch>
        {routes.map(({ path, ...props })=> 
          <Route key={path} path={path} {...props} />
        )}
      </Switch>
    </>
);

export default App;
