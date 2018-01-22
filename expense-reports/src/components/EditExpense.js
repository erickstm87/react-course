import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'; 
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                    console.log(expense);
                }}
            />
            <button onClick={() => {
                    props.dispatch(removeExpense({id: props.expense.id}));   
                    props.history.push('/'); 
            }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return{
        expense: state.expense.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);