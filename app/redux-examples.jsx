var redux = require('redux');

console.log('Starting Redux example');

var reducer = (state = { name: 'Anonymous' }, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Quentin'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dudu'
});
