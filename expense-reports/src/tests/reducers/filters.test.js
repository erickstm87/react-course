import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const state = filtersReducer(undefined, {type: 'SET_TEXT', text});
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'START_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'END_DATE'});
    expect(state.sortBy).toBe('date');
})