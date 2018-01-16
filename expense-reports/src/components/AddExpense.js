import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm/>
    </div>
);

export default AddExpensePage;