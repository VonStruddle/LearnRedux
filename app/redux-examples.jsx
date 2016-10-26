var redux = require('redux');

console.log('Starting Redux example');

// Name reducer and action generator
// -------------------------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies reducer and action generator
// -------------------------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies reducer and action generator
// -------------------------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  var state = store.getState();

  console.log('State is', state);
});

store.dispatch(changeName('Quentin'));

store.dispatch(addHobby('Coding'));

store.dispatch(addHobby('High-frequency musculation'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie('Barry Lyndon', 'history'));

store.dispatch(addMovie('Goldeneye', 'action'));

store.dispatch(removeMovie(1));

store.dispatch(changeName('Dudu'));
