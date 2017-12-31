import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard router
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my ad expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is to edit my expenses
    </div>
);

const HelpPage = () => (
    <div>
        This is my help page
    </div>
);

const routes = (
    <BrowserRouter> 
        <div>
            <Route exact path='/' component={ExpenseDashboardPage}/>
            <Route path='/create' component={AddExpensePage}/>
            <Route path='/edit' component={EditExpensePage}/>
            <Route path='/help' component={HelpPage}/>
        </div>   
     </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app')); 
//ReactDOM.render(<User name='tomas' age={30}/>, document.getElementById('app')); 