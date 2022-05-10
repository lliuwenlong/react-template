import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history'; // eslint-disable-line import/no-extraneous-dependencies
import routerConfig from './config/routerConfig';

import './style.scss';

export const history = createHashHistory();

const App: React.FC = (props) => (
    <div className="app">
        <Router history={history}>
            <Suspense fallback={<span />}>
                <Switch>
                    {
                        routerConfig.map((item, key) => (
                            <Route
                                path={item.path}
                                component={item.component}
                                exact={item.exact}
                                key={item.path}
                            />
                        ))
                    }
                </Switch>
            </Suspense>
        </Router>
    </div>
);

export default App;
