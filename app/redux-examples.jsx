console.log('Starting Redux example');

var {fetchLocation, changeName, addHobby, removeHobby, addMovie, removeMovie} = require('./actions/index');
var store = require ('./store/configureStore').configure();

store.subscribe(() => {
  var state = store.getState();

  console.log('State is', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View Your Location</a>`;
  }
});

store.dispatch(fetchLocation());

store.dispatch(changeName('Quentin'));

store.dispatch(addHobby('Coding'));

store.dispatch(addHobby('High-frequency musculation'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie('Barry Lyndon', 'history'));

store.dispatch(addMovie('Goldeneye', 'action'));

store.dispatch(removeMovie(1));

store.dispatch(changeName('Dudu'));
