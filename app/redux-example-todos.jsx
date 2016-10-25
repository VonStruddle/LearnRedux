var redux = require('redux');

console.log('Starting redux-todo example');

var reducer = (state = {
  searchText: '',
  showCompleted: false,
  todos: [] 
}, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

console.log('currentState:', store.getState());

var changeSearchText = {
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Eat vegetables'
}
store.dispatch(changeSearchText);

console.log('currentState:', store.getState());