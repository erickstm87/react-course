import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

const mapStateToVariable = (state) => {
    return {
        expenses: state.expense,
        filters: state.filters
    };
};


export default connect(mapStateToVariable)(ExpenseList);
