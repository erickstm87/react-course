import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({ //when testing on objects or arrays user needs to use toEqual instead of toBe
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should edit an expense on an object', () => {
    const edit = editExpense('145cde', {note: 'passedAnUpdate'});

    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '145cde',
        updates: {
            note: 'passedAnUpdate'
        }
    })
});

test('should setup add expense with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
});