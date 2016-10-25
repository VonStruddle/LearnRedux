var redux = require('redux');

console.log('Starting Redux example');

var defaultState = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            ...action.movie
          }
        ]
      }
    default:
      return state;
  }
};

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  var state = store.getState();

  console.log('State is', state);
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Quentin'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Coding'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    title: 'Barry Lyndon',
    genre: 'history'
  }
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    title: 'Goldeneye',
    genre: 'action'
  }
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dudu'
});
