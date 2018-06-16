import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Albums from "./containers/Albums/Albums";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/albums/:id" exact component={Albums}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
