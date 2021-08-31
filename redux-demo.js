const redux = require("redux");

const initialState = {
  counter: 0,
};
const counterReducer = (state = { initialState }, action) => {
  if (action.type === "incriment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "incriment") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

store.dispatch({
  type: "incriment",
});
store.dispatch({
  type: "decriment",
});
