import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import NewAlbum from "./containers/NewAlbum/NewAlbum";
import Albums from "./containers/Albums/Albums";
import Login from "./containers/Login/Login";
import OneAlbum from "./containers/OneAlbum/OneAlbum";

const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props}/> : <Redirect to="/login" />
);

const Routes = ({user}) => (
    <Switch>
        <Route path="/" exact component={Albums}/>
        <Route path="/albums/:id" exact component={OneAlbum}/>
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