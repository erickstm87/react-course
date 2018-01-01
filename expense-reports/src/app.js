import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('app')); 
//ReactDOM.render(<User name='tomas' age={30}/>, document.getElementById('app')); 