import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import WelcomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactForm from '../components/ContactForm';
import NotFound from '../components/NotFound';
import ProjOne from '../components/ProjOne';
import ProjTwo from '../components/ProjTwo';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={WelcomePage}/>
                <Route path='/portfolio' component={PortfolioPage}/>
                <Route path='/contact' component={ContactForm}/>
                <Route path='/ProjOne' component={ProjOne}/>
                <Route path='/ProjTwo' component={ProjTwo}/>
                <Route component={NotFound}/>
            </Switch>  
        </div> 
    </BrowserRouter>
);
 
export default AppRouter;