import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import routes from './routes';

const App = () => (
    <>
      <RecoilRoot>
        <Switch>
          {routes.map(({ path, ...props })=> 
            <Route key={path} path={path} {...props} />
          )}
        </Switch>
      </RecoilRoot>
    </>
);

export default App;
