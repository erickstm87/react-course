import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from'./ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToVariable = (state) => {
    return {
        expenses: selectExpenses(state.expense, state.filters)
    };
};


export default connect(mapStateToVariable)(ExpenseList);
