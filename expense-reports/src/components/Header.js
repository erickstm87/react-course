import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact> [Dashboard] </NavLink>
        <NavLink to='/create' activeClassName='is-active'> [Create Stuff] </NavLink>
        <NavLink to='/help' activeClassName='is-active'> [In Need of Assistance] </NavLink>
    </header>
);

export default Header;