import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'anewid',
        description: 'Rent for the  month',
        note: 'keep paying rent keep paying rent',
        amount: 84000,  //this is in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}