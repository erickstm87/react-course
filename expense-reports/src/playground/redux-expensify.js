import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return [...state, action.expense];
        case 'REMOVE_EXPENSE':
          return state.filter(({id}) => id !== action.id );
        case 'EDIT_EXPENSE':
          return state.map((expense) => {
              if(expense.id === action.id){
                return{
                    ...expense,
                    ...action.updates
                }
              }
              else{
                  return expense;
              }
          })
        default: 
          return state;
    }
};

//Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
          console.log(action.text);
          return {
              ...state,
              text: action.text
          }
        default:
          return state;
    }
}

const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());    
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
store.dispatch(setTextFilter('anotherText'))
store.dispatch(setTextFilter());

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

let person = {
    age: 30,
    name: 'sally'
}

console.log(
    {
        ...person,
        age: 31,
        location: 'philly'
    });

console.log(person);