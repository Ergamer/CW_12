import React from 'react';
import {Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <LinkContainer to="/" exact><a>Albums</a></LinkContainer>
            </Navbar.Brand>
            <Navbar.Brand>
                <LinkContainer to="/albums/new" exact><a>New album</a></LinkContainer>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            {user ? <UserMenu user={user} logout={logout} /> : <AnonymousMenu/>}
        </Navbar.Collapse>
    </Navbar>
);

export default Toolbar;