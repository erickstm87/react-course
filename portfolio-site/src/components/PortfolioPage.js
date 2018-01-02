import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const PortfolioPage = () => {
    return(
        <div>
            Here is a list of projects I've been working on. A lot of them revolve around the MERN stack. Let me know what you think:
            <br />
            <Link to='/ProjOne'>Proj1 </Link>
            <Link to='/ProjTwo'>Proj2 </Link>
        </div>
    )
};

export default PortfolioPage;