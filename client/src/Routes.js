import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import NewAlbum from "./containers/NewAlbum/NewAlbum";
import Albums from "./containers/Albums/Albums";
import Login from "./containers/Login/Login";

const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props}/> : <Redirect to="/login" />
);

const Routes = ({user}) => (
    <Switch>
        <Route path="/" exact component={Albums}/>
        <ProtectedRoute
            isAllowed={user}
            path="/albums/new"
            exact
            component={NewAlbum}
        />
        <Route path="/login" exact component={Login}/>
    </Switch>
);

export default Routes;