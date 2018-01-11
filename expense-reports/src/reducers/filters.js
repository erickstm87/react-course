const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
          return {
              ...state,
              text: action.text
          };
        case 'SORT_AMOUNT':
          return {
              ...state,
              sortBy: 'amount'
          };
        case 'SORT_DATE':
          return {
              ...state,
              sortBy: 'date'
          };
        case 'START_DATE':
          return{
              ...state,
              startDate: action.startDate
          };
        case 'END_DATE':
          return{
              ...state,
              endDate: action.endDate
          }
        default:
          return state;
    }
};