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

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  var state = store.getState();
  console.log(state);
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Eat vegetables'
});

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Do some sport'
});
