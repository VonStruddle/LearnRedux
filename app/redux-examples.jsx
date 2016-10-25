var redux = require('redux');

console.log('Starting Redux example');

var reducer = (state = { name: 'Anonymous' }, action) => {
  console.log('New action:', action);

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

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState:', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Quentin'
};
store.dispatch(action);

currentState = store.getState();
console.log('currentState:', currentState);