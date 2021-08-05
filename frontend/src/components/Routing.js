import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ProgramList from './ProgramList';
import Home from './Home';

export const homeRoute = '/';
export const seriesRoute = '/series/';
export const moviesRoute = '/movies/';

export default function Routing() {
    return (
        <Switch>
            <Route path={homeRoute} exact component={Home} />
            <Route
                path={seriesRoute}
                render={() => <ProgramList programType='series' />}
            />
            <Route
                path={moviesRoute}
                render={() => <ProgramList programType='movie' />}
            />
        </Switch>
    );
}
