import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const PortfolioPage = () => {
    return(
        <div>
            Here is a list of projects I've been working on. A lot of them revolve around the MERN stack. Let me know what you think:
            <br />
            <NavLink to='/ProjOne' activeClassName='active-class'>Proj1 </NavLink>
            <NavLink to='/ProjTwo' activeClassName='active-class'>Proj2 </NavLink>
        </div>
    )
};

export default PortfolioPage;